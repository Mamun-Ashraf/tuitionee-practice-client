import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, MagnifyingGlassIcon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {

    const [isDark, setIsDark] = useState(false);
    const [isEnglish, setIsEnglish] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-[#213547] p-5 mb-12 relative'>
            <div className='flex justify-between items-center'>

                <Link to='/' className='text-xl md:text-3xl font-bold text-white'>Tuitionee</Link>

                <div className='flex items-center gap-4'>
                    <div className={`${isOpen ? 'flex flex-col md:flex-row absolute md:static left-0.5 -bottom-44 bg-[#213547] md:bg-inherit gap-2 px-5 py-3 transition duration-700 ease-in delay-100' : 'absolute md:static -left-96'} md:flex items-center md:gap-4 text-md font-medium text-white`}>
                        <button onClick={() => setIsEnglish(!isEnglish)} className='focus:outline-none'>
                            {
                                isEnglish ? <span>বাংলা</span> : <span>ENG</span>
                            }
                        </button>
                        <button onClick={() => setIsDark(!isDark)} className='h-5 w-5 focus:outline-none'>
                            {
                                isDark ? <SunIcon></SunIcon> : <MoonIcon></MoonIcon>
                            }
                        </button>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "text-yellow-200" : ""}>
                            About Us
                        </NavLink>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? "text-yellow-200" : ""}>
                            Blog
                        </NavLink>
                        <NavLink to='/login' className={({ isActive }) => isActive ? "text-yellow-200" : ""}>
                            Login
                        </NavLink>
                    </div>
                    <div className='flex items-center gap-8 md:gap-0'>
                        <button className="text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-full text-md md:text-lg px-4 py-1.5 text-center">Post Your Leaflet</button>
                        <button onClick={() => setIsOpen(!isOpen)} className='h-6 w-6 focus:outline-none text-white md:hidden'>
                            {
                                isOpen ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                            }
                        </button>
                    </div>
                </div>

            </div>

            <div className="flex justify-between items-center bg-white rounded-full w-3/4 md:w-1/2 mx-auto mt-5 px-6 py-3">
                <input type="search" placeholder='Find your Tutor/Student' className='flex-1 outline-none placeholder-yellow-500 bg-inherit text-yellow-500' />
                <button>
                    <MagnifyingGlassIcon className='h-4 md:h-7 w-4 md:w-7 text-yellow-500' />
                </button>
            </div>

        </nav>
    );
};

export default Header;