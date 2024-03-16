<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartProducts;
use App\Models\Category;
use App\Models\Product;
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
            ->findOrFail($id);

        $productsByCategory = Category::where('status', '>', 0)
            ->select('id', 'name', 'parent_id')
            ->with(['products' => function ($query) use ($id) {
                $query->where('id', '!=', $id)
                    ->where('status', 1)
                    ->with('productImages')
                    ->take(10);
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
}
