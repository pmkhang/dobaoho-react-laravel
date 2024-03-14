<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::where('status', '>', 0)
            ->select('id', 'name', 'parent_id')
            ->get();
            
        $products = Category::where('status', '>', 0)
            ->select('id', 'name', 'parent_id')
            ->with(['products' => function ($query) {
                $query->with('productImages')->take(8);
            }])
            ->get();

        return Inertia::render('Client/Home', [
            'categories' => $categories,
            'products' => $products
        ]);
    }
}
