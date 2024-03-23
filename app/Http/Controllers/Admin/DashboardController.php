<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $invoices = DB::table('invoices')
            ->where('status', 1)
            ->orderBy('created_at', "DESC")
            ->get();
        return Inertia::render('Admin/dashboard/Dashboard', [
            'invoices' => $invoices
        ]);
    }
}
