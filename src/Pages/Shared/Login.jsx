import React from 'react';
import { Link } from 'react-router-dom';
import security from '../../assets/security.jpg';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHeader } from '../../Contexts/HeaderProvider';
import LoginButton from '../../Components/GenericButton/LoginButton';

const Login = () => {

    const { darkMode, translations } = useHeader();
    const { login, email, phone, password, forget, newUser, pleaseSignup, or, withGoogle, withFacebook } = translations.loginSignup;
    return (
        <div className='w-5/6 md:w-2/3 mx-auto md:flex md:gap-5 items-center'>
            <div className='md:w-1/2 hidden md:block'>
                <img src={security} alt='' />
            </div>
            <div className='md:w-1/2 flex justify-center items-center'>
                <div className={`md:w-96 p-5 md:p-7 rounded ${darkMode ? 'dark' : 'light'}`}>
                    <h2 className='text-xl text-center'>{login}</h2>
                    <form className='space-y-3'>
                        <div>
                            <label>{email}</label>
                            <input type="email" className="w-full p-2 rounded focus:outline-0 text-darkColor" />
                        </div>
                        <div>
                            <label>{phone}</label>
                            <input type="phone" className="w-full p-2 rounded focus:outline-0 text-darkColor" />
                        </div>
                        <div>
                            <label>{password}</label>
                            <input type="password" className="w-full p-2 rounded focus:outline-0 text-darkColor" />
                            <label>{forget}</label>
                        </div>
                        <div className='w-3/4 mx-auto'>
                            <LoginButton>{login}</LoginButton>
                        </div>
                    </form>
                    <p className='text-center'>{newUser} <Link to='/signup' className='text-yellowDeep'>{pleaseSignup}</Link></p>
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

export default Login;