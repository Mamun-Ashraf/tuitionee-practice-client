import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, MagnifyingGlassIcon, MoonIcon, SunIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import LeafletTypeModal from '../../Components/Modals/LeafletTypeModal';
import { useHeader } from '../../Contexts/HeaderProvider';
import PrimaryButton from '../../Components/GenericButton/PrimaryButton';
import ActiveLink from '../../Components/GenericButton/ActiveLink';
import { useAuth } from '../../Contexts/AuthProvider';
import ProfileModal from '../../Components/Modals/ProfileModal';

const Header = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const openProfileModal = () => setIsProfileModalOpen(true);
    const closeProfileModal = () => setIsProfileModalOpen(false);

    const [isNavOpen, setIsNavOpen] = useState(false);
    const { darkMode, toggleDarkMode, translations, toggleLanguage } = useHeader();

    const { language, about, blog, login, postLeaflet, searchBox } = translations.header;

    const { user } = useAuth();

    return (
        <header className='relative mb-10'>
            <nav className={`p-5 ${darkMode ? 'dark' : 'light'}`}>
                <div className='flex justify-between items-center'>

                    <Link to='/' className='text-xl md:text-3xl font-bold'>Tuitionee</Link>

                    <div className='flex items-center gap-4'>
                        <div className={`${isNavOpen ? 'flex flex-col md:flex absolute md:static left-0.5 -bottom-56 bg-blueHead dark:bg-darkColor gap-2 px-5 py-3 transition duration-700 ease-in delay-100' : 'absolute md:static -top-96'} md:flex items-center md:gap-4 text-md font-medium`}>
                            <ActiveLink to='/about'>{about}</ActiveLink>
                            <ActiveLink to='/blog'>{blog}</ActiveLink>
                            <ActiveLink to='/login'>{login}</ActiveLink>
                            <button onClick={toggleLanguage} className='hover:text-yellowBtn focus:outline-0 '>
                                {language}
                            </button>
                            <button onClick={toggleDarkMode} className='h-5 w-5 hover:text-yellowBtn focus:outline-0 '>
                                {
                                    darkMode ? <SunIcon></SunIcon> : <MoonIcon></MoonIcon>
                                }
                            </button>
                            <button onClick={openProfileModal} className='h-6 w-6 hover:text-yellowBtn focus:outline-0 '>
                                {
                                    user?.photoURL ?
                                        <img src={user.photoURL} className='w-6 h-6 rounded-full' alt="" />
                                        : <UserCircleIcon></UserCircleIcon>
                                }
                            </button>
                        </div>
                        <div className='flex items-center'>
                            <PrimaryButton openModal={openModal}>{postLeaflet}</PrimaryButton>
                            <button onClick={() => setIsNavOpen(!isNavOpen)} className='h-6 w-6 focus:outline-none md:hidden'>
                                {
                                    isNavOpen ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                                }
                            </button>
                        </div>
                    </div>

                </div>

                <div className="flex justify-between items-center bg-white rounded-full w-5/6 md:w-1/2 mx-auto mt-5 px-6 py-3">
                    <input type="search" placeholder={searchBox} className='flex-1 outline-none placeholder-blueFoot bg-inherit text-blueFoot' />
                    <button>
                        <MagnifyingGlassIcon className='h-4 md:h-7 w-4 md:w-7 text-blueFoot hover:text-blueCommon' />
                    </button>
                </div>
            </nav>
            <LeafletTypeModal isModalOpen={isModalOpen} closeModal={closeModal}></LeafletTypeModal>
            <ProfileModal isProfileModalOpen={isProfileModalOpen} closeProfileModal={closeProfileModal}></ProfileModal>
        </header>
    );
};

export default Header;