import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-center text-red-500 text-2xl font-bold'> 404 ERROR ! Page NOT Found .</h1>
            <img className='block mx-auto' src="https://i.pinimg.com/originals/53/14/0c/53140c59edfb0348a4d2ead074251694.gif" alt="" />
            <button className='btn bg-red-600 block mb-10 mx-auto'><Link to={'/'}>Back To Home</Link></button>
            
        </div>
    );
};

export default ErrorPage;