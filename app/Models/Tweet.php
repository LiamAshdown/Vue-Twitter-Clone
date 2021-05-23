<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    use HasFactory;

    /**
     * Type of Tweets
     */
    const TWEET_TYPE_PUBLIC = 'public';
    const TWEET_TYPE_FOLLOW = 'follow';
    const TWEET_TYPE_MENTIONED = 'mentioned';
}
