<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('bookTitle');
            $table->string('bookAuthor');
            $table->text('bookDescription');
            $table->string('bookPublisher');
            $table->string('bookIsbn')->unique();
            $table->string('bookImage'); 
            $table->string('amazonBookUrl');
            $table->integer('bookRank');
            $table->string('bookType'); // Column for mood or type of book
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
