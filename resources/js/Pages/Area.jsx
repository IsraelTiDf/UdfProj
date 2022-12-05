import React, { Component,useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import Crud from '../Components/Crud.jsx';
import AreaClinica from '../Components/AreaClinica';
import EditarInteressadoModal from './EditarDados';

export default function Area(props) {

const cpf= props.auth.cpf;
const cnpj= props.auth.cnpj;

const modalEditarInteressadoDefault = {
    open: false,
    interessado: {
    id: 0,
      name: "",
      cpf: "",
      email: "",
      dt_nascimento: "",
      telefone: "",
    },
    clinica: {
        id_clinica: 0,
        // id_user: 0,
        nome:"",
        cnpj: "",
        email:"",
        longitude: "",
        latitude: "",
    },
  };
const [modalEditarInteressado, setModalEditarInteressado] = useState(
    modalEditarInteressadoDefault
  );

const handleModalEditarClose = () =>
    setModalEditarInteressado(modalEditarInteressadoDefault);

const handleEditarClick = (id_clinica) => {
    // console.log(id_clinica);
    setModalEditarInteressado({
        id_clinica,
      open: true,
    });
  };
//   console.log(modalEditarInteressado.clinica);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<></>}
        >
            <Head title="Dashboard" />
{/*
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
                    </div>
                </div>
            </div> */}
            <AreaClinica value={props.auth.user.clinica} clinicas={props.clinicas} especialidade={props.clinicas.especialidade} onEditarClick={handleEditarClick}
            // clinicaId={props.auth.user.clinica.id_clinica}
            />
            <EditarInteressadoModal
                // formValues={{
                // nome: modalEditarInteressado.clinica.nome,
                // cpf: modalEditarInteressado.clinica.cnpj || "",
                // telefone: modalEditarInteressado.clinica.telefone || "",
                // }}
                interessadoId={modalEditarInteressado.id_clinica}
                onClose={handleModalEditarClose}
                especialidade={props.especialidades}
                open={modalEditarInteressado.open}
                // dispatch={dispatch}
            />

        </AuthenticatedLayout>
    );
}
