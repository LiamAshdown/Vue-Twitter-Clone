<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FollowUser extends Model
{
    use HasFactory;

    public function tweets()
    {
        return $this->hasMany(Tweet::class, 'user_id', 'following_user_id');
    }
}
