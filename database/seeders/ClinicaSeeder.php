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
            'nome' => 'Hospital Santa Luzia',
            'id_especialidade' => '1',
            'cnpj' => '00.106.435/0001-15',
            'endereco' => 'Conjunto E Lote 05 - Asa Sul, Brasília',
            'telefone' => '(61)3445-6000',
            'longitude' => '-47.93034371533921',
            'latitude' => '-15.82623810520521',
        ],
        [
            'nome' => 'Hospital Santa Helena',
            'id_especialidade' => '2',
            'cnpj' => '06.033.403/0001-13',
            'endereco' => 'Shln - Asa Norte, Brasília - DF',
            'telefone' => '(61)3261-3000',
            'longitude' => '-47.896962316212154',
            'latitude' => '-15.735819041338464',
        ], 
        [
            'nome' => 'Hospital Daher',
            'id_especialidade' => '6',
            'cnpj' => '00.382.069/0001-27',
            'endereco' => 'QI 7, Conj. F - Lago Sul, Brasília - DF',
            'telefone' => '(61)3213-4848',
            'longitude' => '-47.885598469942',
            'latitude' => '-15.841890656348118',
        ],
        [
            'nome' => 'Clinica Oásis',
            'id_especialidade' => '7',
            'cnpj' => '08.409.945/0001-73',
            'endereco' => 'St. de Áreas Especiais Norte Avenida',
            'telefone' => '(61)3389-3670',
            'longitude' => '-47.65428989262549',
            'latitude' => '-15.612933984321604',
        ],
        [
            'nome' => 'Hospital Anchieta',
            'id_especialidade' => '11',
            'cnpj' => '60.629.383/0001-93',
            'endereco' => 'QNC AE Área Especial 8, 9, 10 - Taguatinga',
            'telefone' => '(61)3353-9000',
            'longitude' => '-48.0666082926255',
            'latitude' => '-15.823210107794981',
        ],
        [
            'nome' => 'Hospital Brasilia',
            'id_especialidade' => '12',
            'cnpj' => '60.884.855/0022-89',
            'endereco' => 'St.de Habitações Individuais Sul QI 15 - Lago Sul',
            'telefone' => '(61)3704-9000',
            'longitude' => '-47.88255452011108',
            'latitude' => '-15.845894966460245',
        ],
        [
            'nome' => 'Hospital Santa Marta',
            'id_especialidade' => '13',
            'cnpj' => '00.610.980/0001-44',
            'endereco' => 'St. de Grandes Áreas Norte 608 MÓDULO F',
            'telefone' => '(61)3353-9000',
            'longitude' => '-47.87758688084187',
            'latitude' => '-15.757960103113671',
        ],
        [
            'nome' => 'Instituto Biocardios',
            'id_especialidade' => '14',
            'cnpj' => '05.544.035/0001-05',
            'endereco' => 'Qd Central, 05 - Sobradinho, Brasília - DF',
            'telefone' => '(61)3442-6300',
            'longitude' => '-47.787698181715875',
            'latitude' => '-15.649788690505172',
        ],
        [
            'nome' => 'Hospital Oftalmologico HOB',
            'id_especialidade' => '15',
            'cnpj' => '00.649.756/0001-66',
            'endereco' => 'SGAS II St. de Grandes Áreas Sul 607',
            'telefone' => '(61)3442-4000',
            'longitude' => '-47.895055944520465',
            'latitude' => '-15.819406674511605',
        ],
        [
            'nome' => 'Hospital das Clínicas e de Fraturas',
            'id_especialidade' => '16',
            'cnpj' => '01.273.401/0003-40',
            'endereco' => 'CEILÂNDIA SUL QNM 17 LOTE 16/18 - Ceilândia',
            'telefone' => '(61)3471-8181',
            'longitude' => '-48.09770473115515',
            'latitude' => '-15.814743698313347',
        ], 
        [
            'nome' => 'Centro Clinico Guará',
            'id_especialidade' => '17',
            'cnpj' => '02.403.041/0001-54',
            'endereco' => 'Guará I Condomínio do Bloco e da Qe 01',
            'telefone' => '(00)0000-0000',
            'longitude' => '-47.97880360788088',
            'latitude' => '-15.813047731695722',
        ], 
        [
            'nome' => 'Centro Clinico Diem',
            'id_especialidade' => '18',
            'cnpj' => '23.972.733/0001-93',
            'endereco' => 'Av. Pau Brasil, 11 - Águas Claras',
            'telefone' => '(61)3597-8200',
            'longitude' => '-48.027443867946324',
            'latitude' => '-15.840378015353531',
        ], 
        [
            'nome' => 'Centro Medico Padre PIO',
            'id_especialidade' => '19',
            'cnpj' => '33.393.708/0001-09',
            'endereco' => 'MODULO 02, St. Hab. Vicente Pires BL 02',
            'telefone' => '(61)3973-2001',
            'longitude' => '-48.01581177348541',
            'latitude' => '-15.816644646067926',
        ],
        [
            'nome' => 'Clinica Vittá Brasilia',
            'id_especialidade' => '19',
            'cnpj' => '39.144.961/0001-05',
            'endereco' => 'St. Comercial Sul Q. 5 BL B - Asa Sul',
            'telefone' => '(61)3773-6161',
            'longitude' => '-47.88989819361968',
            'latitude' => '-15.797102689061155',
        ],
        ]);
    }
}