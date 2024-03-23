<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('address');
            $table->bigInteger('total_price');
            $table->tinyInteger('status')->default(1)->comment("1: pending, 2: completed, 3: canceled");
            $table->string('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->tinyInteger('request_invoice')->comment("1: yes, 2: no");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
