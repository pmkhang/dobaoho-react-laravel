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
            ->orderBy('created_at', 'DESC')
            ->get();
            
        return Inertia::render('Client/Home', [
            'categories' => $categories
        ]);
    }
}
