<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LikedTweets extends Model
{
    use HasFactory;

    /**
     * Fillable Attributes
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'tweet_id',
    ];
}
