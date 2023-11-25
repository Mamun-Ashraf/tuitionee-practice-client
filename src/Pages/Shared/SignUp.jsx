import React from 'react';
import { Link } from 'react-router-dom';
import security from '../../assets/security.jpg';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../../Contexts/ThemeProvider';
import { useLanguage } from '../../Contexts/LanguageProvider';

const SignUp = () => {

    const { darkMode } = useTheme();
    const { translations } = useLanguage();
    const { signup, name, emailPhone, password, confirm, haveAnAccount, pleaseLogin, or, withGoogle, withFacebook, } = translations.loginSignup;
    return (
        <div className='w-5/6 md:w-2/3 mx-auto md:flex md:gap-5 items-center'>
            <div className='md:w-1/2 hidden md:block'>
                <img src={security} alt='' />
            </div>
            <div className='h-[700px] md:w-1/2 flex justify-center items-center'>
                <div className={`md:w-96 p-5 md:p-7 rounded ${darkMode ? 'dark' : 'bg-green-600 text-white'}`}>
                    <h2 className='text-xl text-center'>{signup}</h2>
                    <form>
                        <div className="mb-3">
                            <label>{name}</label>
                            <input type="text" className="w-full p-2 rounded focus:outline-0" />
                        </div>
                        <div className="mb-3">
                            <label>{emailPhone}</label>
                            <input type="email" className="w-full p-2 rounded focus:outline-0" />
                        </div>
                        <div className="mb-3">
                            <label>{password}</label>
                            <input type="password" className="w-full p-2 rounded focus:outline-0" />
                        </div>
                        <div className="mb-3">
                            <label>{confirm}</label>
                            <input type="password" className="w-full p-2 rounded focus:outline-0" />
                        </div>
                        <div className='w-3/4 mx-auto'>
                            <button className='w-full font-medium p-2 rounded-full text-fuchsia-600 bg-white hover:bg-green-200' type="submit">{signup}</button>
                        </div>
                    </form>
                    <p className='text-center'>{haveAnAccount} <Link to='/login' className='text-fuchsia-300'>{pleaseLogin}</Link></p>
                    <div className="text-center my-5 border-b-2 border-[#213547]">{or}</div>
                    <button className='w-full font-medium bg-white hover:bg-green-200 p-2 rounded-full text-fuchsia-600 mb-3 block'>
                        <FontAwesomeIcon icon={faGoogle} className='mr-3' />
                        {withGoogle}
                    </button>
                    <button className='w-full font-medium bg-white hover:bg-green-200 p-2 rounded-full text-fuchsia-600 block'>
                        <FontAwesomeIcon icon={faFacebook} className='mr-3' />
                        {withFacebook}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;