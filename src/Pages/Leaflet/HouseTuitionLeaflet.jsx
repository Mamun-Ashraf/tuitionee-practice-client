import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LoginButton from '../../Components/GenericButton/LoginButton';
import { useHeader } from '../../Contexts/HeaderProvider';
import useTitle from '../../Hooks/useTitle';
import FindLocation from '../../Components/FindLocation/FindLocation';

const HouseTuition = () => {

    useTitle('House tuition');

    const { darkMode, translations } = useHeader();
    const { heading, aboutTutor, address, division, district, upazila, area, status, student, subject, qualification, institute, gender, maleFemale, tutorsDemand, description, describe, salary, negotiable, term, termLink, postLeaflet } = translations.leafletHouseTuition;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [termAccepted, setTermAccepted] = useState(false);

    const handleTermAccepted = () => setTermAccepted(!termAccepted);

    const handleLeaflet = data => {
        console.log(data);
    }

    return (
        <div className={`w-5/6 mx-auto p-2 sm:p-7 rounded ${darkMode ? 'dark' : 'bg-grayBody text-blue-Foot'}`}>
            <h2 className='text-xl sm:text-2xl font-bold text-center text-yellowDeep dark:text-grayBody w-2/3 mx-auto mb-10'>{heading}</h2>
            <form onSubmit={handleSubmit(handleLeaflet)}>
                <div className='md:flex gap-6'>
                    <div className='sm:w-11/12 md:w-1/2 mx-auto bg-base-100 shadow-md shadow-darkColor dark:shadow-grayBody p-5 rounded space-y-2 mb-6 md:mb-0'>
                        <h2 className='text-center font-semibold text-lg underline'>{aboutTutor}</h2>
                        <div>
                            <FindLocation>
                                <input title={area} type="text" placeholder={area} {...register('location')} className='p-2 focus:outline-none text-darkColor rounded'></input>

                                <input type="tel" placeholder='Your phone number' {...register('phone', { required: 'Phone number is required', pattern: { value: /^[0-9]{11}$/i, message: 'Phone number must be 11 charecter long' } })} className='p-2 focus:outline-none text-darkColor rounded'></input>
                                {errors.phone && <p className='text-red-300'>{errors.message}</p>}
                            </FindLocation>

                        </div>
                        <div>
                            <label className='font-bold'>{status} :</label>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 ms-16'>

                                <select {...register('status')} className='p-2 focus:outline-none text-darkColor rounded'>
                                    <option>Student</option>
                                    <option>Teacher</option>
                                    <option>Other</option>
                                </select>

                                <select title={subject} {...register('subject')} className='p-2 focus:outline-none text-darkColor rounded'>
                                    <option>{subject}</option>
                                </select>

                                <select {...register('qualification')} className='p-2 focus:outline-none text-darkColor rounded'>
                                    <option>{qualification}</option>
                                </select>

                                <input type="text" title={institute} placeholder={institute} {...register('institute', { required: 'Institute name is required' })} className='p-2 focus:outline-none text-darkColor rounded'></input>
                                {errors.institute && <p className='text-red-300'>{errors.institute.message}</p>}

                            </div>
                        </div>
                        <div>
                            <label className='font-bold'>{gender} :</label>

                            <select {...register('gender')} className='p-2 block ms-16 focus:outline-none text-darkColor rounded'>
                                <option>Male</option>
                                <option>Female</option>
                            </select>

                        </div>
                    </div>

                    <div className='sm:w-11/12 md:w-1/2 mx-auto bg-base-100 shadow-md shadow-darkColor dark:shadow-grayBody p-5 rounded space-y-2'>
                        <h2 className='text-center font-semibold text-lg underline'>{tutorsDemand}</h2>
                        <div>
                            <label className='font-bold'>{description} :</label>
                            {errors.description && <p className='text-red-300'>{errors.description?.message}</p>}
                            <textarea {...register('description', { required: 'Description is required', maxLength: 200 })} cols="40" rows="5" className='p-2 block sm:ms-16 focus:outline-none text-darkColor rounded' placeholder={describe}></textarea>

                        </div>
                        <div>
                            <label className='font-bold'>{salary} :</label>
                            {errors.salary && <p className='text-red-300'>{errors.salary?.message}</p>}
                            <input type="number" {...register('salary', { required: 'Expected salary is required', min: { value: 1000, message: 'Salary not less than 1000' }, max: { value: 20000, message: 'Salary not more than 20000' } })} className='p-2 block sm:ms-16 focus:outline-none text-darkColor rounded'></input>
                        </div>
                        <div className="flex items-center my-5">
                            <input type="checkbox" {...register('negotiation')} className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded" />
                            <label className="ml-2 text-sm font-medium">{negotiable}</label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center my-5">
                    <input type="checkbox" onClick={handleTermAccepted} {...register('termAccepted')} className="w-4 h-4 text-blueFoot bg-gray-100 border-gray-300 rounded" />
                    <label className="ml-2 text-sm font-medium">{term} <Link to='/terms' className='text-yellowBtn'>{termLink}</Link></label>
                </div>
                <div className='w-52 mx-auto'>
                    <LoginButton disabled={termAccepted ? false : true}>{postLeaflet}</LoginButton>
                </div>
            </form>
        </div>
    );
};

export default HouseTuition;