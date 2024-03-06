<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    Route::get('', function () {
        return Inertia::render('Client/Home');
    });
    Route::get('/about', function () {
        return Inertia::render('Client/About');
    })->name('about');
});
