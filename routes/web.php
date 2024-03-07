<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Client/Welcome');
// });

// Route::get('/about', function () {
//     return Inertia::render('Client/About');
// });

Route::prefix('')->group(function () {
    Route::get('', [HomeController::class, 'index'])->name('home');
    Route::get('/san-pham-1', [ProductController::class, 'productDetailPage'])->name('product-detail');
    Route::get('/ve-chung-toi', function () {
        return Inertia::render('Client/About');
    })->name('about');
});

Route::prefix('admin')->group(function () {
    Route::get('', [DashboardController::class, 'index'])->name('dashboard');
});
