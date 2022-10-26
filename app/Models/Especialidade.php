<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class especialidade extends Model
{
    use HasFactory;
    protected $table = 'tb_especialidade';
    protected $primaryKey = 'id_especialidade';
    public $timestamps = false;
    protected $fillable = [
        'nome',
        'emergencia',
        'ds_especialidade',
        // 'created_at',
        // 'updated_at',
    ];


}
