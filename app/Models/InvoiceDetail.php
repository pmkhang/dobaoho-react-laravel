<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceDetail extends Model
{
    use HasFactory;
    protected $table = 'invoice_detail';
    protected $guarded = [];
    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
    public function carts()
    {
        return $this->hasMany(Cart::class, 'id', 'cart_id');
    }
}
