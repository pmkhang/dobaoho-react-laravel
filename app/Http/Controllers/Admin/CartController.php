<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/cart/Cart');
    }

    public function create()
    {
        return Inertia::render('Admin/cart/CartCreate');
    }
}
