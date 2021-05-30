<?php

namespace App\Rules;

use App\Models\FollowUser;
use Illuminate\Contracts\Validation\Rule;

class FollowingUser implements Rule
{
    /**
     * Is/Not following user
     *
     * @var string
     */
    private $type;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($type = 'not')
    {
        $this->type = $type;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $result = auth()->user()->followingUser($value);
        return $this->type === 'is' ? !!$result : !$result;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return $this->type === 'is' ? 'Must be following user' : 'Already following user';
    }
}
