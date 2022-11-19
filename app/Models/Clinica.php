<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class clinica extends Model
{
    use HasFactory;
    protected $table = 'tb_clinica';
    protected $primaryKey = 'id_clinica';
    public $timestamps = false;
    protected $fillable = [
        'nome',
        'cnpj',
        'telefone',
        'id_user',
        'email',
        'senha',
        'longitude',
        'latitude'
    ];

    public function usuario()
    {
        return $this->belongsToMany(User::class, 'id', 'id_user');
    }


}
