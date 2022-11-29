import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const cpf = auth.user.cpf;
    const cnpj = auth.user.cnpj;
    // console.log(auth);

    return (
        <div style={{backgroundColor:"#FFFFF0"}} className=" min-h-screen -100">
            <nav className="position-fixed bg-white border-b border-black-100">
                <div >
                    <div className="flex justify-between h-16.8">
                        <div className="flex sm:ml-48" >
                        <div className="hidden sm:flex  sm:items-center sm:my-5 sm:ml-12">
                                <Link href="/">
                                    <div style={{
                                        marginLeft: '-0.5px',
                                        marginTop: '-8px',
                                        marginBottom: '-8px',
                                        width: "145px",
                                        fontFamily: 'monospace',
                                        color: '#591010',
                                        fontSize: '30px',
                                        fontWeight: 600,
                                        letterSpacing: '.3rem',
                                        textDecoration: 'none',
                                         }}> DIND
                                    </div>
                                </Link>
                            </div>


                        </div>

                        <div className="hidden sm:flex sm:items-center mr-32">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text--500 bg-white hover:text-red-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Deslogar
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{auth.user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header style={{padding:"15px", textAlign:"center"}} className="bg-white shadow">
                    <div>
              {cpf && (
                <div  style={{marginLeft:"200px"}} className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Area Usuario
                    </NavLink>
                    <NavLink href={route('usuarios')} active={route().current('usuarios')}>
                        Clinicas
                    </NavLink>
                </div>
            )}
            {cnpj && (
                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Area Clinica
                    </NavLink>
                    <NavLink href={route('clinicas')} active={route().current('clinicas')}>
                        Usuarios
                    </NavLink>
                </div>
            )}
            </div>
                    <div>{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
