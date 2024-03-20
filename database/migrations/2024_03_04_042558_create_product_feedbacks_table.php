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
        Schema::create('product_feedbacks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->text('content');
            $table->tinyInteger('rate');
            $table->string('product_id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->string('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->tinyInteger('status')->default(1)->comment("1: pending, 2: completed");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_feedbacks');
    }
};
