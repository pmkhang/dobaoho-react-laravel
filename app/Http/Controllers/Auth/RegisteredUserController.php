<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\Auth\RegisterRequest;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register',[
            'status' => session('status'),
            'message' => session('message'),
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterRequest $request)
    {
        require_once app_path('Lib/generateIDUser.php');
        $id = generateIDUser();

        $url_image = asset('uploads/avatar.png');
        $data = [
            'id' => $id,
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => 2,
            'phone' => $request->phone,
            'address' => $request->address,
            'avatar' => $url_image,
            'status' => 1,
        ];
        User::create($data);
        return redirect()->route('login')->with([
            'status' => true,
            'message' => "Đăng ký tài khoảng thành công"
        ]);
    }
}
