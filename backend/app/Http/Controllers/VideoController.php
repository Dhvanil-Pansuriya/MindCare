<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    /**
     * Fetch all videos.
     */
    public function index()
    {
        $videos = Video::all();
        return response()->json($videos);
    }
}
