import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Components/Hooks/useToken';
import SocialSignin from '../../Components/SocialSignin';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Signup = () => {
    const [signInWithGoogle, Googleuser, Googleloading, Googleerror] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, newuser, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [displayName, setDisplayName] = useState('');
    const [updateProfile] = useUpdateProfile(auth);
    const [token] = useToken(newuser || Googleuser)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <progress className="progress w-56 mx-auto mb-96"></progress>;
    }
    if (newuser || Googleuser) {
        navigate(from, { replace: true });
    }

    const signup = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName });
    }

    return (

        <section className="md:h-[80vh] mb-14">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="https://i.ibb.co/GFW9RkK/undraw-coffee-break-h3uu.png"
                            className="w-full"
                            alt="Phone image"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={signup}>

                            <div className="mb-6">
                                <input
                                    type="text"
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    name='name'
                                    required
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    name='email'
                                    type="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    required
                                />
                            </div>


                            <div className="mb-6">
                                <input
                                    name='password'
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    minLength={6}
                                    required
                                />
                            </div>




                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Sign Up
                            </button>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">OR</p>
                            </div>


                            <button onClick={() => signInWithGoogle()} className='w-full'>
                                <a
                                    className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center bg-[#55acee]"


                                    role="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >

                                    Continue with Google
                                </a>
                            </button>
                        </form>
                        <div className="text-grey-dark mt-6">
                            Already Have an Account ?
                            <span className='underline'>  <Link to={'/login'}>Log In</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
};

export default Signup;