import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Myprofile = () => {
    const [user] = useAuthState(auth)

    return (
        <div className='my-4'>
            <h1 className='text-xl text-center font-bold text-primary'>Welcome, <span className='text-orange-600'>{user?.displayName} </span> To Your Profile,</h1>
            <div     className='card md:w-1/4 mx-auto shadow-md my-4 p-5'>
            <img className='rounded-full w-28 ring-2 mx-auto' src="https://i.ibb.co/DGFwPp9/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg" alt="" />
            <h3 className='text-2xl text-center font-bold text-gray-800'>{user?.displayName} </h3>
            <h3 className='text-xl text-center font-bold text-gray-800'>{user?.email} </h3>

            </div>

        </div>
    );
};

export default Myprofile;