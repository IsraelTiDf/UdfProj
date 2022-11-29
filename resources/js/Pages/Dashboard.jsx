import React, { Component,useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import Crud from '../Components/Crud.jsx';
import EditarInteressadoModal from './EditarDados';
import NavLink from '@/Components/NavLink';

export default function Dashboard(props, auth) {
// console.log(props.auth[0].user.cpf);
const cpf= props.auth.cpf;
const cnpj= props.auth.cnpj;
// console.log(props);

const modalEditarInteressadoDefault = {
    open: false,
    interessado: {
      id: 0,
      id_area: 0,
      name: "",
      cpf: "",
      email: "",
      dt_nascimento: "",
      telefone: "",
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
            header={
              <div>
              {cpf && (
                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Area Usuario
                    </NavLink>
                    <NavLink href={route('usuario')} active={route().current('usuario')}>
                        Clinicas
                    </NavLink>
                </div>
            )}
            {cnpj && (
                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Area Clinica
                    </NavLink>
                    <NavLink href={route('usuario')} active={route().current('usuario')}>
                        Usuarios
                    </NavLink>
                </div>
            )}
            </div>
            }

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
            <Crud value={props.auth.user} onEditarClick={handleEditarClick}/>
            <EditarInteressadoModal
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
                // dispatch={dispatch}
            />

        </AuthenticatedLayout>
    );
}
