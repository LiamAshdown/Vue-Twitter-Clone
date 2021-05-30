<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\FollowUser;
use App\Models\User;
use App\Rules\FollowingUser;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  string $username
     * @return \Illuminate\Http\Response
     */
    public function show($username)
    {
        $user = User::where('username', $username)->firstOrFail();

        return new UserResource($user);
    }

    /**
     * Follow User
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function follow(Request $request)
    {
        $attributes = $this->validate($request, [
            'id' => ['required', 'exists:users', new FollowingUser('not')]
        ]);

        // TODO; Move this into user model?
        $followUser = new FollowUser();
        $followUser->following_user_id = $attributes['id'];
        $followUser->user_id = auth()->id();
        $followUser->save();

        return response()->noContent();
    }

    /**
     * Unfollow User
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function unfollow(Request $request)
    {
        $attributes = $this->validate($request, [
            'id' => ['required', 'exists:users', new FollowingUser('is')]
        ]);

        // TODO; Move this into user model?
        $followUser = FollowUser::where('user_id', auth()->id())->where('following_user_id', $attributes['id'])->first();
        $followUser->delete();

        return response()->noContent();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
