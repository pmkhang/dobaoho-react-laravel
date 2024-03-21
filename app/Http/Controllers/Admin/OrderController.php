<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $dataQuery = [
            'limit' => $request->limit ?? 10,
            'status' => $request->status ?? "",
            'search' => $request->search ?? "",
        ];
        $query = DB::table('invoices')
            ->orderBy('status', "ASC")
            ->orderBy('created_at', "DESC");
        if ($dataQuery['search'] != "") {
            $query = $query->where('id', 'like', '%' . $dataQuery['search'] . '%');
        }
        if ($dataQuery['status'] != "") {
            $query = $query->where('status', $dataQuery['status']);
        }

        $invoices = $query->paginate($dataQuery['limit']);
        return Inertia::render('Admin/order/Order', [
            'invoices' => $invoices,
            'queries' => $dataQuery
        ]);
    }

    public function orderDetail($id)
    {
        $invoice = DB::table('invoices')
            ->where('id', $id)
            ->first();

        $invoice_detail = DB::table('invoice_detail')
            ->where('invoice_id', $id)
            ->get()
            ->pluck('cart_id')
            ->toArray();

        $carts = Cart::whereIn('id', $invoice_detail)
            ->select('id', 'product_id', 'quantity', 'status', 'price_per_1')
            ->with(['products' => function ($query) {
                $query->select('id', 'name', 'category_id')
                    // ->with('productImages')
                    ->with(['category' => function ($query) {
                        $query->select('id', 'name');
                    }]);
            }])
            ->get();

        return Inertia::render('Admin/order/OrderDetail', [
            'invoice' => $invoice,
            'carts' => $carts,
            'status' => session('status'),
            'message' => session('message'),
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        $invoice = Invoice::findOrFail($id);
        $invoice->update([
            'status' => $request->status
        ]);
        return redirect()->route('orderDetail', ['id' => $id])->with([
            'status' => true,
            'message' => "Đã cập nhật thành công"
        ]);
    }
}
