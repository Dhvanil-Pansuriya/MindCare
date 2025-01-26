<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Initialize Faker
        $faker = Faker::create();

        // Define possible book types
        $bookTypes = ['happy', 'sad', 'angry', 'intense', 'depressed', 'fresh', 'adventure', 'mystery', 'romantic'];
        $bookImage = ['https://placehold.co/200x250'];

        // Insert 150 dummy books
        for ($i = 0; $i < 150; $i++) {
            DB::table('books')->insert([
                'bookTitle' => $faker->sentence(3), // Random book title
                'bookAuthor' => $faker->name, // Random author
                'bookDescription' => $faker->paragraph(2), // Random description
                'bookPublisher' => $faker->company, // Random publisher
                'bookIsbn' => $faker->isbn13, // Random ISBN
                'bookImage' => $faker->randomElement($bookImage), // Random image URL
                'amazonBookUrl' => 'https://amazon.com/' . $faker->slug, // Random URL
                'bookRank' => $faker->numberBetween(1, 10), // Random rank between 1 and 10
                'bookType' => $faker->randomElement($bookTypes), // Random book type
            ]);
        }
    }
}
