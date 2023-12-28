import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import security from '../../assets/security.jpg';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHeader } from '../../Contexts/HeaderProvider';
import LoginButton from '../../Components/GenericButton/LoginButton';
import { useAuth } from '../../Contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const Login = () => {

    useTitle('Login');
    const [error, setError] = useState();

    const { darkMode, translations } = useHeader();
    const { login, email, password, forget, newUser, pleaseSignup, or, withGoogle, withFacebook } = translations.loginSignup;

    const { signIn, signInWithGoogle, signInWithFacebook, setLoading, resetPassword } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // const emailRef = useRef('');
    // const userEmail = emailRef.current;
    // console.log(userEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = data => {
        const { Email, Password } = data;
        signIn(Email, Password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address');
                }

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            }
            )
            .catch(error => console.error(error))
    }

    const handleSignInWithFacebook = () => {
        signInWithFacebook()
        .then(result => {
            console.log(result.user);
            navigate(from, { replace: true })
        }
        )
            .catch(error => console.error(error))
    }

    // resetPassword(userEmail)
    //     .then(() => toast.success('Please check your email'))
    //     .catch(error => console.error(error))

    return (
        <div className='w-5/6 md:w-2/3 mx-auto md:flex md:gap-5 items-center'>
            <div className='md:w-1/2 hidden md:block'>
                <img src={security} alt='' />
            </div>
            <div className='md:w-1/2 flex justify-center items-center'>
                <div className={`md:w-96 p-5 md:p-7 rounded ${darkMode ? 'dark' : 'light'}`}>
                    <h2 className='text-xl text-center'>{login}</h2>
                    <form onSubmit={handleSubmit(handleSignIn)} className='space-y-3'>
                        <div>
                            <label>{email}</label>
                            <input
                                type="email"
                                // ref={emailRef}
                                {...register(email, { required: true })}
                                className="w-full p-2 rounded focus:outline-0 text-darkColor" />
                            {errors.email && <span className='text-red-300'>Email is required</span>}
                        </div>
                        <div>
                            <label>{password}</label>
                            <input
                                type="password"
                                {...register(password, { required: true })}
                                className="w-full p-2 rounded focus:outline-0 text-darkColor" />
                            {errors.password && <span className='text-red-300 block'>Password is required</span>}
                            <p><button onClick={resetPassword}>{forget}</button></p>
                        </div>
                        <h2 className='text-red-300'>{error}</h2>
                        <div className='w-3/4 mx-auto'>
                            <LoginButton>{login}</LoginButton>
                        </div>
                    </form>
                    <p className='text-center'>{newUser} <Link to='/signup' className='text-yellowDeep'>{pleaseSignup}</Link></p>
                    <div className="text-center my-5 border-b-2 border-white">{or}</div>
                    <LoginButton
                        className='mb-3'
                        handleSignInWithGoogle={handleSignInWithGoogle}
                    >
                        <FontAwesomeIcon icon={faGoogle} className='mr-3' />
                        {withGoogle}
                    </LoginButton>
                    <LoginButton
                        handleSignInWithFacebook={handleSignInWithFacebook}
                    >
                        <FontAwesomeIcon icon={faFacebook} className='mr-3' />
                        {withFacebook}
                    </LoginButton>
                </div>
            </div>
        </div>
    );
};

export default Login;