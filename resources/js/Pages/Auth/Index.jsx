import React, { useState } from "react";
import GuestLayout from '@/Layouts/GuestLayout';
import Register from './Register';
import TabPainel from '../TabPainel.jsx';
import NavBar from '../NavBar.jsx';

function Index(props) {

return (
    <>
        <NavBar/>
        {/* <GuestLayout> */}

            {/* <Register props = {props}/> */}
            <TabPainel props = {props}/>
        {/* </GuestLayout> */}
        {/* </NavBar> */}
    </>
);


}

export default Index;
