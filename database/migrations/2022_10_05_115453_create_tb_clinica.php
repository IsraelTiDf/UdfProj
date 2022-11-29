<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_clinica', function (Blueprint $table) {
            $table->integerIncrements('id_clinica');
            $table->string('nome', 50);
            $table->string('email', 50);
            $table->string('password');
            $table->string('endereco', 50);
            $table->string('cnpj', 20);
            $table->integer('id_user')->unsigned()->nullable();
            $table->foreign('id_user')->references('id')->on('users');
            $table->string('telefone', 11);
            $table->string('emergencia', 3)->nullable();
            $table->decimal('longitude', 10,4)->nullable();
            $table->decimal('latitude', 10,4)->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists('tb_clinica');
        // Schema::dropIfExists('tb_especialidade');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
};
