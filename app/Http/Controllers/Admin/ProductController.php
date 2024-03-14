<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImages;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $queries = [
            'statusProduct' => $request->status ?? "",
            'category_id' => $request->category_id ?? "",
            'rate_avg' => $request->rate_avg ?? "",
            'price' => $request->price ?? "",
            'limit' => $request->limit ?? 10,
            'name' => $request->name ?? "",
        ];
        $categories = Category::select('id', 'name', 'parent_id')
            ->where('status', '>', 0)
            ->get();

        $query = Product::select('id', 'name', 'category_id', 'price', 'status', 'rate_avg')
            ->where('status', '>', 0)
            ->orderBy('created_at', 'DESC')
            ->with(['productImages' => function ($query) {
                $query->select('id', 'image', 'product_id')->take(1);
            }])
            ->with(['category' => function ($query) {
                $query->select('id', 'name');
            }]);

        if ($queries['category_id'] != "") {
            $query = $query->where('category_id', $queries['category_id']);
        }
        if ($queries['statusProduct'] != "") {
            $query = $query->where('status', $queries['statusProduct']);
        }
        if ($queries['rate_avg'] != "") {
            $query = $query->orderBy('rate_avg', $queries['rate_avg']);
        }
        if ($queries['price'] != "") {
            $query = $query->orderBy('price', $queries['price']);
        }

        $name = $queries['name'];
        if ($name) {
            $query->where(function ($query) use ($name) {
                $query->where('name', 'like', '%' . $name . '%')
                    ->orWhere('id', 'like', '%' . $name . '%');
            });
        }

        $products = $query->paginate($queries['limit']);


        return Inertia::render('Admin/product/Product', [
            'status' => session('status'),
            'message' => session('message'),
            'products' => $products,
            'queries' => $queries,
            'categories' => $categories
        ]);
    }
    public function create()
    {
        $categories = Category::select('id', 'name', 'parent_id')
            ->where('status', '>', 0)
            ->get();
        return Inertia::render('Admin/product/ProductCreate', [
            'categories' => $categories
        ]);
    }
    public function store(StoreRequest $request)
    {
        require_once app_path('Lib/generateIDProduct.php');
        $id = generateIDProduct();

        $data = [
            'id' => $id,
            'name' => $request->name,
            'desc' => $request->desc,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'status' => $request->status,
        ];
        $product = Product::create($data);

        if ($request->hasFile('images')) {
            $images = $request->file('images');
            $data = [];
            foreach ($images as $image) {
                $filename = time() . '-' . $image->getClientOriginalName();
                $image->move(public_path('uploads/'), $filename);
                $data[] = [
                    'product_id' => $product->id,
                    'image' => asset('uploads/' . $filename),
                ];
            }
            ProductImages::insert($data);
        }

        return redirect()->route('product')->with([
            'status' => true,
            'message' => 'Thêm sản phẩm thành công'
        ]);
    }
    public function edit($id)
    {
        $product = Product::select('id', 'name', 'category_id', 'price', 'status', 'desc')
            ->with(['productImages:id,image,product_id'])
            ->findOrFail($id);

        $categories = Category::select('id', 'name', 'parent_id')
            ->where('status', '>', 0)
            ->get();

        return Inertia::render('Admin/product/ProductEdit', [
            'product' => $product,
            'categories' => $categories,
            'status' => session('status'),
            'message' => session('message'),
        ]);
    }

    public function update(UpdateRequest $request, $id)
    {
        $product = Product::findOrFail($id);
        $data = [
            'name' => $request->name,
            'desc' => $request->desc,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'status' => $request->status,
        ];
        $product->update($data);
        if ($request->hasFile('newImages')) {
            $request->validate([
                'newImages' => 'required|array',
                'newImages.*' => 'mimes:jpeg,png,jpg,gif'
            ]);
            $images = $request->file('newImages');
            $data = [];
            foreach ($images as $image) {
                $filename = time() . '-' . $image->getClientOriginalName();
                $image->move(public_path('uploads/'), $filename);
                $data[] = [
                    'product_id' => $product->id,
                    'image' => asset('uploads/' . $filename),
                ];
            }
            ProductImages::insert($data);
        }
        return redirect()->route('product')->with([
            'status' => true,
            'message' => 'Cập nhật sản phẩm thành công'
        ]);
    }

    public function deleteImage($id)
    {
        $image = ProductImages::findOrFail($id);
        $file_old_url = public_path('uploads/' . basename($image->image));
        if (file_exists($file_old_url)) {
            unlink($file_old_url);
        }
        $image->delete();
        return redirect()->back()->with([
            'status' => true,
            'message' => 'Xóa hình thành công'
        ]);
    }
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->status = 0;
        $product->save();
        return redirect()->back()->with([
            'status' => true,
            'message' => 'Xóa sản phẩm thành công'
        ]);
    }

    public function productsDeleted()
    {
        $products = Product::select('id', 'name', 'category_id', 'price', 'status', 'desc', 'rate_avg')
            ->where('status', 0)
            ->orderBy('created_at', 'DESC')
            ->with('productImages')
            ->get();
        $categories = Category::select('id', 'name', 'parent_id', 'status')
            ->where('status', '>', 0)
            ->get();
        return Inertia::render('Admin/product/ProductDeleted', [
            'products' => $products,
            'categories' => $categories,
            'status' => session('status'),
            'message' => session('message'),
        ]);
    }

    public function restoreProduct($id)
    {
        $product = Product::findOrFail($id);
        $product->status = 1;
        $product->save();
        return redirect()->back()->with([
            'status' => true,
            'message' => 'Khôi phục sản phẩm thành công'
        ]);
    }
}
