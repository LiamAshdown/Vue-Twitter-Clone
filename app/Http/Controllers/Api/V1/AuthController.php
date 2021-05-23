<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\User;
use App\Service\Base\ProxyServiceInterface;
use Illuminate\Http\Request;

/**
 * @group Authentication
 */
class AuthController extends Controller
{
	/**
	* Login
	*
	* @param \Illuminate\Http\Request $request
	* @param \App\Service\Base\ProxyServiceInterface $proxyService
	* @return \App\Service\Base\ProxyServiceInterface::proxy
	*/
	public function login(Request $request, ProxyServiceInterface $proxyService)
	{
        $attributes = $this->validate($request, [
            'email' 	=> 'required|email',
            'password' 	=> 'required'
        ]);
        
        return $proxyService->proxy('password', [
			'username' => $attributes['email'],
			'password' => $attributes['password']
		]);
	}

	/**
	* Logout
	*
	* @return \Illuminate\Http\Response
	*/
	public function logout()
	{
		if (auth()->user()) {
			auth()->user()->token()->revoke();
		}

		return response()->noContent();
	}

	/**
	* Register
	*
	* @param \Illuminate\Http\Request $request
	* @param \App\Service\Base\ProxyServiceInterface $proxyService
	* @return \App\Service\Base\ProxyServiceInterface::proxy
	*/
	public function register(Request $request, ProxyServiceInterface $proxyService) 
	{
		$attributes = $this->validate($request, [
			'name'     => 'required|string',
			'username' => 'required|string|unique:users',
			'email'    => 'required|email|unique:users',
			'password' => 'required',
        ]);

		$user = new User();
		$user->name  	= $attributes['name'];
		$user->username = $attributes['username'];
		$user->email	= $attributes['email'];
		$user->password	= $attributes['password'];
		$user->save();

		return $proxyService->proxy('password', [
			'username' => $attributes['email'],
			'password' => $attributes['password']
		]);
	}
}
