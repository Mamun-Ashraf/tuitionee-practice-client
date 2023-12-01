import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LoginButton from '../../Components/GenericButton/LoginButton';
import { useHeader } from '../../Contexts/HeaderProvider';

const HouseTuition = () => {

    const { darkMode, translations } = useHeader();
    const { heading, aboutTutor, address, division, district, upazila, area, status, student, subject, qualification, institute, gender, maleFemale, tutorsDemand, description, describe, salary, negotiable, term, termLink, postLeaflet } = translations.leafletHouseTuition;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLeaflet = data => {

    }

    return (
        <div className={`w-5/6 mx-auto p-2 sm:p-7 rounded ${darkMode ? 'dark' : 'bg-grayBody text-blue-Foot'}`}>
            <h2 className='text-xl sm:text-2xl font-bold text-center text-blueFoot dark:text-grayBody mb-10'>{heading}</h2>
            <form onSubmit={handleSubmit(handleLeaflet)}>
                <div className='md:flex gap-6'>
                    <div className='sm:w-11/12 md:w-1/2 mx-auto bg-base-100 shadow-md shadow-darkColor dark:shadow-grayBody p-5 rounded space-y-2 mb-6 md:mb-0'>
                        <h2 className='text-center font-semibold text-lg underline'>{aboutTutor}</h2>
                        <div>
                            <label htmlFor="" className='font-bold'>{address} :</label>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 ms-16'>
                                <select name="" id="" className='p-2 focus:outline-none'>
                                    <option>{division}</option>
                                </select>
                                <select name="" id="" className='p-2 focus:outline-none'>
                                    <option>{district}</option>
                                </select>
                                <select name="" id="" className='p-2 focus:outline-none'>
                                    <option>{upazila}</option>
                                </select>
                                <input type="text" placeholder={area} className='p-2 focus:outline-none'></input>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='font-bold'>{status} :</label>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 ms-16'>
                                <select name="" id="" className='p-2 focus:outline-none'>
                                    <option>{student}</option>
                                </select>
                                <select name="" id="" className='p-2 focus:outline-none'>
                                    <option>{subject}</option>
                                </select>
                                <select name="" id="" className='p-2 focus:outline-none'>
                                    <option>{qualification}</option>
                                </select>
                                <input type="text" placeholder={institute} className='p-2 focus:outline-none'></input>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='font-bold'>{gender} :</label>
                            <select name="" id="" className='p-2 block ms-16 focus:outline-none'>
                                <option>{maleFemale}</option>
                            </select>
                        </div>
                    </div>

                    <div className='sm:w-11/12 md:w-1/2 mx-auto bg-base-100 shadow-md shadow-darkColor dark:shadow-grayBody p-5 rounded space-y-2'>
                        <h2 className='text-center font-semibold text-lg underline'>{tutorsDemand}</h2>
                        <div>
                            <label htmlFor="" className='font-bold'>{description} :</label>
                            <textarea name="" id="" cols="30" rows="10" className='p-2 block sm:ms-16 focus:outline-none' placeholder={describe}></textarea>
                        </div>
                        <div>
                            <label htmlFor="" className='font-bold'>{salary} :</label>
                            <input type="number" name="" id="" className='p-2 block sm:ms-16 focus:outline-none'></input>
                        </div>
                        <div className="flex items-center my-5">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded" />
                            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium">{negotiable}</label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center my-5">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blueFoot bg-gray-100 border-gray-300 rounded" />
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium">{term} <Link to='/terms' className='text-yellowBtn'>{termLink}</Link></label>
                </div>
                <div className='w-52 mx-auto'>
                    <LoginButton>{postLeaflet}</LoginButton>
                </div>
            </form>
        </div>
    );
};

export default HouseTuition;