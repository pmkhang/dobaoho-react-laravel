<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::select('id', 'name', 'parent_id', 'status')
            ->orderBy('created_at', 'DESC')
            ->get();

        return Inertia::render('Admin/Category', [
            'categories' => $categories
        ]);
    }
    public function create()
    {
        $categories = Category::select('id', 'name')->get();
        return Inertia::render('Admin/CategoryCreate', [
            'categories' => $categories
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'status' => 'required',
        ], [
            'name.required' => 'Trường này là bắt buộc',
            'status.required' => 'Trường này là bắt buộc',
        ]);

        $category = new Category();
        $category->name = $request->name;
        if (!empty($request->parent_id)) {
            $category->parent_id = $request->parent_id;
        }
        $category->status = $request->status;
        $category->save();

        return redirect()->route('category');
    }
}
