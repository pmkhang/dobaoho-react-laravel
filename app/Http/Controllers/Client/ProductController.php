<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartProducts;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductFeedbacks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function productDetailPage($id)
    {
        $pSQL = "SELECT p.id, p.name, p.price, p.desc, p.sub_desc, p.rate_avg, p.category_id
                FROM products p WHERE p.status = ? AND p.id = ? LIMIT 1";
        $p_imgSQL = "SELECT pi.id, pi.image FROM product_images pi WHERE pi.product_id = ?";
        $p_feedbackSQL = "SELECT * FROM product_feedbacks WHERE product_id = ?";
        $p_classifysSQL = "SELECT * FROM product_classifys WHERE product_id = ?";
        $p = DB::select($pSQL, [1, $id]);
        if (count($p) == 0) {
            return redirect()->route('home');
        }
        $p_img = DB::select($p_imgSQL, [$id]);
        $p_feedbacks = DB::select($p_feedbackSQL, [$id]);
        $p_classifys = DB::select($p_classifysSQL, [$id]);

        $product = [
            'id' => $p[0]->id,
            'name' => $p[0]->name,
            'price' => $p[0]->price,
            'desc' => $p[0]->desc,
            'sub_desc' => $p[0]->sub_desc,
            'rate_avg' => $p[0]->rate_avg,
            'category_id' => $p[0]->category_id,
            'product_images' => $p_img,
            'product_feedbacks' => $p_feedbacks,
            'product_classifys' => $p_classifys
        ];

        $sql = "SELECT p.id, p.name, p.price, p.rate_avg, pi.image,
                        c.name AS category_name, c.id AS category_id
                FROM products p
                JOIN product_images pi ON p.id = pi.product_id
                JOIN categories c ON p.category_id = c.id
                WHERE p.status = 1 AND c.id = ? AND p.id != ?
                AND pi.id = (SELECT MIN(pi2.id)
                                FROM product_images pi2
                                WHERE pi2.product_id = p.id)";
        $productsByCategory = DB::select($sql, [$product['category_id'], $id]);
        $productsGroupByCategory = $this->groupProductsByCategory($productsByCategory);
        return Inertia::render('Client/ProductDetail', [
            'product' => $product,
            'productsGroupByCategory' => $productsGroupByCategory
        ]);
    }

    private function groupProductsByCategory($products)
    {
        $productsByCategory = [];
        foreach ($products as $product) {
            $category_id = $product->category_id;
            $category_name = $product->category_name;

            if (!isset($productsByCategory[$category_id])) {
                $productsByCategory[$category_id] = [
                    'id' => $category_id,
                    'name' => $category_name,
                    'products' => []
                ];
            }
            $productsByCategory[$category_id]['products'][] = [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'rate_avg' => $product->rate_avg,
                'image' => $product->image
            ];
        }
        $productsByCategory = array_values($productsByCategory);
        return $productsByCategory;
    }

    public function sendFeedback(Request $request)
    {
        $request->validate([
            'product_id' => 'required|string',
            'rate' => 'required|numeric',
            'content' => 'required|string',
            'title' => 'required|string',
            'name' => 'required|string'
        ]);
        $data = [
            'product_id' => $request->product_id,
            'user_id' => $request->user_id,
            'rate' => $request->rate,
            'content' => $request->content,
            'title' => $request->title,
            'name' => $request->name,
            'status' => 1
        ];
        ProductFeedbacks::create($data);
        return redirect()->route('product-detail', ['id' => $request->product_id]);
    }

    public function productListByCategory($category_id)
    {
        $category = Category::select('id', 'name')->find($category_id);
        $sql = "SELECT p.id, p.name, p.price, p.rate_avg, pi.image
            FROM products p
            JOIN product_images pi ON p.id = pi.product_id
            JOIN categories c ON p.category_id = c.id
            WHERE p.status = 1 AND c.id = ?
            AND pi.id = (SELECT MIN(pi2.id) FROM product_images pi2 WHERE pi2.product_id = p.id)";
        $products = DB::select($sql, [$category_id]);

        return Inertia::render('Client/ProductList', [
            'products' => $products,
            'category' => $category,
        ]);
    }

    public function searchProducts(Request $request)
    {
        $request->validate([
            'search' => 'required|string'
        ]);
        $products = [];
        if ($request->search != '') {
            $products = Product::where('status', 1)
                ->where('name', 'like', '%' . $request->search . '%')
                ->orWhere('id', 'like', '%' . $request->search . '%')
                ->select('id', 'name', 'rate_avg')
                ->with(['productImages' => function ($query) {
                    $query->take(1);
                }])
                ->get();
        }

        // return response()->json([
        //     'status' => true,
        //     'products' => $products
        // ]);
    }

    public function searchProductPage(Request $request)
    {
        $request->validate([
            'search' => 'required|string'
        ]);

        $SQL = "SELECT p.id, p.name, p.price, p.rate_avg, pi.image
        FROM products p
        JOIN product_images pi ON p.id = pi.product_id
        WHERE p.status = 1 AND (CONVERT(p.name USING utf8) LIKE ? OR CONVERT(p.id USING utf8) LIKE ?)
        AND pi.id = (
            SELECT pi2.id
            FROM product_images pi2
            WHERE pi2.product_id = p.id
            ORDER BY pi2.created_at ASC
            LIMIT 1
        )
        ORDER BY p.name ASC";

        $searchTerm = '%' . $request->search . '%';
        $products = DB::select($SQL, [$searchTerm, $searchTerm]);
        return Inertia::render('Client/SearchProducts', [
            'products' => $products,
            'keyword' => $request->search
        ]);
    }
}
