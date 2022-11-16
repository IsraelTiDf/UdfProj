<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\clinica;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisterClinicaController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */

    use ApiResponse;

    public function create_clin()
    {
        // return "oi";
        return Inertia::render('Auth/RegisterClinica');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */

    public function store_clin(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'cnpj' => 'required',
            // // 'dt_nascimento' => 'required',
            'telefone' => 'required',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = clinica::create([
            'nome' => $request->nome,
            'email' => $request->email,
            'cnpj' => $request->cnpj,
            'telefone' => $request->telefone,
            // 'dt_nascimento' => $request->dt_nascimento,
            'senha' => Hash::make($request->password),
        ]);
        // dd($request->all());

        // event(new Registered($user));

        // Auth::login($user);

        // return redirect(RouteServiceProvider::HOME);
        // dd($user);
        return $this->respondSuccess($user);
    }

    use ApiResponse;

    public function index()
    {

        try {
            $usuario
            = clinica::select(
                'nome',
                'cpf',
                'name',
                'cnpj',
                'users.telefone',
                // 'id_user',
                'users.email',
                // 'senha',
                'longitude',
                'latitude'
            )
            // ->join(
            ->join('users', 'users.id', '=', 'tb_clinica.id_user')
                // ->with([
                //     'usuario' => function ($query) {
                //         $query->select(
                //             'name',
                //             'cpf',
                //             'telefone',
                //             'email',
                //             'dt_nascimento',
                //             'sexo'
                //         );
                //     },
                //     // 'usuario',
                // ])
                ->first();

                // return $this->respondWithResource(PedidoResource::collection($processo->pedidos));
                // dd($usuario);
                return Inertia::render('EditUsu', [
                    'id' => $usuario->cnpj,
                    'nome' => $usuario->nome,
                ]);
                // return [
                //     'id' => $usuario->cnpj,
                //     'nome' => $usuario->nome,

                // ];

        } catch (Throwable $e) {
            Log:error('Index Pedidos do Processo.', ['processo_id' => $processo->idDocumento]);
            throw $e;
        }
    }

}
