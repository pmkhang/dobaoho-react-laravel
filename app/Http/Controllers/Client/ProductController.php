<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartProducts;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductFeedbacks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function productDetailPage($id)
    {
        $categories = Category::where('status', '>', 0)
            ->select('id', 'name', 'parent_id')
            ->get();

        $product = Product::where('status', 1)
            ->select('id', 'name', 'category_id', 'price', 'status', 'desc', 'rate_avg')
            ->with('productImages')
            ->with('category')
            ->with('productFeedbacks')
            ->with('productClassifys')
            ->findOrFail($id);

        $productsByCategory = Category::where('status', '>', 0)
            ->select('id', 'name', 'parent_id')
            ->with(['products' => function ($query) {
                $query
                    ->select('id', 'name', 'price', 'status', 'rate_avg', 'category_id')
                    ->where('status', 1)
                    ->orderBy('id', 'desc')
                    ->with(['productImages' => function ($query) {
                        $query
                            ->orderBy('id', 'asc')
                            ->take(1);
                    }])
                    ->take(8);
            }])
            ->findOrFail($product->category_id);

        $countProductCart = "";
        if (Auth::check()) {
            $countProductCart = Cart::where('user_id', Auth::user()->id)
                ->where('status', 1)
                ->count();
        }

        return Inertia::render('Client/ProductDetail', [
            'categories' => $categories,
            'product' => $product,
            'productsByCategory' => $productsByCategory,
            'countProductCart' => $countProductCart
        ]);
    }

    public function sendFeedback(Request $request)
    {
        $request->validate([
            'product_id' => 'required|string',
            'rate' => 'required|numeric',
            'content' => 'required|string',
            'title' => 'required|string',
            'name' => 'required|string'
        ]);
        $data = [
            'product_id' => $request->product_id,
            'user_id' => $request->user_id,
            'rate' => $request->rate,
            'content' => $request->content,
            'title' => $request->title,
            'name' => $request->name,
            'status' => 1
        ];
        ProductFeedbacks::create($data);
        return redirect()->route('product-detail', ['id' => $request->product_id]);
    }

    public function productListByCategory(Request $request, $category_id)
    {

        $categories = Category::where('status', '>', 0)
            ->select('id', 'name', 'parent_id')
            ->get();
        $category = Category::select('id', 'name')->findOrFail($category_id);

        $query = Product::where('status', 1)
            ->where('category_id', $category_id)
            ->select('id', 'name', 'category_id', 'price', 'status', 'rate_avg')
            ->with('productImages')
            ->with('category');

        if (in_array($request->price, ['asc', 'ASC'], true) || in_array($request->price, ['desc', 'DESC'], true)) {
            $query = $query->orderBy('price', $request->price);
        }

        $products = $query->get();


        $countProductCart = "";
        if (Auth::check()) {
            $countProductCart = Cart::where('user_id', Auth::user()->id)
                ->where('status', 1)
                ->count();
        }
        return Inertia::render('Client/ProductList', [
            'products' => $products,
            'categories' => $categories,
            'category' => $category,
            'countProductCart' => $countProductCart
        ]);
    }

    public function searchProducts(Request $request)
    {
        $request->validate([
            'search' => 'required|string'
        ]);
        $products = [];
        if ($request->search != '') {
            $products = Product::where('name', 'like', '%' . $request->search . '%')
                ->orWhere('id', 'like', '%' . $request->search . '%')
                ->where('status', 1)
                ->select('id', 'name', 'rate_avg')
                ->with(['productImages' => function ($query) {
                    $query->take(1);
                }])
                ->get();
        } else {
            $products = [];
        }

        return response()->json([
            'status' => true,
            'products' => $products
        ]);
    }

    public function searchProductPage(Request $request)
    {

        $request->validate([
            'search' => 'required|string'
        ]);

        $products = Product::where('name', 'like', '%' . $request->search . '%')
            ->orWhere('id', 'like', '%' . $request->search . '%')
            ->where('status', 1)
            ->select('id', 'name', 'rate_avg')
            ->with(['productImages' => function ($query) {
                $query->take(1);
            }])
            ->get();

        return Inertia::render('Client/SearchProducts', [
            'products' => $products,
            'keyword' => $request->search
        ]);
    }
}
