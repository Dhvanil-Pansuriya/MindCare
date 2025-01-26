<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    // Define fillable properties
    protected $fillable = [
        'videoTitle',
        'videoAuthor',
        'videoDescription',
        'videoUrl',
        'videoThumbnail',
        'videoRank',
        'videoCategory',
    ];
}
