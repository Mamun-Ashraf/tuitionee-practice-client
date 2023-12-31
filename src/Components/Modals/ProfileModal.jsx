import React from 'react';
import { useHeader } from '../../Contexts/HeaderProvider';
import { useAuth } from '../../Contexts/AuthProvider';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import LeafletType from '../GenericButton/LeafletType';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const ProfileModal = ({ isProfileModalOpen, closeProfileModal }) => {

    const { translations } = useHeader();
    const { title, btnMyLeaflet, btnLogout } = translations.leafletType;
    const { user, logOut } = useAuth();

    return (
        <div className={`w-44 md:w-52 p-5 text-blueFoot bg-grayBody rounded absolute right-28 top-24 ${user && isProfileModalOpen ? 'block' : 'hidden'}`}>
            {
                user?.photoURL ?
                    <img src={user.photoURL} className='w-12 h-12 rounded-full mx-auto' alt="" />
                    : <UserCircleIcon className='h-12 w-12 mx-auto'></UserCircleIcon>
            }
            <h2 className='text-center text-lg font-bold mb-5'>{user?.displayName}</h2>
            <div onClick={closeProfileModal}>
                <LeafletType to='/myLeaflet'>{btnMyLeaflet}</LeafletType>
                <div onClick={logOut} className='flex items-center justify-around rounded-full shadow-lg shadow-darkColor transform hover:scale-105 duration-500 mb-3 p-2'>
                    <button className='font-semibold text-md text-red-300'>{btnLogout}</button>
                    <ArrowRightOnRectangleIcon className='h-6 w-6 text-red-300'></ArrowRightOnRectangleIcon>
                </div>
            </div>
            <button onClick={closeProfileModal} className='bg-red-400 text-white px-2 rounded-full text-lg font-medium absolute -top-5 -right-5'>X</button>
        </div>
    );
};

export default ProfileModal;