<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SurejobsController extends Controller
{
    public function index(){
    	 return view('surejobs.index');
  	} 

  	public function login(){
  		return view('surejobs.login');
  	} 

  	public function profile(){
  		return view('surejobs.profile');
  	} 

  	public function signup(){
  		return view('surejobs.signup');
  	} 

  	public function confirmation(){
  		return view('surejobs.confirmation');
  	} 

  	public function account(){
  		return view('surejobs.account');
  	} 

  	public function invoice(){
  		return view('surejobs.invoice');
  	}

}
