<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'title', 'release_year', 'image', 'imdb_id'];
    protected $casts = ['release_year' => 'date:' . \DateTimeInterface::ISO8601];
}
