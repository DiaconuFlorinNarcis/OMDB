<?php

namespace App\Services;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieService
{
    public function createMovie(Request $request): Movie
    {
        $data = $request->all();
        unset($data['image']);

        $movie = Movie::create($data);
        if ($request->file('image')) {
            $imageName = $movie->id . time() . $request->file('image')->getClientOriginalName();

            $path = $request->file('image')->storeAs('images', $imageName, 'public');
            $movie->image = $path;
        }

        $movie->save();

        return $movie;
    }
}
