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
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('videoTitle'); // Title of the video
            $table->string('videoAuthor'); // Author or creator of the video
            $table->text('videoDescription'); // Description of the video
            $table->string('videoUrl'); // URL where the video can be accessed
            $table->string('videoThumbnail'); // Thumbnail image URL for the video
            $table->integer('videoRank'); // Rank or priority
            $table->string('videoCategory'); // Category or type of the video
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
