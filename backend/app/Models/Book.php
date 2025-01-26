<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    // Define fillable attributes
    protected $fillable = [
        'bookTitle',
        'bookAuthor',
        'bookDescription',
        'bookPublisher',
        'bookIsbn',
        'bookImage',
        'amazonBookUrl',
        'bookRank',
        'bookType',
    ];
}
