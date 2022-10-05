<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([[
            'name' => 'saporra funfa users',
            'cpf' => '00000000000',
            'telefone' => '994103232',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'dt_nascimento' => '1986-06-02',
            'sexo' => 'MAS',
        ],
        [
            'name' => 'Thiago 2',
            'cpf' => '00000000000',
            'telefone' => '994103232',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'dt_nascimento' => '1986-06-02',
            'sexo' => 'MAS',
        ]]);
    }
}
