<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Illuminate\Notifications\Notifiable;

use Laravel\Sanctum\HasApiTokens;
class clinica extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'tb_clinica';
    protected $primaryKey = 'id_clinica';
    public $timestamps = false;
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    protected $fillable = [
        'nome',
        'cnpj',
        'telefone',
        'endereco',
        'id_user',
        'email',
        'password',
        'longitude',
        'latitude'
    ];

    public function usuario()
    {
        return $this->belongsToMany(User::class, 'id', 'id_user');
    }


}
