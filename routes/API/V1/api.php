<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([ 
	'prefix' => 'auth',
	'namespace' => 'V1'
], function () {
	Route::post('login', 'AuthController@login');
	Route::post('register', 'AuthController@register');
	Route::get('logout', 'AuthController@logout');
});

Route::group([ 
	'prefix' => 'auth',
	'namespace' => 'V1',
	'middleware' => ['auth:api']
], function () {
	Route::get('profile', 'ProfileController@show');
});

Route::group([ 
	'prefix' => 'tweet',
	'namespace' => 'V1',
	'middleware' => ['auth:api']
], function () {
	Route::post('store', 'TweetController@store');
});

Route::group([ 
	'prefix' => 'user',
	'namespace' => 'V1',
	'middleware' => ['auth:api']
], function () {
	Route::get('show/{username}', 'UserController@show');
});
