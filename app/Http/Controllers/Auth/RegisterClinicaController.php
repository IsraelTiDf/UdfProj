<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\clinica;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

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

    // public function __invoke(Request $request)
    // {
    //     dd($request);
    //     return "Welcome to our homepage";
    // }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|max:200',
            'email' => 'nullable|email',
            'dt_nascimento' => 'nullable',
            'telefone' => 'nullable|',
            'cpf' => 'nullable|',
        ], [
            'email.email' => 'E-mail inválido.',
            // 'email2.email' => 'E-mail secundário inválido',
            'cpf.cpf' => 'CPF inválido',
            'telefone.telefone' => 'Telefone fixo inválido',
        ]);

        $input = $validator->validate();


        try {
            if ($request->input('cpf')) {
                $pessoa = User::findOrFail($id);
                $pessoa->name = $input['nome'];
                $pessoa->email = $input['email'];
                $pessoa->dt_nascimento = $input['dt_nascimento'];
                $pessoa->telefone = $input['telefone'];
                $pessoa->cpf = $input['cpf'];
                // dd($input);
                $pessoa->save();

            } else {
                $clinica = Clinica::findOrFail($id);
                dd($clinica);
                $clinica->nome = $request->input('nome');
                $clinica->cnpj = $request->input('cnpj');
                $clinica->sigla = $request->input('sigla');

                $clinica->save();
            }

            return $this->respondSuccess(null, 'Usuario alterado.');
        } catch (Throwable $e) {
            Log::error('Editando usuario.', ['Usuario_id' => $id]);
            throw $e;
        }
    }

}
