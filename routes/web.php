<?php

use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ContactController as AdminContactController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Client\CartController as ClientCartController;
use App\Http\Controllers\Client\ContactController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ProductController;
use App\Http\Controllers\Client\UserController as ClientUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;


Route::prefix('')->group(function () {
    Route::redirect('/public', '/');
    Route::redirect('/cpanel', '/');
    Route::get('', [HomeController::class, 'index'])->name('home');
    Route::get('/ve-chung-toi', function () {
        return Inertia::render('Client/About');
    })->name('about');
    Route::get('/lien-he', [ContactController::class, 'index'])->name('contact');
    Route::post('/lien-he', [ContactController::class, 'store'])->name('sendContact');

    Route::middleware('auth')->group(function () {
        Route::prefix('/gio-hang')->controller(ClientCartController::class)->group(function () {
            Route::get('', 'index')->name('clientCart');
            Route::post('/them-san-pham', 'store')->name('addProductToCart');
            Route::post('/{id}/cap-nhat-so-luong', 'updateQuantity')->name('updateQuantity');
            Route::get('/check-out/{id}', 'checkout')->name('checkout');
            Route::post('/check-out/{id}', 'createInvoice')->name('createInvoice');
        });
        Route::post('gui-feedback', [ProductController::class, 'sendFeedback'])->name('sendFeedback');
        Route::prefix('/thanh-vien')
            ->controller(ClientUserController::class)
            ->group(function () {
                Route::get('/don-mua', 'showOrders')->name('showOrders');
                Route::get('/thong-tin-ca-nhan', 'showProfile')->name('showProfile');
                Route::post('/sua-thong-tin-ca-nhan/{id}', 'editProfile')->name('editProfile');
            });
    });

    Route::prefix('/san-pham')
        ->controller(ProductController::class)
        ->group(function () {
            Route::get('/{id}', 'productDetailPage')->name('product-detail');
            Route::get('the-loai/{category_id}', 'productListByCategory')->name('productListByCategory');
        });

    Route::prefix('/lien-he')
        ->controller(AdminContactController::class)
        ->group(function () {
            Route::get('/{id}', 'contactDetail')->name('contactDetail');
        });
});

Route::prefix('admin')
    ->middleware('checkUserRole')
    ->group(function () {

        Route::get('', function () {
            return redirect()->route('dashboard');
        })->name('admin');

        Route::prefix('/dashboard')
            ->controller(DashboardController::class)
            ->group(function () {
                Route::get('', 'index')->name('dashboard');
            });

        Route::prefix('/the-loai-san-pham')
            ->controller(CategoryController::class)
            ->group(function () {
                Route::get('', 'index')->name('category');
                Route::get('/them-the-loai-moi', 'create')->name('createCategory');
                Route::post('/them-the-loai-moi', 'store')->name('storeCategory');
                Route::get('/{id}/chinh-sua', 'edit')->name('editCategory');
                Route::post('/{id}', 'update')->name('updateCategory');
                Route::get('/{id}/xoa', 'destroy')->name('destroyCategory');
            });

        Route::prefix('/san-pham')
            ->controller(AdminProductController::class)
            ->group(function () {
                Route::get('', 'index')->name('product');
                Route::get('/them-san-pham-moi', 'create')->name('createProduct');
                Route::post('/them-san-pham-moi', 'store')->name('storeProduct');
                Route::get('/{id}/chinh-sua', 'edit')->name('editProduct');
                Route::post('/{id}', 'update')->name('updateProduct');
                Route::get('/{id}/xoa', 'destroy')->name('destroyProduct');
                Route::get('/{id}/xoa-anh', 'deleteImage')->name('deleteImage');
                Route::get('/da-xoa', 'productsDeleted')->name('productsDeleted');
                Route::get('/{id}/khoi-phuc', 'restoreProduct')->name('restoreProduct');
            });

        Route::prefix('/thanh-vien')
            ->controller(UserController::class)
            ->group(function () {
                Route::get('', 'index')->name('user');
                Route::get('/them-thanh-vien-moi', 'create')->name('createUser');
                Route::post('/them-thanh-vien-moi', 'store')->name('storeUser');
                Route::get('/{id}/chinh-sua', 'edit')->name('editUser');
                Route::post('/{id}', 'update')->name('updateUser');
                Route::get('/{id}/xoa', 'destroy')->name('destroyUser');
                Route::get('/{id}/chi-tiet', 'showDetail')->name('showDetail');
                Route::get('/da-xoa', 'usersDeleted')->name('usersDeleted');
                Route::get('/{id}/khoi-phuc', 'restoreUser')->name('restoreUser');
            });

        Route::prefix('/don-hang')
            ->controller(OrderController::class)
            ->group(function () {
                Route::get('', 'index')->name('order');
                Route::get('/{id}', 'orderDetail')->name('orderDetail');
                Route::post('/{id}', 'updateStatus')->name('updateStatus');
            });
    });

require __DIR__ . '/auth.php';
