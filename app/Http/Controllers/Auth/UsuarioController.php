<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\clinica;
use App\Models\Especialidade;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UsuarioController extends Controller
{

    public function index()
    {

        try {

            $usuario = Auth::user();
            $usuario->load(['clinica.especialidade']);

            return Inertia::render('Area', [
                'especialidades' => Especialidade::all(),
                'clinicas' => Clinica::all()->load(['especialidade']),
                'id' => $usuario->id,
                'cpf' => $usuario->cpf,
                'nome' => $usuario->name,
                'clinica' => $usuario->clinica,
            ]);

        } catch (Throwable $e) {
            Log:error('Index das clinicas.', ['id' => $usuario->id]);
            throw $e;
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $input = $request->all();
            $pessoa = User::findOrFail($id);
            $pessoa->name = $input['name'];
            $pessoa->cpf = $input['cpf'];
            $pessoa->telefone = $input['telefone'];
            $pessoa->email = $input['email'];
            $pessoa->dt_nascimento = $input['dt_nascimento'];
            $pessoa->endereco = $input['endereco'];
            $pessoa->save();

            return $this->respondSuccess(null, 'Usuario alterado.');
        } catch (Throwable $e) {
            Log::error('Editando usuario.', ['Usuario_id' => $id]);
            throw $e;
        }
    }

    public function delete(Request $request, $id)
    {

        try {

            $usuario = User::destroy($id);
            return $this->respondSuccess(null, 'Usuario excluído com sucesso.');

        } catch (Throwable $e) {
            Log::error('Editando usuario.', ['Usuario_id' => $id]);
            throw $e;
        }
    }

}
