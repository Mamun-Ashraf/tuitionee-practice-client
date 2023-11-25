import React from 'react';
import { Link } from 'react-router-dom';
import security from '../../assets/security.jpg';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../../Contexts/ThemeProvider';
import { useLanguage } from '../../Contexts/LanguageProvider';

const Login = () => {

    const { darkMode } = useTheme();
    const { translations } = useLanguage();
    const { login, emailPhone, password, forget, newUser, pleaseSignup, or, withGoogle, withFacebook } = translations.loginSignup;
    return (
        <div className='w-5/6 md:w-2/3 mx-auto md:flex md:gap-5 items-center'>
            <div className='md:w-1/2 hidden md:block'>
                <img src={security} alt='' />
            </div>
            <div className='h-[500px] md:h-[600px] md:w-1/2 flex justify-center items-center'>
                <div className={`md:w-96 p-5 md:p-7 rounded ${darkMode ? 'dark' : 'bg-green-600 text-white'}`}>
                    <h2 className='text-xl text-center'>{login}</h2>
                    <form>
                        <div className="mb-3">
                            <label>{emailPhone}</label>
                            <input type="email" className="w-full p-2 rounded focus:outline-0" />
                        </div>
                        <div className="mb-3">
                            <label>{password}</label>
                            <input type="password" className="w-full p-2 rounded focus:outline-0" />
                            <label>{forget}</label>
                        </div>
                        <div className='w-3/4 mx-auto'>
                            <button className='w-full font-medium p-2 rounded-full text-blue-500 bg-white' type="submit">{login}</button>
                        </div>
                    </form>
                    <p className='text-center'>{newUser} <Link to='/signup' className='text-blue-300'>{pleaseSignup}</Link></p>
                    <div className="text-center my-3 border-b border-[#213547]">{or}</div>
                    <button className='w-full font-medium p-2 rounded-full bg-white text-blue-500 mb-3 block'>
                        <FontAwesomeIcon icon={faGoogle} className='mr-3' />
                        {withGoogle}
                    </button>
                    <button className='w-full font-medium p-2 rounded-full bg-white text-blue-500 block'>
                        <FontAwesomeIcon icon={faFacebook} className='mr-3' />
                        {withFacebook}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;