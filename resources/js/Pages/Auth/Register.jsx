import React, { useState, useEffect } from "react";
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
// import NavBar from '/resources/js/Pages/NavBar.jsx';
import TabPainel from '/resources/js/Pages/TabPainel.jsx';
import { cpf } from 'cpf-cnpj-validator';
import { cpfMask,celularMask } from '@/Layouts/input-mask';
import { Controller } from "react-hook-form";
import {Menu,Grid,Button} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import NavBar from '../NavBar.jsx';

const rules = {
    cpf: {
        required: "CPF é obrigatória",
        pattern: "A CPF inserida é invalido"
    }
};
const pages = ['Home', 'Sobre nós', 'Contato'];
export default function Register(props) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

    const { data, setData, post, processing, errors, reset } = useForm({
        name:'',
        cpf:'',
        telefone:'',
        dt_nascimento:'',
        endereco:'',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const [cpfInvalid, setcpfInvalid] = useState(null);
    const onHandleChange = (event) => {
        const {name} = event.target;
        let {value} = event.target;

        switch(name){
            case "cpf":
                value =cpfMask(value);
                setcpfInvalid(cpf.isValid(value));
                // if(cpf.isValid(value) === false){
                //     return <InputError message={'O CPF inserida é invalido'} className="mt-2" />
                // }
            break;
            case "telefone":
                value =celularMask(value);
            break;

        }
        event.target.value = value;
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
        // alert(event.target.value);
        // event.target.value = cpfMask(event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register')).catch(error => {
            setError('cpf', { message: error });
        });

        ;
    };

    const handleCPFChange = (event) => {
        // alert(event.target.value);
        // eslint-disable-next-line no-param-reassign
        event.target.value = cpfMask(event.target.value);
      };
    // const cpfField = register("cpf", rules.cpf);

    return (
        <>
        <NavBar props = {props}/>
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <Grid>
                    <InputLabel forInput="name" value="Nome" />

                    <TextInput
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-0.5 mb-4 p-2 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </Grid>

                <Grid>
                    <InputLabel forInput="cpf" value="CPF" inputProps={{ minLength: 14, maxLength: 14 }} />

                    <TextInput
                        type="text"
                        name="cpf"
                        value={data.cpf}
                        className="mt-0.5 mb-2 p-2 block w-full"
                        autoComplete="cpf"
                        isFocused={true}
                        // rules={{
                        //     required: true,
                        // }}
                        // rules={rules.cpf}
                        required
                        handleChange={onHandleChange}

                        // helperText={error ? rules.cpf[error.type] : ""}

                        // inputRef={cpfField.ref}
                        // inputProps={{ minLength: 14, maxLength: 14 }}
                        // handleChange={handleCPFChange}
                        // onChange={(event) => {
                        //     // cpfField.onChange(event);
                        //     handleCPFChange(event);
                        //   }}
                        // rules={{
                        //     required: true,
                        // }}
                    />

                    <InputError message={cpfInvalid === false && "CPF é invalido" ||errors.cpf} className="mb-2" />
                </Grid>

                <Grid>
                    <InputLabel forInput="telefone" value="Telefone" />

                    <TextInput
                        type="text"
                        name="telefone"
                        value={data.telefone}
                        className="mt-0.5 mb-4 p-2  block w-full"
                        autoComplete="telefone"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </Grid>

                <Grid>
                    <InputLabel forInput="dt_nascimento" value="Data de nascimento" />

                    <TextInput
                        type="date"
                        name="dt_nascimento"
                        value={data.dt_nascimento}
                        className="mt-0.5 mb-4 p-2  block w-full"
                        autoComplete="dt_nascimento"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </Grid>

                <Grid>
                    <InputLabel forInput="endereco" value="Endereço" />

                    <TextInput
                        type="text"
                        name="endereco"
                        value={data.endereco}
                        className="mt-0.5 mb-4 p-2  block w-full"
                        autoComplete="endereco"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.endereco} className="mt-2" />
                </Grid>

                <Grid>
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-0.5 mb-4 p-2 block w-full "
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </Grid>

                <Grid className="mt-4">
                    <InputLabel forInput="password" value="Senha" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-0.5 mb-4 p-2 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </Grid>

                <Grid className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirmar Senha" />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-0.5 mb-4 p-2 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </Grid>

                <Grid className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Ja sou cadastrado
                    </Link>


                    <PrimaryButton className="ml-5" processing={processing}>
                        CADASTRAR
                    </PrimaryButton>
                </Grid>
            </form>
        </GuestLayout>
        </>
    );
}
