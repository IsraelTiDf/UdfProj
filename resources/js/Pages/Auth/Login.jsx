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
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Select from '@mui/material/Select';


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
        <AppBar position="fixed" style={{ background: '#FFFFFF' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography style={{}}
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        fontSize: '30px',
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: '#591010',
                        textDecoration: 'none',
                        }}
                    >
                        DIND
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <LocalHospitalIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                        href="/#sobrenos"
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            fontFamily: 'arial',
                            color: 'red',
                            fontSize: '14px',
                            fontWeight: 600,
                            letterSpacing: '.1rem',
                        }}
                        >
                        Sobre nós
                        </Button>
                        <Select style={{defaultValue:"ewfg" , marginTop:"15px", marginLeft:"5px", marginRight:"5px", width:"10%", height:"40px"}}

                        >
                            <menuItem>
                            <Button
                                href="/#especialidade"
                                onClick={handleCloseNavMenu}
                                sx={{
                                my: 2,
                                display: 'block',
                                fontFamily: 'arial',
                                color: 'red',
                                fontSize: '12px',
                                fontWeight: 700,
                                }}>Especialidade médica</Button>
                            </menuItem>
                            <menuItem>
                            <Button
                                href="/#emergencia"
                                onClick={handleCloseNavMenu}
                                sx={{
                                textAlign:"center",
                                my: 2,
                                display: 'block',
                                fontFamily: 'arial',
                                color: 'red',
                                fontSize: '12px',
                                fontWeight: 700,
                                }}>Emergência</Button>
                            </menuItem>
                        </Select>
                        <Button
                        href="/#contatos"
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            display: 'block',
                            fontFamily: 'arial',
                            color: 'red',
                            fontSize: '14px',
                            fontWeight: 600,
                            letterSpacing: '.1rem',
                        }}
                        >
                        Contato
                        </Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
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
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Lembrar login</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {/* {canResetPassword && ( */}
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Esqueceu senha?
                        </Link>
                    {/* )} */}

                    <PrimaryButton className="ml-4" processing={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
        </>
    );
}
