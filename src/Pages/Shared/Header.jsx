import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, MagnifyingGlassIcon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../Contexts/ThemeProvider';
import { useLanguage } from '../../Contexts/LanguageProvider';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { translations, toggleLanguage } = useLanguage();
    const { darkMode, toggleDarkMode } = useTheme();

    const { language, about, blog, login, postLeaflet, searchBox } = translations.header;

    return (
        <nav className={`p-5  relative ${darkMode ? 'dark' : 'bg-green-600 text-white'}`}>
            <div className='flex justify-between items-center'>

                <Link to='/' className='text-xl md:text-3xl font-bold'>Tuitionee</Link>

                <div className='flex items-center gap-4'>
                    <div className={`${isOpen ? 'flex flex-col md:flex absolute md:static right-0.5 -bottom-44 bg-slate-200 dark:bg-[#213547] md:bg-inherit gap-2 px-5 py-3 transition duration-700 ease-in delay-100' : 'absolute md:static -left-96'} md:flex items-center md:gap-4 text-md font-medium`}>
                        <button onClick={toggleLanguage}>
                            {language}
                        </button>
                        <button onClick={toggleDarkMode} className='h-5 w-5'>
                            {
                                darkMode ? <SunIcon></SunIcon> : <MoonIcon></MoonIcon>
                            }
                        </button>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-300" : ""}>
                            {about}
                        </NavLink>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? "text-blue-300" : ""}>
                            {blog}
                        </NavLink>
                        <NavLink to='/login' className={({ isActive }) => isActive ? "text-blue-300" : ""}>
                            {login}
                        </NavLink>
                    </div>
                    <div className='flex items-center'>
                        <button className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-full text-md md:text-lg px-4 py-1.5 text-center mr-8 md:mr-0">{postLeaflet}</button>
                        <button onClick={() => setIsOpen(!isOpen)} className='h-6 w-6 focus:outline-none md:hidden'>
                            {
                                isOpen ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                            }
                        </button>
                    </div>
                </div>

            </div>

            <div className="flex justify-between items-center bg-white rounded-full w-5/6 md:w-1/2 mx-auto mt-5 px-6 py-3">
                <input type="search" placeholder={searchBox} className='flex-1 outline-none placeholder-blue-400 bg-inherit text-blue-400' />
                <button>
                    <MagnifyingGlassIcon className='h-4 md:h-7 w-4 md:w-7 text-blue-300' />
                </button>
            </div>
        </nav>
    );
};

export default Header;