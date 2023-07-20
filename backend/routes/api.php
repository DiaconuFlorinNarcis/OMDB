<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

Route::resource('movies', ApiController::class);
