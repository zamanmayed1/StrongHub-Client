import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CustomLink from './CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';




const Navbar = () => {
    const [user] = useAuthState(auth)

    return (
        <div className="navbar  mb-3 bg-base-100 ">
            <div className="navbar-start ">

                <h1 className='text-3xl text-left font-bold text-primary'>Strong Hub</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='mx-2 font-bold '><CustomLink to={'/'}>Home</CustomLink></li>
                    <li className='mx-2 font-bold '><CustomLink to={'/products'}>Products</CustomLink></li>
                    <li className='mx-2 font-bold '><CustomLink to={'/blogs'}>Blogs</CustomLink></li>
                    <li className='mx-2 font-bold '><CustomLink to={'/myportfolio'}>My Portfolio</CustomLink></li>
                    {
                        user && <>
                            <li className='mx-2 font-bold '><CustomLink to={'/dashboard'}>Dashboard</CustomLink></li>
                        </>
                    }



                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <button onClick={() => {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                    }} className='bg-red-600 btn'>Sign Out</button> :
                        <button className='btn-primary btn'> <Link to={'/login'} >Log In</Link></button>
                }

                <div className="dropdown dropdown-left">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li className='mx-2 font-bold '><CustomLink to={'/'}>Home</CustomLink></li>
                        <li className='mx-2 font-bold '><CustomLink to={'/products'}>Products</CustomLink></li>
                        <li className='mx-2 font-bold '><CustomLink to={'/blogs'}>Blogs</CustomLink></li>

                        {
                            user && <>
                                <li className='mx-2 font-bold '><CustomLink to={'/dashboard'}>Dashboard</CustomLink></li>
                            </>
                        }

                    </ul>
                </div>

            </div>
        </div >
    );
};

export default Navbar;