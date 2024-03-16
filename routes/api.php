<?php

use App\Http\Controllers\Client\ProductController;
use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('createAdmin', function () {
    $data = [
        'id' => 'Admin01',
        'name' => 'admin',
        'email' => 'admin@gmail.com',
        'password' => bcrypt('Admin@123'),
        'phone' => '0000000000',
        'address' => '......',
        'avatar' => asset('uploads/avatar.png'),
        'role' => 1,
        'status' => 1,
    ];
    User::create($data);
    return response()->json([
        'status' => 'success',
        'email' => $data['email'],
        'password' => 'Admin@123'
    ]);
});
