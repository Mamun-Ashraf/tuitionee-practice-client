import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const Header = () => {

    const [isDark, setIsDark] = useState(false);
    const [isEnglish, setIsEnglish] = useState(true);

    return (
        <nav className='bg-[#213547] p-5 mb-12'>
            <div className='flex justify-between items-center'>
                <Link to='/' className='text-3xl font-bold text-white'>Tuitionee</Link>
                <div className='flex items-center gap-4 text-md font-medium text-white'>
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
                    <Link to='/about'>About Us</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/login'>Login</Link>
                    <button className="text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded text-lg px-4 py-2 text-center">Post Your Leaflet</button>
                </div>
            </div>
            <div className="flex justify-between items-center bg-white rounded-full w-1/2 mx-auto mt-5 px-6 py-3">
                <input type="search" placeholder='Find Your Tutor/Student' className='flex-1 outline-none placeholder-yellow-500 text-md font-medium text-yellow-500' />
                <button>
                    <MagnifyingGlassIcon className='h-7 w-7 text-yellow-500' />
                </button>
            </div>
        </nav>
    );
};

export default Header;