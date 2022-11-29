import React, { Component,useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import Crud from '../Components/Crud.jsx';
import AreaClinica from '../Components/AreaClinica';
import EditarInteressadoModal from './EditarDados';

export default function Area(props) {

console.log(props);
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
        id_user: 0,
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

const handleEditarClick = (interessado) => {
    setModalEditarInteressado({
      interessado,
      open: true,
    });
  };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={ <h2 style={{marginTop:"-25px"}} className="font-semibold text-xl text-gray-800 leading-tight">Clinicas cadastradas</h2>}
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
            <AreaClinica value={props.auth.user.clinica} dados={props.clinicas} onEditarClick={handleEditarClick}
            // clinicaId={props.auth.user.clinica.id_clinica}
            />
            {/* <EditarInteressadoModal
                formValues={{
                nome: modalEditarInteressado.interessado.name,
                cpf: modalEditarInteressado.interessado.cpf || "",
                email: modalEditarInteressado.interessado.email || "",
                dt_nascimento: modalEditarInteressado.interessado.dt_nascimento || "",
                telefone: modalEditarInteressado.interessado.telefone || "",
                }}
                interessadoId={modalEditarInteressado.interessado.id}
                onClose={handleModalEditarClose}
                open={modalEditarInteressado.open}
                // dispatch={dispatch}
            /> */}

        </AuthenticatedLayout>
    );
}
