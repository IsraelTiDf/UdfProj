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
            Schema::create('tb_especialidade_tb_clinica', function (Blueprint $table) {
                $table->primary(['id_especialidade', 'id_user']);
                $table->integer('id_especialidade')->unsigned();
                // $table->integer('id_clinica')->unsigned();
                $table->integer('id_user')->unsigned();
                $table->foreign('id_especialidade')->references('id_especialidade')->on('tb_especialidade');
                // $table->foreign('id_clinica')->references('id_clinica')->on('tb_clinica');
                $table->foreign('id_user')->references('id')->on('users');
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
        Schema::dropIfExists('tb_especialidade_has_tb_clinica');
        // Schema::dropIfExists('tb_especialidade_tb_clinica');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
};
