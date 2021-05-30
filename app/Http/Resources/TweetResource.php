<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TweetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // TODO; Pass paramter to include user or not
        return [
            'id' => $this->id,
            'tweet' => $this->tweet,
            'type' => $this->type,
            'user' => new UserResource($this->user), //< This is heavy on performance, ideally have user on top level then tweets
            'created_at_readable' => $this->created_at->diffForHumans()
        ];
    }
}
