<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\StoreRequest;
use App\Http\Requests\Category\UpdateRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{

    private function convertSlug(string $string): string
    {
        $str = strtolower($string);
        $str = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", 'a', $str);
        $str = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", 'e', $str);
        $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $str);
        $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", 'o', $str);
        $str = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", 'u', $str);
        $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $str);
        $str = preg_replace("/(đ)/", 'd', $str);
        $str = preg_replace("/( )/", '-', $str);
        return $str;
    }

    public function index()
    {
        $categories = Category::select('id', 'name', 'parent_id', 'status')
            ->where('status', '>', 0)
            ->orderBy('created_at', 'DESC')
            ->get();

        return Inertia::render('Admin/category/Category', [
            'categories' => $categories,
            'status' => session('status'),
            'message' => session('message')
        ]);
    }


    public function create()
    {
        $categories = Category::select('id', 'name', 'parent_id')
            ->where('status', '>', 0)
            ->get();
        return Inertia::render('Admin/category/CategoryCreate', [
            'categories' => $categories
        ]);
    }
    public function store(StoreRequest $request)
    {
        $data = [
            'id' => $this->convertSlug($request->name),
            'name' => $request->name,
            'status' => $request->status,
            'parent_id' => 0,
        ];

        if (!empty($request->parent_id)) {
            $data['parent_id'] = $request->parent_id;
        }
        $category = Category::create($data);

        return redirect()->route('category')->with([
            'status' => true,
            'message' => "Đã thêm $category->name thành công"
        ]);
    }

    public function edit($id)
    {
        $category = Category::select('id', 'name', 'parent_id', 'status')
            ->where('status', '>', 0)
            ->findOrFail($id);
        $categories = Category::select('id', 'name', 'parent_id')->get();
        return Inertia::render('Admin/category/CategoryEdit', [
            'category' => $category,
            'categories' => $categories,
            'status' => session('status'),
            'message' => session('message')
        ]);
    }

    public function update(UpdateRequest $request, $id)
    {
        $category = Category::findOrFail($id);
        if ($category->id == $request->parent_id) {
            return redirect()->route('editCategory', ['id' => $id])->with([
                'status' => false,
                'message' => 'Không thể chọn thể loại cấp trên bằng chính thể loại đó'
            ]);
        }
        $data = [
            'id' => $this->convertSlug($request->name),
            'name' => $request->name,
            'status' => $request->status,
            'parent_id' => $request->parent_id ?? 0
        ];
        $category->update($data);
        $newCategoryId = $data['id'];
        $products = Product::where('category_id', $id)->get();
        foreach ($products as $product) {
            $product->update([
                'category_id' => $newCategoryId
            ]);
        }
        return redirect()->route('category')->with([
            'status' => true,
            'message' => "Đã cập nhật thành công"
        ]);
    }

    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $hasChildCategory = Category::where('parent_id', $id)->count();
        if ($hasChildCategory > 0) {
            return redirect()->route('category')->with([
                'status' => false,
                'message' => 'Không thể xoá thể loại này vì có thể loại con đang được sử dụng'
            ]);
        }
        $check_product = Product::where('category_id', $id)->count();
        if ($check_product > 0) {
            return redirect()->route('category')->with([
                'status' => false,
                'message' => 'Không thể xoá thể loại này vì có sản phẩm đang đang được sử dụng'
            ]);
        }
        $category->delete();
        return redirect()->route('category')->with([
            'status' => true,
            'message' => "Đã xoá $category->name thành công"
        ]);
    }
}
