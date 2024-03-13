<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function productDetailPage()
    {
        $categories = Category::where('status', '>', 0)
            ->select('id', 'name', 'parent_id')
            ->get();
        return Inertia::render('Client/ProductDetail', [
            'categories' => $categories
        ]);
    }
    public function getProductsByCategory()
    {
        $categories = Category::where('status', '>', 0)
            ->with(['products' => function ($query) {
                $query->limit(10);
            }])->get();
        dd($categories->toArray());
    }
}
