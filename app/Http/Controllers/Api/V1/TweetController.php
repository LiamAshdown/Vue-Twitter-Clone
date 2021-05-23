<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Tweet;
use Illuminate\Http\Request;

/**
 * Responsible for tweeting
 */
class TweetController extends Controller
{
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

        return response()->noContent();
    }
}
