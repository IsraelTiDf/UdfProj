import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import NavBar from '/resources/js/Pages/NavBar.jsx';
import axios from "axios";
// import TabPainel from '/resources/js/Pages/TabPainel.jsx';

export default function RegisterClinica(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nome:'',
        cnpj:'',
        telefone:'',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const axiosRout = axios.create({
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
        },
        validateStatus(status) {
          return status >= 200 && status < 300; // default
        },
      });
    //   const sucesso = window.location.replace("/dashboard");

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        axiosRout.post('/register/clinica1',data).then();
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    };

    return (
        <>
        {/* <NavBar props = {props}/> */}
        {/* <TabPainel/> */}
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="nome" value="Nome" />

                    <TextInput
                        type="text"
                        name="nome"
                        value={data.nome}
                        className="mt-1 block w-full"
                        autoComplete="nome"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.nome} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="cnpj" value="CNPJ" />

                    <TextInput
                        type="text"
                        name="cnpj"
                        value={data.cnpj}
                        className="mt-1 block w-full"
                        autoComplete="cnpj"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="telefone" value="Telefone" />

                    <TextInput
                        type="text"
                        name="telefone"
                        value={data.cpf}
                        className="mt-1 block w-full"
                        autoComplete="telefone"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>


                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Senha" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirmar Senha" />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Ja sou cadastrado
                    </Link>


                    <PrimaryButton className="ml-5" processing={processing}>
                        CADASTRAR
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
        </>
    );
}
