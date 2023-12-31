import React from 'react';
import { useHeader } from '../../Contexts/HeaderProvider';
import LeafletType from '../GenericButton/LeafletType';

const LeafletTypeModal = ({ isModalOpen, closeModal }) => {

    const { translations } = useHeader();
    const { title, btnTuition, btnTutor, btnAdmission, btnHiring } = translations.leafletType;

    return (
        <div className={`w-72 p-5 text-blueFoot bg-grayBody rounded absolute right-6 top-24 ${isModalOpen ? 'block' : 'hidden'}`}>
            <h2 className='font-bold text-center text-blueFoot mb-8'>{title}</h2>
            <div onClick={closeModal}>
                <LeafletType to='/tuition'>{btnTuition}</LeafletType>
                <LeafletType to='/tutor'>{btnTutor}</LeafletType>
                <LeafletType to='/circular'>{btnAdmission}</LeafletType>
                <LeafletType to='/circular'>{btnHiring}</LeafletType>
            </div>
            <button onClick={closeModal} className='bg-red-400 text-white px-2 rounded-full text-lg font-medium absolute -top-5 -right-5'>X</button>
        </div>
    );
};

export default LeafletTypeModal;