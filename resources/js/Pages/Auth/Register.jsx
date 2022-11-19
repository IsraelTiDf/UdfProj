import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import NavBar from '/resources/js/Pages/NavBar.jsx';
import TabPainel from '/resources/js/Pages/TabPainel.jsx';
import { cpf } from 'cpf-cnpj-validator';

const rules = {
    cpf: {
        required: "CPF é obrigatória",
        pattern: "A CPF inserida e invalido"
    }
};
export default function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name:'',
        cpf:'',
        telefone:'',
        dt_nascimento:'',
        email: '',
        password: '',
        password_confirmation: '',
    });

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

        post(route('register'));
    };

    return (
        <>
        {/* <NavBar props = {props}/> */}
        <GuestLayout>
        {/* <TabPainel/> */}
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Nome" />

                    <TextInput
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="cpf" value="CPF" />

                    <TextInput
                        type="text"
                        name="cpf"
                        value={data.cpf}
                        className="mt-1 block w-full"
                        autoComplete="cpf"
                        isFocused={true}
                        handleChange={onHandleChange}
                        rules={{
                            required: true,
                        }}
                    />

                    <InputError message={errors ? rules.cpf[errors.type] : ""} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="telefone" value="Telefone" />

                    <TextInput
                        type="text"
                        name="telefone"
                        value={data.telefone}
                        className="mt-1 block w-full"
                        autoComplete="telefone"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="dt_nascimento" value="Data de nascimento" />

                    <TextInput
                        type="date"
                        name="dt_nascimento"
                        value={data.dt_nascimento}
                        className="mt-1 block w-full"
                        autoComplete="dt_nascimento"
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
