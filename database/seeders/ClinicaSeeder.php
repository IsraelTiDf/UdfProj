<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ClinicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tb_clinica')->insert([[
            'nome' => 'Clinica boa viagem',
            'id_especialidade' => '1',
            'cnpj' => '444454',
            'endereco' => 'JJJ 19 Conjunto F casa 01',
            'telefone' => '994103232',
            'longitude' => '-47.9292',
            'latitude' => '-15.7801',
        ],
        [
            'nome' => 'Seu coracao',
            'id_especialidade' => '1',
            'cnpj' => '41717',
            'endereco' => 'RUA gama loja 03',
            'telefone' => '994103232',
            'longitude' => '-47.894650228519936',
            'latitude' => '-15.797166044576098',
        ],
        [
            'nome' => 'Boa vista',
            'id_especialidade' => '6',
            'cnpj' => '2020202020',
            'endereco' => 'shopping Conjunto Nacional loja 03',
            'telefone' => '6135032983',
            'longitude' => '-47.88318430047759',
            'latitude' => '-15.79091474725314',
        ],

        ]);
    }
}
