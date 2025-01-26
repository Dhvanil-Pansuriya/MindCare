<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class VideoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Initialize Faker
        $faker = Faker::create();

        // Define possible video categories and thumbnails
        $videoCategories = ['happy', 'sad', 'angry', 'intense', 'depressed', 'fresh', 'adventure', 'mystery', 'romantic'];
        $videoThumbnails = ['https://placehold.co/200x250'];

        // Insert 150 dummy videos
        for ($i = 0; $i < 150; $i++) {
            DB::table('videos')->insert([
                'videoTitle' => $faker->sentence(3), // Random video title
                'videoAuthor' => $faker->name, // Random video author
                'videoDescription' => $faker->paragraph(2), // Random video description
                'videoUrl' => 'https://example.com/videos/' . $faker->slug, // Random video URL
                'videoThumbnail' => $faker->randomElement($videoThumbnails), // Random thumbnail URL
                'videoRank' => $faker->numberBetween(1, 10), // Random rank between 1 and 10
                'videoCategory' => $faker->randomElement($videoCategories), // Random video category
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
