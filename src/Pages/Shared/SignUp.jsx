import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import security from '../../assets/security.jpg';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHeader } from '../../Contexts/HeaderProvider';
import LoginButton from '../../Components/GenericButton/LoginButton';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {

    useTitle('SignUp');
    const [error, setError] = useState('');

    const { darkMode, translations } = useHeader();
    const { signup, name, email, password, confirm, haveAnAccount, pleaseLogin, or, withGoogle, withFacebook, } = translations.loginSignup;

    const { createUser, verifyEmail, updateUserProfile } = useAuth();
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const handleSignUp = data => {
        const { name, email, password, confirmPassword } = data;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                reset();
                setError('');
                handleUpdateUserProfile(name)
                handleEmailVerification();
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    };
    
    const handleUpdateUserProfile = (name) => {
        const profile = {displayName: name}
        
        updateUserProfile(profile)
        .then(() => console.log('Profile Updated'))
        .catch(error => console.error(error))
    }

    const handleEmailVerification = () =>{
        verifyEmail()
        .then(() => {
            toast.success('Please verify your email address');
        } )
        .catch(error => console.error(error));
    }

    return (
        <div className='w-5/6 md:w-2/3 mx-auto md:flex md:gap-5 items-center'>
            <div className='md:w-1/2 hidden md:block'>
                <img src={security} alt='' />
            </div>
            <div className='md:w-1/2 flex justify-center items-center'>
                <div className={`md:w-96 p-5 md:p-7 rounded ${darkMode ? 'dark' : 'bg-blueHead text-white'}`}>
                    <h2 className='text-xl text-center'>{signup}</h2>
                    <form onSubmit={handleSubmit(handleSignUp)} className='space-y-3'>
                        <div>
                            <label>{name}</label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                            {errors.name && <span className='text-red-300'>Name is required</span>}
                        </div>
                        <div>
                            <label>{email}</label>
                            <input
                                type="email"
                                {...register("email", { required: 'Email is required' })}
                                className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                            {errors.email && <span className='text-red-300'>{errors.email.message}</span>}
                        </div>
                        <div>
                            <label>{password}</label>
                            <input type="password"
                                {...register("password",
                                    {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Password must be 6 characters long or more' },
                                        pattern: { value: /^[A-Za-z]/i, message: 'Password must be contain at least one uppercase or lowercase letter' }
                                    }
                                )}
                                className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                            {errors.password && <span className='text-red-300'>{errors.password.message}</span>}
                        </div>
                        <div>
                            <label>{confirm}</label>
                            <input type="password"
                                {...register("confirmPassword",
                                    {
                                        required: 'Please confirm your password',
                                        validate: (confirmPassword) => confirmPassword === watch('password') || 'Password does not match'
                                    }
                                )}
                                className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                            {errors.confirmPassword && <span className='text-red-300'>{errors.confirmPassword.message}</span>}
                        </div>
                        <h2 className='text-red-300'>{error}</h2>
                        <div className='w-3/4 mx-auto'>
                            <LoginButton>{signup}</LoginButton>
                        </div>
                    </form>
                    <p className='text-center'>{haveAnAccount} <Link to='/login' className='text-yellowDeep'>{pleaseLogin}</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;