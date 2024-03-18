<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartProducts;
use App\Models\Product;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        $countProductCart = Cart::where('user_id', Auth::user()->id)
            ->where('status', 1)
            ->count();
        $cartProducts = Cart::where('user_id', Auth::user()->id)
            ->where('status', 1)
            ->with(['products' => function ($query) {
                $query->with('productImages');
            }])
            ->get();
        $total_price = 0;
        foreach ($cartProducts as $cartProduct) {
            $total_price += $cartProduct->products[0]->price * $cartProduct->quantity;
        }

        return Inertia::render('Client/Cart', [
            'countProductCart' => $countProductCart,
            'cartProducts' => $cartProducts,
            'total_price' => $total_price,
            'user_id' => Auth::user()->id,
        ]);
    }
    public function store(Request $request)
    {
        $user = Auth::user();
        $cartProducts = Cart::where('user_id', $user->id)
            ->where('product_id', $request->product_id)
            ->where('status', 1)
            ->first();

        if ($cartProducts) {
            $dataCartDetail = [
                "quantity" => $cartProducts->quantity + $request->quantity,
            ];
            $cartProducts->update($dataCartDetail);
        } else {
            $dataCartDetail = [
                "product_id" => $request->product_id,
                "quantity" => $request->quantity,
                "user_id" => $user->id,
                "status" => 1
            ];
            Cart::create($dataCartDetail);
        }
    }
    public function checkout($id)
    {
        if (Auth::user()->id != $id) {
            return redirect()->route('home');
        }
        $countProductCart = Cart::where('user_id', Auth::user()->id)
            ->where('status', 1)
            ->count();
        $cartProducts = Cart::where('user_id', Auth::user()->id)
            ->where('status', 1)
            ->with(['products' => function ($query) {
                $query->with('productImages');
            }])
            ->get();
        $total_price = 0;
        foreach ($cartProducts as $cartProduct) {
            $total_price += $cartProduct->products[0]->price * $cartProduct->quantity;
        }
        return Inertia::render('Client/Checkout', [
            'countProductCart' => $countProductCart,
            'cartProducts' => $cartProducts,
            'total_price' => $total_price,
        ]);
    }

    public function updateQuantity(Request $request, $id)
    {
        $cartProducts = Cart::findOrFail($id);


        if (!empty($request->quantity)) {
            $cartProducts->update(["quantity" => $request->quantity]);
        }
        if (!empty($request->plus)) {
            $cartProducts->update(["quantity" => $request->plus]);
        }
        if ($request->minus == "0") {
            $cartProducts->delete();
        } elseif (!empty($request->minus)) {
            $cartProducts->update(['quantity' => $request->minus]);
        }

        return redirect()->back();
    }
}
