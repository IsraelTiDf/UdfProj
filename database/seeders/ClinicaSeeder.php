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
            'nome' => 'saporra funfa clinica',
            'id_user' => '1',
            'cnpj' => '444454',
            'telefone' => '994103232',
            'email' => Str::random(10).'@gmail.com',
            'senha' => Hash::make('password'),
            // 'emergencia' => '1',
            'longitude' => '-47.9292',
            'latitude' => '-15.7801',
        ],
        [
            'nome' => 'clinica 2',
            'id_user' => '2',
            'cnpj' => '41717',
            'telefone' => '994103232',
            'email' => Str::random(10).'@gmail.com',
            'senha' => Hash::make('password'),
            // 'emergencia' => '1',
            'longitude' => '-15.7801',
            'latitude' => '-47.9292',
        ]]);
    }
}
