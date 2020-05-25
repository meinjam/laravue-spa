<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller {
    public function login( Request $request ) {
        $rules = [
            'email'    => 'required|string|email',
            'password' => 'required|string',
        ];

        $login = $this->validate( $request, $rules );
        // $login = $request->validate( [
        //     'email'    => 'required|string|email',
        //     'password' => 'required|string',
        // ] );

        if ( !Auth::attempt( $login ) ) {
            return response( ['message' => 'Invalid login attempt.'] );
        }

        $accessToken = Auth::user()->createToken( 'authToken' )->accessToken;
        return response( ['user' => Auth::user(), 'access_token' => $accessToken] );
    }
}
