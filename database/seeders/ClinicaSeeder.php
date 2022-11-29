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
            'id_user' => '1',
            'id_especialidade' => '1',
            'cnpj' => '444454',
            'endereco' => 'JJJ 19 Conjunto F casa 01',
            'telefone' => '994103232',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            // 'emergencia' => '1',
            'longitude' => '-47.9292',
            'latitude' => '-15.7801',
        ],
        [
            'nome' => 'Seu coracao',
            'id_user' => '2',
            'id_especialidade' => '1',
            'cnpj' => '41717',
            'endereco' => 'RUA gama loja 03',
            'telefone' => '994103232',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            // 'emergencia' => '1',
            'longitude' => '-15.7801',
            'latitude' => '-47.9292',
        ],

        [
            'nome' => 'Boa vista',
            'id_user' => '1',
            'id_especialidade' => '6',
            'cnpj' => '2020202020',
            'endereco' => 'shopping Conjunto Nacional loja 03',
            'telefone' => '6135032983',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            // 'emergencia' => '1',
            'longitude' => '-15.7801',
            'latitude' => '-47.9292',
        ],

        ]);
    }
}
