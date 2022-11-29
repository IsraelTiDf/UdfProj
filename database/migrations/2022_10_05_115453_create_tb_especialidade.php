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
        Schema::create('tb_especialidade', function (Blueprint $table) {
            $table->integerIncrements('id_especialidade');
            $table->string('nome', 50)->nullable();
            $table->longText('ds_especialidade')->nullable();
            $table->string('emergencia', 3)->nullable();
            // $table->integer('id_clinica')->unsigned()->nullable();
            $table->timestamps();
        });
    }

    //115503
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists('tb_especialidade');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
};
// 115503
