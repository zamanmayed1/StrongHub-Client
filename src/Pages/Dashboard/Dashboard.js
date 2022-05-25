import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../../Components/CustomLink';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='mb-32'>
            <h2 className='text-2xl text-center font-bold text-gray-900 my-2'>Dashboard</h2>
            <nav className=" p-2 md:w-3/4 mx-auto flex gap-5 justify-center">
                <li className='text-sm border px-3 py-2 list-none font-bold'><CustomLink to={''}>My Profile</CustomLink></li>
                <li className='text-sm border px-3 py-2 list-none font-bold'><CustomLink to={'myorder'}>My Orders</CustomLink></li>
                <li className='text-sm border px-3 py-2 list-none font-bold'><CustomLink to={'addareview'}>Add a Review</CustomLink></li>

                {/* Admi will See */}
                <li className='text-sm border px-3 py-2 list-none font-bold'><CustomLink to={'manageallorders'}>Manage Orders</CustomLink></li>

                <li className='text-sm border px-3 py-2 list-none font-bold'><CustomLink to={'addaproduct'}>Add Product</CustomLink></li>

                <li className='text-sm border px-3 py-2 list-none font-bold'><CustomLink to={'makeadmin'}>Make Admin</CustomLink></li>

                <li className='text-sm border px-3 py-2 list-none font-bold'><CustomLink to={'manageproduct'}>Manage Products</CustomLink></li>

            </nav>
            <div className="divider"></div>

            <Outlet />

        </div>
    );
};

export default Dashboard;