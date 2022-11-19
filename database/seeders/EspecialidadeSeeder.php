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
            'nome' => 'Acupuntura',
            'ds_especialidade' => 'Acupuntura ou acupunctura é uma forma de medicina alternativa e um ramo da medicina tradicional chinesa no qual finas agulhas são inseridas no corpo do paciente. A medicina tradicional chinesa é uma pseudociência, pois suas teorias e práticas são baseadas em crenças contrárias ao conhecimento científico.',
            'emergencia' => '1'

        ],
        [
            'nome' => 'Alergia e imunologia',
            'ds_especialidade' => 'Alergologia é a especialidade da Medicina que visa o diagnóstico e o tratamento das doenças alérgicas',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Anestesiologia',
            'ds_especialidade' => 'Anestesiologia é a especialidade médica que estuda e proporciona ausência ou alívio da dor e outras sensações ao paciente que necessita realizar procedimentos médicos, como cirurgias ou exames diagnósticos, identificando e tratando eventuais alterações das funções vitais.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Angiologia',
            'ds_especialidade' => 'Angiologia é a utilidade médica que se ocupa do tratamento clínico das doenças que acometem vasos sanguíneos e vasos linfáticos, como varizes, aneurismas e obstruções arteriais. Atua em conjunto com a cirurgia vascular que se ocupa do tratamento cirúrgico das ditas doenças.',
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
            'nome' => 'Cirurgia geral',
            'ds_especialidade' => 'Cirurgia Geral é a especialidade médica cuja área de atuação compreende: Cirurgia Abdominal, cirurgia videolaparoscópica e cirurgia do trauma.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Cirurgia torácica',
            'ds_especialidade' => 'Cirurgia torácica é a especialidade médica que se ocupa do tratamento de patologias pulmonares e torácicas passíveis de abordagem cirúrgica à exceção das que acometem o coração e grandes vasos.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Cirurgia vascular',
            'ds_especialidade' => 'Cirurgia vascular é a especialidade médica que se ocupa do tratamento cirúrgico de doenças das artérias, veias e vasos linfáticos.',
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
            'nome' => 'Endocrinologia',
            'ds_especialidade' => 'Endocrinologia é uma especialidade médica que estuda as ordens do sistema endócrino e suas secreções específicas, chamadas de secreções fisiológicas.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Endoscopia',
            'ds_especialidade' => 'Uma endoscopia é um procedimento usado na medicina para olhar dentro do corpo. O procedimento de endoscopia usa um endoscópio para examinar o interior de um órgão oco ou cavidade corporal. Ao contrário de muitas outras técnicas de imagem médica, os endoscópios são inseridos diretamente no órgão.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Gastroenterologia',
            'ds_especialidade' => 'Medicina geriátrica ou geriatria é o ramo da medicina que foca o estudo, a prevenção e o tratamento de doenças e da incapacidade em idades avançadas.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Genética médica',
            'ds_especialidade' => 'Genética médica ou genética clínica é a especialidade que lida com o diagnóstico, tratamento e controle dos distúrbios genéticos e hereditários.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Geriatria',
            'ds_especialidade' => 'Medicina geriátrica ou geriatria é o ramo da medicina que foca o estudo, a prevenção e o tratamento de doenças e da incapacidade em idades avançadas.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Ginecologia ',
            'ds_especialidade' => 'A ginecologia é a prática da medicina que lida diretamente com a saúde do aparelho reprodutor feminino e mamas.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Hematologia',
            'ds_especialidade' => 'Hematologia é o ramo da biologia e especialidade clínica que estuda o sangue dos demais animais com sistema circulatório fechado. ',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Homeopatia',
            'ds_especialidade' => 'Homeopatia é uma forma de terapia alternativa pseudocientífica, iniciada pelo alemão Samuel Hahnemann em 1796. Baseia-se no princípio similia similibus curantur, ou seja, o suposto tratamento se dá a partir da diluição e dinamização da mesma substância que produz o sintoma num indivíduo saudável.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Infectologia',
            'ds_especialidade' => 'Infectologia ou infecciologia é a especialidade médica que se ocupa do estudo das doenças causadas por diversos patógenos como príons, vírus, bactérias, protozoários, fungos e animais. A infectologia também é chamada de "doenças infecto-parasitárias" ou "moléstias infecciosas e parasitárias".',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Mastologia',
            'ds_especialidade' => 'A mastologia ou senologia é especialidade médica que se dedica ao estudo das glândulas mamárias.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Medicina de emergência',
            'ds_especialidade' => 'Na conjuntura atual a Medicina de Urgência vem ganhando cada vez mais espaço na área médica, principalmente devido a uma demanda cada vez maior, decorrente do aumento da violência e dos traumas',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Medicina do trabalho',
            'ds_especialidade' => 'Medicina do trabalho é um ramo da medicina que lida com as relações entre homens e mulheres trabalhadores e seu trabalho, visando não somente a prevenção dos acidentes e das doenças do trabalho, mas a promoção da saúde e da qualidade de vida.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Medicina esportiva',
            'ds_especialidade' => 'Medicina esportiva é uma especialidade médica que inclui segmentos teóricos e práticos da medicina com o objetivo de investigar a influência do exercício, do treinamento e do esporte sobre as pessoas sadias ou doentes, com a finalidade de prevenir, tratar e reabilitar.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Medicina física e reabilitação',
            'ds_especialidade' => 'A Medicina Física e de Reabilitação (MFR) ou Fisiatria é uma especialidade médica que se ocupa do diagnóstico e terapêutica de diferentes entidades tais como as subsequentes a patologias traumática, a lesões do sistema nervoso central e periférico, orto-traumatológicas, cardio-respiratórias, reumatológicas, vasculares periféricas, pediátricas entre outras.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Medicina intensiva',
            'ds_especialidade' => 'Medicina intensiva é a especialidade médica que presta suporte avançado de vida a pacientes com desarranjo agudo de alguma função vital.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Medicina nuclea',
            'ds_especialidade' => 'A medicina nuclear é uma especialidade médica que emprega materiais radioativos com finalidade diagnóstica e terapêutica.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Medicina preventiva e social',
            'ds_especialidade' => 'Medicina preventiva é a especialidade médica que se dedica à prevenção da doença ao invés de seu tratamento.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Nefrologia',
            'ds_especialidade' => 'Nefrologia é a especialidade médica que se ocupa do diagnóstico e tratamento clínico das doenças do sistema urinário, em especial o rim.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Neurocirurgia',
            'ds_especialidade' => 'Neurocirurgia é a especialidade médica que se ocupa do tratamento de adultos, crianças, neonatos e, nos últimos anos, de fetos, portadores de doenças do sistema nervoso central e periférico, tais como hidrocefalia, tumores, doenças vasculares, degenerativas, traumas crânio-encefálicos e lesões raqui-medulares passíveis de abordagem cirúrgica, bem como do tratamento neurocirúrgico da epilepsia, da dor, das desordens dos movimentos (tais como a doença de Parkinson, as distonias, a síndrome de Tourette, dentre outras) e de alguns transtornos psique (psicocirurgia).',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Neurologia',
            'ds_especialidade' => 'Neurologia é a especialidade médica que trata dos distúrbios estruturais do sistema nervoso. Especificamente, ela lida com o diagnóstico e tratamento de todas as categorias de doenças que envolvem os sistemas nervoso central, periférico e autônomo, parassimpático e simpático incluindo os seus revestimentos, vasos sanguíneos, e todos os tecidos efetores, como os músculos.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Nutrologia',
            'ds_especialidade' => 'Nutrologia é a especialidade médica clínica que se dedica ao diagnóstico, prevenção e tratamento de doenças do comportamento alimentar. Os médicos nutrólogos não devem ser confundidos com nutricionistas.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Oftalmologia',
            'ds_especialidade' => 'A oftalmologia é uma especialidade da medicina que estuda e trata as doenças relacionadas ao olho, à refração e aos olhos e seus anexos. O médico oftalmologista realiza cirurgias, prescreve tratamentos e correções para os distúrbios de visão.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Oncológia',
            'ds_especialidade' => 'A oncologia ou cancerologia, também chamada cancrologia, é a especialidade médica que, à procura do tratamento do paciente, estuda os cânceres, também chamados cancros, que são tumores malignos, e a forma como essas doenças desenvolvem-se nos organismos em que estão',
            'emergencia' => '0'

        ],
        [
            'nome' => 'Oncologia clínica',
            'ds_especialidade' => 'A oncologia ou cancerologia, também chamada cancrologia, é a especialidade médica que, à procura do tratamento do paciente, estuda os cânceres, também chamados cancros, que são tumores malignos, e a forma como essas doenças desenvolvem-se nos organismos em que estão.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Ortopedia e traumatologia',
            'ds_especialidade' => 'A ortopedia é a especialidade médica que cuida da saúde relacionadas aos elementos do aparelho locomotor, como ossos, músculos, ligamentos e articulações. A traumatologia é a especialidade médica que lida com o trauma do aparelho músculo-esquelético.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Otorrinolaringologia',
            'ds_especialidade' => 'A otorrinolaringologia é uma especialidade médica com características clínicas e cirúrgicas. Seu campo de atuação envolve as doenças do ouvido, do nariz e seios paranasais, faringe, laringe, cabeça, pescoço, boca e esôfago.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Patologia',
            'ds_especialidade' => 'Patologia é um ramo da biologia e medicina primariamente dedicado à análise e estudo de órgãos, tecidos e fluidos corporais, com a finalidade de fazer um diagnóstico das doenças.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Pediatria',
            'ds_especialidade' => 'A pediatria é a especialidade médica dedicada à assistência à criança e ao adolescente, nos seus diversos aspectos, sejam eles preventivos ou curativos.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Pneumologia',
            'ds_especialidade' => 'Pneumologia é a especialidade médica a qual é responsável pelo tratamento das patologias das vias aéreas inferiores.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Psiquiatria',
            'ds_especialidade' => 'Psiquiatria é uma das especialidades da Medicina, e basicamente é responsável pelo diagnóstico e tratamento dos chamados Transtornos Mentais e de Comportamento, atuando com a prevenção, o diagnóstico, o tratamento e a reabilitação dos diferentes modos de manifestações das doenças mentais em geral.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Radiologia',
            'ds_especialidade' => 'Radiologia é o ramo ou especialidade da medicina, da odontologia, da indústria, forense entre outras áreas que utiliza as radiações para a realização de diagnósticos, controle e tratamento de doenças.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Radioterapia',
            'ds_especialidade' => 'Radioterapia, ou radioncologia, é uma especialidade médica focada no tratamento oncológico utilizando radiação ionizante.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Reumatologia',
            'ds_especialidade' => 'Reumatologia é a área do conhecimento médico que se ocupa do estudo das doenças que acometem os tecidos conjuntivos, que incluem as articulações, os ossos, os músculos, os tendões e os ligamentos.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Terapia',
            'ds_especialidade' => 'Terapia ou terapêutica significa o tratamento para uma determinada doença. As terapias dependem do diálogo com um profissional da área, num processo que demanda investimento de tempo e de dinheiro.',
            'emergencia' => '0'
        ],
        [
            'nome' => 'Urologia',
            'ds_especialidade' => 'Urologia é uma especialidade cirúrgica da medicina que trata do trato urinário de homens e de mulheres e do sistema reprodutor das pessoas do sexo masculino. ',
            'emergencia' => '0'
        ],

        ]);
    }
}