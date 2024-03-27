<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartProducts;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::where('status', '>', 0)
            ->select('id', 'name', 'parent_id')
            ->get();

        $products = Category::where('status', '>', 0)
            ->has('products')
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
                    ->take(4);
            }])
            ->get();

        $countProductCart = "";
        if (Auth::check()) {
            $countProductCart = Cart::where('user_id', Auth::user()->id)
                ->where('status', 1)
                ->count();
        }

        return Inertia::render('Client/Home', [
            'categories' => $categories,
            'products' => $products,
            'countProductCart' => $countProductCart
        ]);
    }
}
