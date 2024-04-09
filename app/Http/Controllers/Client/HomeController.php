<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartProducts;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function index()
    {
        $sql = "SELECT p.id, p.name, p.price, p.rate_avg, pi.image,
                        c.name AS category_name, c.id AS category_id
                FROM categories c, products p, product_images pi
                WHERE p.status = 1 AND c.id = p.category_id AND p.id = pi.product_id
                -- lấy 5 sản phẩm trong 1 danh mục
                AND (SELECT COUNT(*)
                    FROM products p2
                    WHERE p2.category_id = c.id
                    AND p2.id <= p.id) <= 5 -- <- đổi limit tại đây
                -- lấy hình ảnh đầu tiên
                AND pi.id = (
                    SELECT pi2.id
                    FROM product_images pi2
                    WHERE pi2.product_id = p.id
                    ORDER BY pi2.created_at ASC
                    LIMIT 1
                    )
                ORDER BY c.order ASC";
        $products = DB::select($sql);
        $data = $this->groupProductsByCategory($products);
        return Inertia::render('Client/Home', [
            'products' => $data,
        ]);
    }

    private function groupProductsByCategory($data)
    {
        $result = [];
        foreach ($data as $item) {
            if (!isset($result[$item->category_id])) {
                $result[$item->category_id] = [
                    'id' => $item->category_id,
                    'name' => $item->category_name,
                    'products' => []
                ];
            }
            $result[$item->category_id]['products'][] = [
                'id' => $item->id,
                'name' => $item->name,
                'price' => $item->price,
                'rate_avg' => $item->rate_avg,
                'image' => $item->image
            ];
        }
        return array_values($result);
    }

    public function introducePage()
    {
        return Inertia::render('Client/Introduce');
    }

    public function getCategories()
    {


        $categories = DB::select("SELECT c.id, c.name, c.parent_id FROM categories c WHERE c.status = 1 ORDER BY c.order ASC");

        return response()->json([
            'status' => true,
            'categories' => $categories
        ]);
    }
}
