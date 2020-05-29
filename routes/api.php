<?php

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix( 'users' )->group( function () {
    Route::post( '/login', 'api\v1\LoginController@login' );
    Route::get( '/all-users', 'UsersController@index' )->middleware( 'auth:api' );
    Route::get( '/current-users', 'UsersController@currentUser' )->middleware( 'auth:api' );
} );