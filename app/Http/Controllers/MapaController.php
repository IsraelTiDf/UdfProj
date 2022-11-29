<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\clinica;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class MapaController extends Controller
{


    use ApiResponse;

    public function view()
    {
        // dd("oi");
        // return "oi";
        // return Inertia::render('Auth/MapView');

        return Inertia::render('Auth/MapView',[
            'clinca' => clinica::all()->load('especialidade')
        ]);

    }



}
