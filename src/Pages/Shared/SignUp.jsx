import React from 'react';
import { Link } from 'react-router-dom';
import security from '../../assets/security.jpg';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHeader } from '../../Contexts/HeaderProvider';
import LoginButton from '../../Components/GenericButton/LoginButton';
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const { darkMode, translations } = useHeader();
    const { signup, name, email, phone, password, confirm, haveAnAccount, pleaseLogin, or, withGoogle, withFacebook, } = translations.loginSignup;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleSignUp = data => {
        console.log(data)
    };



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
                            <input type="text" {...register("name", { required: true })} className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                            {errors.name && <span className='text-red-300'>Name is required</span>}
                        </div>
                        <div>
                            <label>{email}</label>
                            <input type="email" {...register("email", { required: true })} className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                            {errors.email && <span className='text-red-300'>Email is required</span>}
                        </div>
                        <div>
                            <label>{phone}</label>
                            <input type="tel"
                                {...register("phone",
                                    {
                                        required: 'Phone Number is required',
                                        pattern: { value: /^[0-9]{11}$/, message: 'Invalid phone number format' }
                                    }
                                )}
                                className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                            {errors.phone && <span className='text-red-300'>{errors.phone.message}</span>}
                        </div>
                        <div>
                            <label>{password}</label>
                            <input type="password"
                                {...register("password",
                                    {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Password must be 6 characters long or more' },
                                        pattern: { value: /^[A-Za-z]+$/i, message: 'Password must be contain at least one uppercase or lowercase letter' }
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
                                        required: 'Confirm Password is required',
                                        validate: (value) => value === watch('password') || 'Password does not match'
                                    }
                                )}
                                className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                            {errors.confirmPassword && <span className='text-red-300'>{errors.confirmPassword.message}</span>}
                        </div>
                        <div className='w-3/4 mx-auto'>
                            <LoginButton>{signup}</LoginButton>
                        </div>
                    </form>
                    <p className='text-center'>{haveAnAccount} <Link to='/login' className='text-yellowDeep'>{pleaseLogin}</Link></p>
                    <div className="text-center my-5 border-b-2 border-white">{or}</div>
                    <LoginButton className='mb-3'>
                        <FontAwesomeIcon icon={faGoogle} className='mr-3' />
                        {withGoogle}
                    </LoginButton>
                    <LoginButton>
                        <FontAwesomeIcon icon={faFacebook} className='mr-3' />
                        {withFacebook}
                    </LoginButton>
                </div>
            </div>
        </div>
    );
};

export default SignUp;