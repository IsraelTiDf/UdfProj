<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Models\Especialidade;
use Inertia\Inertia;
use App\Models\User;
use App\Http\Controllers\Auth\RegisterClinicaController;

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
        // 'canRegister' => Route::has('register'),
        'canRegister' => Route::has('register-clinica'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard',[
        'usuario' => User::all()
    ]);
})->name('dashboard');

Route::get('/usuario', [RegisterClinicaController::class, 'index'])->name('usuario');

Route::post('/editar-usuario/{id}', [RegisterClinicaController::class,'update'])->name('editar-usuario');
Route::post('/delete-clinica/{id}', [RegisterClinicaController::class,'delete'])->name('editar-clinica');
// ->only(['store'  , 'update']);

// Route::apiResource('interessados', InteressadosController::class)
// ->only(['update']);

});
require __DIR__.'/auth.php';
