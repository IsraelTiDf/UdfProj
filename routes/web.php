<?php

use App\Http\Controllers\Auth\RegisterClinicaController;
use App\Http\Controllers\Auth\UsuarioController;
use App\Http\Controllers\Auth\ClinicaController;
use App\Http\Controllers\MapaController;
use App\Models\Especialidade;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'dados' => Especialidade::all(),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'canRegister' => Route::has('register-clinica'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
            'usuario' => User::all(),
        ]);
    })->name('dashboard');

    Route::get('/clinicas', [RegisterClinicaController::class, 'view_clinica'])->name('clinicas');
    Route::get('/mapa', [MapaController::class, 'view'])->name('mapa');

    Route::get('/usuarios', [UsuarioController::class, 'index'])->name('usuarios');
    Route::put('/editar-usuario/{id}', [UsuarioController::class, 'update'])->name('editar-usuario');
    Route::delete('/deletar-usuario/{id}', [UsuarioController::class, 'delete'])->name('deletar-usuario');

    // Route::get('/', [UsuarioController::class, 'index'])->name('usuarios');
    Route::put('/adicionar-clinica/{id}', [ClinicaController::class, 'create'])->name('adicionar-clinica');
    Route::put('/editar-clinica/{id}', [ClinicaController::class, 'update'])->name('editar-clinica');
    Route::delete('/deletar-clinica/{id}', [ClinicaController::class, 'delete'])->name('deletar-clinica');
    Route::put('/salvar-especialidade/{id}', [ClinicaController::class, 'salvar_esp'])->name('salvar-especialidade');


// Route::apiResource('interessados', InteressadosController::class)
    // ->only(['update']);

});
require __DIR__ . '/auth.php';
