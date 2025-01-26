<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Fetch all books from the database.
     */
    public function index()
    {
        // Fetch all books
        $books = Book::all();

        // Return books as a JSON response (for API) or pass them to a view (for web)
        return response()->json($books); // For API

        // Uncomment below to pass data to a view
        // return view('books.index', compact('books'));
    }
}
