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

    /**
     * Get User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get Tweet Replies
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function likes() 
    {
        return $this->hasMany(LikedTweets::class);
    }

    /**
     * Auth User Liked
     *
     * @return mixed
     */
    public function liked()
    {
        return $this->hasMany(LikedTweets::class)->where('user_id', auth()->id())->exists();
    }
}
