import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import {Menu,Grid} from '@mui/material';

export default function Guest({ children }) {
    return (
        <Grid className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100" sx={{backgroundColor: "#FFEFE7" }}>
            <Grid className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </Grid>
        </Grid>
    );
}
