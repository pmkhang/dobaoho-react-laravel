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
        $request->validate([
            'name' => 'required|unique:categories,name',
            'status' => 'required',
        ], [
            'name.required' => 'Trường này là bắt buộc',
            'name.unique' => 'Tên thể loại này đã tồn tại',
            'status.required' => 'Trường này là bắt buộc',
        ]);

        $category = new Category();
        $category->name = $request->name;
        if (!empty($request->parent_id)) {
            $category->parent_id = $request->parent_id;
        }
        $category->status = $request->status;
        $category->save();

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
        $oldParentID = $category->parent_id;
        $category->name = $request->name;
        if ($category->id == $request->parent_id) {
            return redirect()->route('editCategory', ['id' => $id])->with([
                'status' => false,
                'message' => 'Không thể chọn thể loại cấp trên bằng chính thể loại đó'
            ]);
        } elseif ($request->has('parent_id')) {
            $category->parent_id = $request->parent_id;
        } else {
            $category->parent_id = null;
        }

        $category->status = $request->status;
        $category->save();
        return redirect()->route('category')->with([
            'status' => true,
            'message' => "Đã cập nhật $category->name thành công"
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
