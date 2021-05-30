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
            'username' => $this->username,
            'tweets' => $this->tweets,
            'followers' => $this->follwers,
            'joined_at' => $this->created_at
        ];

        if (auth()->user()) {
            $return['following'] = auth()->user()->followingUser($this->id);
        }

        return $return;
    }
}
