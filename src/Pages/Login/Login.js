import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialSignin from '../../Components/SocialSignin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useToken from '../../Components/Hooks/useToken';


const Login = () => {
    const [signInWithGoogle, Googleuser, Googleloading, Googleerror] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    let navigate = useNavigate();
    const [token] = useToken(user || Googleuser)
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

   

    const login = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password)
        if (email) {

            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        localStorage.setItem('accessToken', data.accessToken);

                    }
                    console.log(data);
                })
        }

    }


    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        if (email) {
            toast.success("Eamil Sent !")
        }
        else {
            toast.error("Eamil Not Found")
        }
    }

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
    if (token) {
        navigate(from, { replace: true });
    }


    return (
        <section className="md:h-[80vh] mb-14">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={login}>

                            <div className="mb-6">
                                <input
                                    name='email'
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    required
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">

                                </div>
                                <p
                                    onClick={resetPassword}
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                >Forgot password </p
                                >
                            </div>


                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Log in
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
                            New to Strong Hub ?
                            <span className='underline'>  <Link to={'/signup'}> Create An Account</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </section>
    );
};

export default Login;