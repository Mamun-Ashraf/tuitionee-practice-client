import React from 'react';
import { Link } from 'react-router-dom';
import security from '../../assets/security.jpg';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHeader } from '../../Contexts/HeaderProvider';
import LoginButton from '../../Components/GenericButton/LoginButton';

const SignUp = () => {

    const { darkMode, translations } = useHeader();
    const { signup, name, email, phone, password, confirm, haveAnAccount, pleaseLogin, or, withGoogle, withFacebook, } = translations.loginSignup;
    return (
        <div className='w-5/6 md:w-2/3 mx-auto md:flex md:gap-5 items-center'>
            <div className='md:w-1/2 hidden md:block'>
                <img src={security} alt='' />
            </div>
            <div className='md:w-1/2 flex justify-center items-center'>
                <div className={`md:w-96 p-5 md:p-7 rounded ${darkMode ? 'dark' : 'bg-blueHead text-white'}`}>
                    <h2 className='text-xl text-center'>{signup}</h2>
                    <form className='space-y-3'>
                        <div>
                            <label>{name}</label>
                            <input type="text" className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                        </div>
                        <div>
                            <label>{email}</label>
                            <input type="email" className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                        </div>
                        <div>
                            <label>{phone}</label>
                            <input type="phone" className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                        </div>
                        <div>
                            <label>{password}</label>
                            <input type="password" className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
                        </div>
                        <div>
                            <label>{confirm}</label>
                            <input type="password" className="w-full p-2 rounded focus:outline-0 text-blueFoot" />
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