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
            'name' => 'Jose Campos',
            'cpf' => '00000000000',
            'endereco' => 'QJ 19 Conjunto E casa 03',
            'telefone' => '994103232',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'dt_nascimento' => '1986-06-02',
            'flg_admin' => '0',
        ],
        [
            'name' => 'Thiago Silva',
            'cpf' => '00000000000',
            'endereco' => 'QNM 03 Conjunto H apt 22',
            'telefone' => '994103232',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'dt_nascimento' => '1986-06-02',
            'flg_admin' => '0',
        ],
        [
            'name' => 'Super Admin',
            'cpf' => '00000000000',
            'endereco' => 'QNM 03 Conjunto H apt 22',
            'telefone' => '994103232',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'dt_nascimento' => '1986-06-02',
            'flg_admin' => '1',
                       
        ],
    
        ]);
    }
}
