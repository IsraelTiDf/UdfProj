<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\clinica;
use App\Models\User;
use App\Models\Especialidade;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;
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
            'name' => 'required|string|max:255',
            'cnpj' => 'required',
            'endereco' => 'required',
            'telefone' => 'required',
        ]);
        $user = clinica::create([
            'nome' => $request->name,
            'email' => $request->email,
            'endereco' => $request->endereco,
            'cnpj' => $request->cnpj,
            'telefone' => $request->telefone,
        ]);

        return $this->respondSuccess($user);
    }

    public function index()
    {

        try {

            $usuario = Auth::user();
            $usuario->load([ 'clinica.especialidade']);
            // $clinica = clinica::where('id_user',$usuario->clinica->id_user)->get();

                // dd($clinica);
                // dd($usuario);
                return Inertia::render('Area', [
                    'especialidades' => Especialidade::all(),
                    'clinicas' => Clinica::all()->load(['especialidade']),
                    'id' => $usuario->id,
                    'cpf' => $usuario->cpf,
                    'nome' => $usuario->name,
                    'clinica' => $usuario->clinica,
                ]);
                // return [
                //     'id' => $usuario->cnpj,
                //     'nome' => $usuario->nome,

                // ];

        } catch (Throwable $e) {
            Log:error('Index das clinicas.', ['id' => $usuario->id]);
            throw $e;
        }
    }

    public function view_clinica()
    {

        try {

            $usuario = Auth::user();
            $usuario->load([ 'usuario']);
            // dd($usuario);s

                return Inertia::render('Area', [
                    'id' => $usuario->id,
                    'cpf' => $usuario->cpf,
                    'name' => $usuario->nome,
                    'usuario' => $usuario->usuario,
                ]);
                // return [
                //     'id' => $usuario->cnpj,
                //     'nome' => $usuario->nome,

                // ];

        } catch (Throwable $e) {
            Log:error('Index das clinicas.', ['id' => $usuario->id]);
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
        try {
            $input = $request->all();
            $pessoa = User::findOrFail($id);
            $pessoa->name = $input['name'];
            $pessoa->save();
            // dd($pessoa);


        // $validator = Validator::make($request->all(), [
        //     'nome' => 'required|max:200',
        //     'email' => 'nullable|email',
        //     'dt_nascimento' => 'nullable',
        //     'telefone' => 'nullable|',
        //     'cpf' => 'nullable|',
        // ], [
        //     'email.email' => 'E-mail inválido.',
        //     // 'email2.email' => 'E-mail secundário inválido',
        //     'cpf.cpf' => 'CPF inválido',
        //     'telefone.telefone' => 'Telefone fixo inválido',
        // ]);

        // $input = $validator->validate();


        // try {
        //     if ($request->input('cpf')) {
        //         $pessoa = User::findOrFail($id);
        //         $pessoa->name = $input['nome'];
        //         $pessoa->email = $input['email'];
        //         $pessoa->dt_nascimento = $input['dt_nascimento'];
        //         $pessoa->telefone = $input['telefone'];
        //         $pessoa->cpf = $input['cpf'];
        //         // dd($input);
        //         $pessoa->save();

        //     } else {
        //         dd($clinica);
        //         $clinica = Clinica::findOrFail($id);
        //         $clinica->nome = $request->input('nome');
        //         $clinica->cnpj = $request->input('cnpj');
        //         $clinica->sigla = $request->input('sigla');

        //         $clinica->save();
        //     }

            return $this->respondSuccess(null, 'Usuario alterado.');
        } catch (Throwable $e) {
            Log::error('Editando usuario.', ['Usuario_id' => $id]);
            throw $e;
        }
    }

    public function delete(Request $request, $id)
    {



        try {
            // dd('oi');
            $usuario = User::destroy($id);

            // $usuario->delete();
            // dd($usuario);

            return $this->respondSuccess(null, 'Usuario excluído com sucesso.');


            // return redirect(RouteServiceProvider::HOME)
            // // ->route('user.index')
            //             ->with('success','Clinica deletada');

            // return $this->respondSuccess(null, 'Usuario alterado.');
        } catch (Throwable $e) {
            Log::error('Editando usuario.', ['Usuario_id' => $id]);
            throw $e;
        }
    }

}
