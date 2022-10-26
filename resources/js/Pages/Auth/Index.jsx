import React, { useState } from "react";
import GuestLayout from '@/Layouts/GuestLayout';
import Register from './Register';

function Index(props) {
console.log(props);

return (
    <>
        <GuestLayout>

            <Register props = {props}/>

        </GuestLayout>
    </>
);


}

export default Index;
