<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function productDetailPage()
    {
        return Inertia::render('Client/ProductDetail');
    }
}
