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
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function productDetailPage($id)
    {
        $product = Product::where('status', 1)
            ->select('id', 'name', 'category_id', 'price', 'status', 'desc', 'sub_desc', 'rate_avg')
            ->with('productImages')
            ->with('category')
            ->with('productFeedbacks')
            ->with('productClassifys')
            ->findOrFail($id);

        $sql = "SELECT p.id, p.name, p.price, p.rate_avg, pi.image, c.name AS category_name, c.id AS category_id
            FROM products p
            JOIN product_images pi ON p.id = pi.product_id
            JOIN categories c ON p.category_id = c.id
            WHERE p.status = 1 AND c.id = ? AND p.id != ?
            AND pi.id = (SELECT MIN(pi2.id) FROM product_images pi2 WHERE pi2.product_id = p.id)";

        $productsByCategory = DB::select($sql, [$product->category_id, $id]);


        $productsGroupByCategory = $this->groupProductsByCategory($productsByCategory);


        return Inertia::render('Client/ProductDetail', [
            'product' => $product,
            'productsGroupByCategory' => $productsGroupByCategory
        ]);
    }

    private function groupProductsByCategory($products)
    {
        $productsByCategory = [];
        foreach ($products as $product) {
            $category_id = $product->category_id;
            $category_name = $product->category_name;

            if (!isset($productsByCategory[$category_id])) {
                $productsByCategory[$category_id] = [
                    'id' => $category_id,
                    'name' => $category_name,
                    'products' => []
                ];
            }
            $productsByCategory[$category_id]['products'][] = [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'rate_avg' => $product->rate_avg,
                'image' => $product->image
            ];
        }
        $productsByCategory = array_values($productsByCategory);
        return $productsByCategory;
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

        $category = Category::select('id', 'name')->findOrFail($category_id);

        $sql = "SELECT p.id, p.name, p.price, p.rate_avg, pi.image
            FROM products p
            JOIN product_images pi ON p.id = pi.product_id
            JOIN categories c ON p.category_id = c.id
            WHERE p.status = 1 AND c.id = ?
            AND pi.id = (SELECT MIN(pi2.id) FROM product_images pi2 WHERE pi2.product_id = p.id)";

        $products = DB::select($sql, [$category_id]);

        return Inertia::render('Client/ProductList', [
            'products' => $products,
            'category' => $category,
        ]);
    }

    public function searchProducts(Request $request)
    {
        $request->validate([
            'search' => 'required|string'
        ]);
        $products = [];
        if ($request->search != '') {
            $products = Product::where('status', 1)
                ->where('name', 'like', '%' . $request->search . '%')
                ->orWhere('id', 'like', '%' . $request->search . '%')
                ->select('id', 'name', 'rate_avg')
                ->with(['productImages' => function ($query) {
                    $query->take(1);
                }])
                ->get();
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
