<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\clinica;
use App\Models\Especialidade;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClinicaController extends Controller
{

    // public function index()
    // {

    //     try {

    //         $usuario = Auth::user();
    //         $usuario->load(['clinica.especialidade']);

    //         return Inertia::render('Area', [
    //             'especialidades' => Especialidade::all(),
    //             'clinicas' => Clinica::all()->load(['especialidade']),
    //             'id' => $usuario->id,
    //             'cpf' => $usuario->cpf,
    //             'nome' => $usuario->name,
    //             'clinica' => $usuario->clinica,
    //         ]);

    //     } catch (Throwable $e) {
    //         Log:error('Index das clinicas.', ['id' => $usuario->id]);
    //         throw $e;
    //     }
    // }

    public function create(Request $request, $id)
    {
        try {
            $input = $request->all();
            $pessoa = new Clinica;
            $pessoa->nome = $input['nome'];
            $pessoa->cnpj = $input['cnpj'];
            $pessoa->telefone = $input['telefone'];
            $pessoa->endereco = $input['endereco'];
            $pessoa->latitude = $input['latitude'];
            $pessoa->longitude = $input['longitude'];
            // dd($pessoa);
            $pessoa->save();


            return $this->respondSuccess(null, 'Clinica alterado.');
        } catch (Throwable $e) {
            Log::error('Editando Clinica.', ['Usuario_id' => $id]);
            throw $e;
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $input = $request->all();
            // dd($input);
            $pessoa = Clinica::findOrFail($id);
            $pessoa->nome = $input['nome'];
            $pessoa->cnpj = $input['cnpj'];
            $pessoa->telefone = $input['telefone'];
            $pessoa->endereco = $input['endereco'];
            $pessoa->save();

            return $this->respondSuccess(null, 'Clinica alterado.');
        } catch (Throwable $e) {
            Log::error('Editando Clinica.', ['Usuario_id' => $id]);
            throw $e;
        }
    }

    public function delete(Request $request, $id)
    {

        try {

            $usuario = Clinica::destroy($id);
            return $this->respondSuccess(null, 'Clinica excluído com sucesso.');

        } catch (Throwable $e) {
            Log::error('Editando usuario.', ['clinica_id' => $id]);
            throw $e;
        }
    }

    public function salvar_esp(Request $request, $id)
    {
        // dd($id);
        try {
            $input = $request->all();

            $usuario = Clinica::find($id)->load('especialidade');
            $usuario->id_especialidade = $input['id_especialidade'];
            $usuario->save();
            // dd($usuario);
            return $this->respondSuccess(null, 'Clinica salva com sucesso.');

        } catch (Throwable $e) {
            Log::error('Editando usuario.', ['clinica_id' => $id]);
            throw $e;
        }
    }

}
