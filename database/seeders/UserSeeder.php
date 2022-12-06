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
            'cpf' => '877.516.553-80',
            'endereco' => 'QJ 19 Conjunto E casa 03',
            'telefone' => '(61)98483-1372',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'dt_nascimento' => '1986-06-02',
            'flg_admin' => '0',
        ],
        [
            'name' => 'Thiago Silva',
            'cpf' => '155.511.481-49',
            'endereco' => 'QNM 03 Conjunto H apt 22',
            'telefone' => '(61)94108-3232',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'dt_nascimento' => '1986-06-02',
            'flg_admin' => '0',
        ],
        [
            'name' => 'Admin Cicero',
            'cpf' => '762.735.179-08',
            'endereco' => 'QNM 03 Conjunto H apt 22',
            'telefone' => '(61)94103-4232',
            'email' => 'admcicero@gmail.com',
            'password' => Hash::make('admin123'),
            'dt_nascimento' => '1993-12-09',
            'flg_admin' => '1',

        ],
        [
            'name' => 'Julio Cesar',
            'cpf' => '828.825.682-15',
            'endereco' => 'QD 07 Conjunto 4 casa 42',
            'telefone' => '(61)94575-5725',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'dt_nascimento' => '1990-02-08',
            'flg_admin' => '0',

        ],
        [
            'name' => 'Fernando Ricardo',
            'cpf' => '834.965.058-34',
            'endereco' => 'QD 10 Conjunto F Casa 03',
            'telefone' => '(61)94859-5786',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'dt_nascimento' => '2000-07-10',
            'flg_admin' => '0',

        ],
        [
            'name' => 'Admin Israel',
            'cpf' => '834.965.058-34',
            'endereco' => 'QNM 07 Conjunto F apt 25',
            'telefone' => '(61)94894-7845',
            'email' => 'admisrael@gmail.com',
            'password' => Hash::make('admin123'),
            'dt_nascimento' => '1998-05-01',
            'flg_admin' => '1',

        ],
        [
            'name' => 'Edmar Gabriel',
            'cpf' => '834.965.058-34',
            'endereco' => 'QNM 12 Conjunto J apt 48',
            'telefone' => '(61)96841-6544',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'dt_nascimento' => '1973-10-04',
            'flg_admin' => '0',

        ],

        ]);
    }
}
