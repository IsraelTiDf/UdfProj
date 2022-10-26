<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class EspecialidadeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tb_especialidade')->insert([[
            'nome' => 'Anestesiologia',
            'ds_especialidade' => 'Anestesiologia é a especialidade médica que estuda e proporciona ausência ou alívio da dor e outras sensações ao paciente que necessita realizar procedimentos médicos, como cirurgias ou exames diagnósticos, identificando e tratando eventuais alterações das funções vitais.',
            'emergencia' => '1'

        ],
        [
            'nome' => 'Acupuntura',
            'ds_especialidade' => 'Acupuntura ou acupunctura é uma forma de medicina alternativa e um ramo da medicina tradicional chinesa no qual finas agulhas são inseridas no corpo do paciente. A medicina tradicional chinesa é uma pseudociência, pois suas teorias e práticas são baseadas em crenças contrárias ao conhecimento científico.',
            'emergencia' => '0'
        ]]);
    }
}
