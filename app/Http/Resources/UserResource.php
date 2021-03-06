<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $return = [
            'id' => $this->id,
            'name' => $this->name,
            'username' => $this->username,
            'total_tweets' => $this->tweets->count(),
            'followers' => $this->follwers,
            'joined_at' => $this->created_at->format('d F Y')
        ];

        if (auth()->user()) {
            $return['following'] = auth()->user()->followingUser($this->id);
        }

        return $return;
    }
}
