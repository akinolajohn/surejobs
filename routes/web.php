<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('invoices', 'InvoiceController@index');
Route::get('/invoices', 'InvoiceController@index');
Route::get('/invoices/create', 'InvoiceController@create');
Route::post('/invoices/create', 'InvoiceController@store');

//ALL ROUTES HERE ARE FOR SURE JOBS PROPER
Route::get('/login', 'SurejobsController@login');
Route::get('/index', 'SurejobsController@index');
Route::get('/profile', 'SurejobsController@profile');
Route::get('/signup', 'SurejobsController@signup');
Route::get('/confirmation', 'SurejobsController@confirmation');
Route::get('/account', 'SurejobsController@account');
Route::get('/invoice', 'SurejobsController@invoice');









