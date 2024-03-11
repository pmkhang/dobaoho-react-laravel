<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Http\Requests\User\UpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::select('id', 'name', 'email', 'phone', 'role', 'status', 'avatar')
            ->where('status', '>', 0)
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
    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Admin/user/UserEdit', [
            'user' => $user
        ]);
    }
    public function update(UpdateRequest $request, $id)
    {
        $user = User::findOrFail($id);
        $new_avatar = '';
        if ($request->hasFile('new_avatar')) {

            $request->validate([
                'new_avatar.*' => 'mimes:jpeg,png,jpg,gif',
            ], [
                'new_avatar.mimes' => 'Hình sai định dạng',
            ]);
            $filename = time() . '-' . $request->new_avatar[0]->getClientOriginalName();
            $request->new_avatar[0]->move(public_path('uploads/'), $filename);
            $new_avatar = asset('uploads/' . $filename);

            if (basename($user->avatar) != 'avatar.png') {
                $old_avatar = public_path('uploads/' . basename($user->avatar));
                if (file_exists($old_avatar)) {
                    unlink($old_avatar);
                }
            }
        } else {
            $new_avatar = $user->avatar;
        }

        $data = [
            'name' => $request->name,
            'email' => $user->email,
            'role' => $request->role,
            'phone' => $request->phone,
            'address' => $request->address,
            'avatar' => $new_avatar,
            'status' => $request->status,
        ];

        if (!empty($request->password) || !empty($request->password_confirmation)) {
            $request->validate(
                [
                    'password' => 'required|string|min:8|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/',
                    'password_confirmation' => 'required|same:password',
                ],
                [
                    'password.required' => 'Bạn phải nhập password',
                    'password_confirmation.required' => 'Bạn phải nhập xác nhận password',
                    'password.min' => 'Password phải có ít nhất 8 ký tự và bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.',
                    'password.regex' => 'Password phải có ít nhất 8 ký tự và bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.',
                    'password_confirmation.same' => 'Xác nhận mật khẩu phải trùng với mật khẩu',
                ]
            );
            $data['password'] = bcrypt($request->password);
        }
        $user->update($data);
        return redirect()->route('user')->with([
            'status' => true,
            'message' => 'Cập nhật người dùng thành công',
        ]);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->status = 0;
        $user->save();
        return redirect()->back()->with([
            'status' => true,
            'message' => 'Xóa người dùng thành công'
        ]);
    }
}
