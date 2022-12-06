import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Menu,Grid} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Select from '@mui/material/Select';
import NavBar from '../NavBar.jsx';


const pages = ['Home', 'Sobre nós', 'Contato'];

export default function Login(props, { status, canResetPassword }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };


    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
        <NavBar props = {props}/>
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
            <Grid item xs={6} sm={6} lg={6}>
                <Grid>
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 mb-4 p-2 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </Grid>

                <Grid className="mt-4">
                    <InputLabel forInput="password" value="Senha" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 mb-4 p-2 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </Grid>

                <Grid className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Lembrar login</span>
                    </label>
                </Grid>

                <Grid className="flex items-center justify-end mt-4">
                    {/* {canResetPassword && ( */}
                        <Link
                            href={route('register')}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Cadastro
                        </Link>
                    {/* )} */}

                    <PrimaryButton className="ml-4" processing={processing}>
                        Entrar
                    </PrimaryButton>
                </Grid>
                </Grid>
            </form>
        </GuestLayout>
        </>
    );
}
