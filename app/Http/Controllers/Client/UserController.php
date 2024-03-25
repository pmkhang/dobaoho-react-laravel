<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function showInfo()
    {
        // return Inertia::render('Client/User/Index');
    }
    public function showOrders()
    {
        $countProductCart = "";
        if (Auth::check()) {
            $countProductCart = Cart::where('user_id', Auth::user()->id)
                ->where('status', 1)
                ->count();
        }
        $user = Auth::user();

        $invoices = Invoice::where('user_id', $user->id)
            ->select('id', 'status', 'total_price', 'created_at')
            ->orderBy('created_at', 'DESC')
            ->with(['invoiceDetails' => function ($query) {
                $query->with(['carts' => function ($query) {
                    $query->select('id', 'product_id', 'quantity', 'price_per_1')
                        ->with(['products' => function ($query) {
                            $query->select('id', 'name')
                                ->with('productImages');
                        }]);
                }]);
            }])
            ->get();

        return Inertia::render('Client/UserOrders', [
            'countProductCart' => $countProductCart,
            'invoices' => $invoices
        ]);
    }
}
