<?php

namespace App\Http\Controllers;

use App\Services\MovieService;
use App\Models\Movie;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class ApiController extends BaseController
{
    public function index(): JsonResponse
    {
        return response()->json([Movie::latest()->paginate(5)]);
    }

    public function store(Request $request, MovieService $movieService): JsonResponse
    {
        $request->validate([
            'title' => 'required',
            'release_year' => 'required',
        ]);

        return response()->json($movieService->createMovie($request));
    }

    public function create(): JsonResponse
    {
        return response()->json('', 404);
    }

    public function show(Movie $movie): JsonResponse
    {
        return response()->json($movie);
    }

    public function update(Request $request, Movie $movie): JsonResponse
    {
        try {
            $request->validate([
                'title' => 'present',
                'release_year' => 'present',
            ]);
        }catch (ValidationException $exception) {
            return response()->json((string)$exception->getMessage());
        }

        $data = $request->all();
        unset($data['image']);

        $movie->update($data);

        return response()->json($movie);
    }

    public function destroy(Movie $movie): JsonResponse
    {
        $movie->delete();
        return response()->json('removed',  Response::HTTP_ACCEPTED);
    }

    public function edit(Movie $movie): JsonResponse
    {
        return response()->json($movie);
    }
}
