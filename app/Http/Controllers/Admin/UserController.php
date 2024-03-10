<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::select('id', 'name', 'email', 'phone', 'role', 'status', 'avatar')
            ->orderBy('created_at', 'DESC')
            ->get();
        return Inertia::render('Admin/user/User', [
            'status' => session('status'),
            'message' => session('message'),
            'users' => $users
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/user/UserCreate');
    }
    public function store(StoreRequest $request)
    {
        require_once app_path('Lib/generateIDUser.php');
        $id = generateIDUser();

        $file = $request->avatar;
        $url_image = '';
        if ($file) {
            $request->validate([
                'avatar.*' => 'mimes:jpeg,png,jpg,gif',
            ], [
                'avatar.mimes' => 'Hình sai định dạng',
            ]);
            $filename = time() . '-' . $file[0]->getClientOriginalName();
            $file[0]->move(public_path('uploads/'), $filename);
            $url_image = asset('uploads/' . $filename);
        } else {
            $url_image = asset('uploads/avatar.png');
        }

        $data = [
            'id' => $id,
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => $request->role,
            'phone' => $request->phone,
            'address' => $request->address,
            'avatar' => $url_image,
            'status' => $request->status,
        ];
        User::create($data);

        return redirect()->route('user')->with([
            'status' => true,
            'message' => 'Thêm người dùng thành công',
        ]);
    }
}
