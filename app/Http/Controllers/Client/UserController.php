<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Invoice;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function showProfile()
    {
        $countProductCart = "";
        if (Auth::check()) {
            $countProductCart = Cart::where('user_id', Auth::user()->id)
                ->where('status', 1)
                ->count();
        }
        $user = Auth::user();
        return Inertia::render('Client/UserProfile', [
            'countProductCart' => $countProductCart,
            'user' => $user,
        ]);
    }

    public function editProfile(Request $request, $id)
    {
        // dd($request->all());

        $user = User::findOrFail($id);
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'address' => 'required|string',
        ]);
        $avatar = '';
        if ($request->hasFile('avatar')) {
            $request->validate([
                'avatar' => 'mimes:jpeg,png,jpg',
            ], [
                'avatar.mimes' => 'Hình sai định dạng',
            ]);

            $avatarFile = $request->file('avatar');
            $filename = time() . '-' . $avatarFile->getClientOriginalName();
            $avatarFile->move(public_path('uploads/'), $filename);
            $avatar = asset('uploads/' . $filename);

            if (basename($user->avatar) != 'avatar.png') {
                $old_avatar = public_path('uploads/' . basename($user->avatar));
                if (file_exists($old_avatar)) {
                    unlink($old_avatar);
                }
            }
        } else {
            $avatar = $user->avatar;
        }

        $data = [
            'name' => $request->name,
            'email' => $user->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'avatar' => $avatar,
        ];
        $user->update($data);
        return redirect()
            ->route('showProfile');
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
