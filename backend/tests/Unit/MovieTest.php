<?php

namespace Tests\Unit;

use App\Models\Movie;
use Tests\TestCase;

class MovieTest extends TestCase
{
    const NAME = 'Superman-x599';

    public function testGetMovieList(): void
    {
        $response = $this->get('/api/movies');
        $this->assertEquals($response->getStatusCode(), 200);
    }

    public function testAtLeastOneMovieCreated(): void
    {
        $this->assertGreaterThan(1, Movie::all()->count());
    }

    public function testMoviesCanCreate(): void
    {
        $this->post('/api/movies', [
            "title" => self::NAME,
            "release_year" => '2023-07-21',
            "imdb_id" => 'tt0372784'
        ]);

        $this->assertDatabaseHas('movies', ['title' => self::NAME]);
    }

    public function testMoviesCanDelete(): void
    {
        $movie = Movie::where('title', self::NAME)->first();
        $movie->delete();

        $this->assertDatabaseMissing('movies', ['title' => self::NAME]);
    }
}
