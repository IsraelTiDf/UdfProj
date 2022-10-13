import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Img from '/resources/js/Pages/ImgBack.jsx';
import NavBar from '/resources/js/Pages/NavBar.jsx';

export default function Welcome(props) {
    // console.log(props);
    return (
        <>
            <Head title="Welcome" />
            {/* <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"> */}
                {/* <div className="fixed top-0 right-0 px-6 py-4 sm:block"> */}
                <NavBar props = {props}>
                </NavBar>
                {/* </div> */}
                        <Img></Img>
                {/* <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                    </div>


                </div> */}



            {/* </div> */}
        </>
    );
}
