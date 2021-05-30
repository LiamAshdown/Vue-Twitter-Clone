<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\TweetResource;
use App\Http\Resources\TweetResourceCollection;
use App\Models\FollowUser;
use App\Models\Tweet;
use App\Models\User;
use Illuminate\Http\Request;

/**
 * Responsible for tweeting
 */
class TweetController extends Controller
{   
    /**
     * Index
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // TODO; This needs to be in laravel relationship
        $followerIds = FollowUser::with('tweets')->where('user_id', auth()->id())->pluck('following_user_id');
        $tweets = Tweet::whereIn('user_id', $followerIds)->orWhere('user_id', auth()->id())->latest()->get();

        return new TweetResourceCollection($tweets);
    }

    /**
     * Store Tweet
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $attributes = $this->validate($request, [
            'tweet' => 'required|string|max:255',
            // TODO; type
        ]);

        $tweet = new Tweet();
        $tweet->tweet = $attributes['tweet'];
        $tweet->user_id = auth()->id();
        $tweet->type = Tweet::TWEET_TYPE_PUBLIC;
        $tweet->save();

        return new TweetResource($tweet);
    }

    /**
     * Get User Tweets
     *
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function tweets(Request $request, $id)
    {
        return new TweetResourceCollection(User::findOrFail($id)->tweets);
    }
}
