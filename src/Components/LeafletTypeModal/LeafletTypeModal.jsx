import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useHeader } from '../../Contexts/HeaderProvider';

const LeafletTypeModal = ({ isModalOpen, closeModal }) => {

    const { translations } = useHeader();
    const { title, btn1, btn2, btn3, btn4 } = translations.leafletType;

    return (
        <div className={`w-72 my-12 p-5 bg-green-50 rounded absolute top-8 right-5 ${isModalOpen ? 'block' : 'hidden'}`}>
            <h2 className='font-bold text-center mb-8'>{title}</h2>
            <div onClick={closeModal}>
                <div className='flex items-center justify-around text-fuchsia-600 bg-base-100 rounded-full shadow-lg shadow-[#213547] hover:shadow-fuchsia-600 mb-5 p-3'>
                    <button className="font-semibold text-lg">{btn1}</button>
                    <ChevronRightIcon className='h-6 w-6'></ChevronRightIcon>
                </div>
                <div className='flex items-center justify-around text-fuchsia-600 bg-base-100 rounded-full shadow-lg shadow-[#213547] hover:shadow-fuchsia-600 mb-5 p-3'>
                    <button className="font-semibold text-lg">{btn2}</button>
                    <ChevronRightIcon className='h-6 w-6'></ChevronRightIcon>
                </div>
                <div className='flex items-center justify-around text-fuchsia-600 bg-base-100 rounded-full shadow-lg shadow-[#213547] hover:shadow-fuchsia-600 mb-5 p-3'>
                    <button className="font-semibold text-lg">{btn3}</button>
                    <ChevronRightIcon className='h-6 w-6'></ChevronRightIcon>
                </div>
                <div className='flex items-center justify-around text-fuchsia-600 bg-base-100 rounded-full shadow-lg shadow-[#213547] hover:shadow-fuchsia-600 p-3'>
                    <button className="font-semibold text-lg">{btn4}</button>
                    <ChevronRightIcon className='h-6 w-6'></ChevronRightIcon>
                </div>
            </div>
        </div>
    );
};

export default LeafletTypeModal;