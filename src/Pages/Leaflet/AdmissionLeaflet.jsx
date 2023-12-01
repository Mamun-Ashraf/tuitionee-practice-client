import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHeader } from '../../Contexts/HeaderProvider';
import LoginButton from '../../Components/GenericButton/LoginButton';

const AdmissionLeaflet = () => {

    const { darkMode } = useHeader();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLeaflet = data => {

    }

    return (
        <div className={`w-5/6 mx-auto p-2 sm:p-7 rounded ${darkMode ? 'dark' : 'bg-grayBody text-blue-Foot'}`}>
            <h2 className='text-xl sm:text-2xl font-bold text-center text-blueFoot dark:text-grayBody mb-10'>This information will assist you in reaching more people and receiving faster responses.</h2>
            <form onSubmit={handleSubmit(handleLeaflet)}>
                <div className='md:flex gap-6'>
                    <div className='sm:w-11/12 md:w-1/2 mx-auto bg-base-100 shadow-md shadow-darkColor dark:shadow-grayBody p-5 rounded space-y-2 mb-6 md:mb-0'>
                        <h2 className='text-center font-semibold text-lg underline'>Institutes Intro</h2>
                        <div>
                            <label htmlFor="" className='font-bold'>Institutes Name :</label>
                            <input type="number" name="" id="" className='p-2 block sm:ms-16 focus:outline-none'></input>
                        </div>
                        <div>
                            <label htmlFor="" className='font-bold'>Address :</label>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 ms-16'>
                                <select name="" id="" className='p-2 focus:outline-none'>
                                    <option>Division</option>
                                </select>
                                <select name="" id="" className='p-2 focus:outline-none'>
                                    <option>District</option>
                                </select>
                                <select name="" id="" className='p-2 focus:outline-none'>
                                    <option>Upazila</option>
                                </select>
                                <input type="text" placeholder='Your current location' className='p-2 focus:outline-none'></input>
                            </div>
                        </div>
                    </div>

                    <div className='sm:w-11/12 md:w-1/2 mx-auto bg-base-100 shadow-md shadow-darkColor dark:shadow-grayBody p-5 rounded space-y-2'>
                        <h2 className='text-center font-semibold text-lg underline'>Institutes Characteristics</h2>

                        <div>
                            <label htmlFor="" className='font-bold'>Description :</label>
                            <textarea name="" id="" cols="30" rows="10" className='p-2 block sm:ms-16 focus:outline-none' placeholder="Please mention here your circular"></textarea>
                        </div>
                    </div>
                </div>
                <div className="flex items-center my-5">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blueFoot bg-gray-100 border-gray-300 rounded" />
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium">I have read and accept the <Link to='/terms' className='text-yellowBtn'>terms and conditions</Link></label>
                </div>
                <div className='w-52 mx-auto'>
                    <LoginButton>Post Leaflet</LoginButton>
                </div>
            </form>
        </div>
    );
};

export default AdmissionLeaflet;