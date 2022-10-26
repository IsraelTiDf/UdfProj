<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class clinica extends Model
{
    use HasFactory;
    protected $table = 'tb_clinica';
    protected $primaryKey = 'id_clinica';
    protected $fillable = [
        'nome',
        'cpf',
        'telefone',
        'id_user',
        'email',
        'senha',
        'longitude',
        'latitude'
    ];


}
