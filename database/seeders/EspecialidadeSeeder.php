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
        ],
        [
            'nome' => 'Cardiologia',
            'ds_especialidade' => 'Cardiologia é a especialidade médica que se ocupa do diagnóstico e tratamento das doenças que acometem o coração bem como os outros componentes do sistema circulatório. O médico especialista nessa área é o cardiologista.',
            'emergencia' => '0'

        ],
        [
            'nome' => 'Cirurgia cardiovascular',
            'ds_especialidade' => 'Cirurgia cardiovascular é a especialidade médica que se ocupa do tratamento cirúrgico das doenças que acometem o coração',
            'emergencia' => '0'

        ],
        [
            'nome' => 'Oncológica',
            'ds_especialidade' => 'A oncologia ou cancerologia, também chamada cancrologia, é a especialidade médica que, à procura do tratamento do paciente, estuda os cânceres, também chamados cancros, que são tumores malignos, e a forma como essas doenças desenvolvem-se nos organismos em que estão',
            'emergencia' => '0'

        ],
        [
            'nome' => 'Coloproctologia',
            'ds_especialidade' => 'Coloproctologia é uma especialidade médica cirúrgica, é o estudo das doenças do intestino grosso, do reto e ânus. Compreende também uma série de procedimentos de diagnóstico, como a colonoscopia, a manometria e a ultrassonografia endorretal.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Dermatologia',
            'ds_especialidade' => 'Dermatologia é a especialidade médica que se ocupa do diagnóstico e tratamento clínico-cirúrgico das enfermidades relacionados à pele e aos anexos cutâneos. Dentro da dermatologia, existe a dermatovenerologia, especialidade que tem importante atuação no contexto das infecções sexualmente transmissíveis.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Gastroenterologia',
            'ds_especialidade' => 'Medicina geriátrica ou geriatria é o ramo da medicina que foca o estudo, a prevenção e o tratamento de doenças e da incapacidade em idades avançadas.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Neurologia',
            'ds_especialidade' => 'Neurologia é a especialidade médica que trata dos distúrbios estruturais do sistema nervoso. Especificamente, ela lida com o diagnóstico e tratamento de todas as categorias de doenças que envolvem os sistemas nervoso central, periférico e autônomo, parassimpático e simpático incluindo os seus revestimentos, vasos sanguíneos, e todos os tecidos efetores, como os músculos.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Urologia',
            'ds_especialidade' => 'Urologia é uma especialidade cirúrgica da medicina que trata do trato urinário de homens e de mulheres e do sistema reprodutor das pessoas do sexo masculino. ',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Radioterapia',
            'ds_especialidade' => 'Radioterapia, ou radioncologia, é uma especialidade médica focada no tratamento oncológico utilizando radiação ionizante.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Psiquiatria',
            'ds_especialidade' => 'Psiquiatria é uma das especialidades da Medicina, e basicamente é responsável pelo diagnóstico e tratamento dos chamados Transtornos Mentais e de Comportamento, atuando com a prevenção, o diagnóstico, o tratamento e a reabilitação dos diferentes modos de manifestações das doenças mentais em geral.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Pediatria',
            'ds_especialidade' => 'A pediatria é a especialidade médica dedicada à assistência à criança e ao adolescente, nos seus diversos aspectos, sejam eles preventivos ou curativos.',
            'emergencia' => '0'
        ],

        ]);
    }
}
