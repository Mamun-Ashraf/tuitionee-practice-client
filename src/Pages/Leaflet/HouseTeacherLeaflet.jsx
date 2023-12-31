import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHeader } from '../../Contexts/HeaderProvider';
import LoginButton from '../../Components/GenericButton/LoginButton';
import useTitle from '../../Hooks/useTitle';
import FindLocation from '../../Components/FindLocation/FindLocation';

const HouseTeacherLeaflet = () => {

    useTitle('Tutor');

    const { darkMode, translations } = useHeader();
    const { heading, description, negotiable, term, termLink, postLeaflet } = translations.leafletHouseTuition;
    const { aboutStudent, area, offeredSalary, studentsRequirements, studentsInfo, medium, classes, subject, describe } = translations.leafletHouseTeacher;
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
                        <h2 className='text-center font-semibold text-lg underline'>{aboutStudent}</h2>
                        <div>
                            {/* <label className='font-bold'>{address} :</label>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 ms-16'> */}

                                {/* <select {...register('division')} className='p-2 focus:outline-none text-darkColor rounded'>
                                    <option>{division}</option>
                                </select>

                                <select {...register('district')} className='p-2 focus:outline-none text-darkColor rounded'>
                                    <option>{district}</option>
                                </select>

                                <select {...register('upazila')} className='p-2 focus:outline-none text-darkColor rounded'>
                                    <option>{upazila}</option>
                                </select> */}

                                <FindLocation>
                                    <input type="text" title={area} placeholder={area} {...register('location', { required: 'Location of residence is required' })} className='p-2 focus:outline-none text-darkColor rounded'></input>
                                    {errors.location && <p className='text-red-300'>{errors.location.message}</p>}
                                </FindLocation>

                                {/* <input type="text" title={area} placeholder={area} {...register('location',{required:'Location of residence is required'})} className='p-2 focus:outline-none text-darkColor rounded'></input>
                                {errors.location && <p className='text-red-300'>{errors.location.message}</p>} */}

                            {/* </div> */}
                        </div>
                        <div>
                            <label className='font-bold'>{offeredSalary} :</label>
                            <input type="number" {...register('salary', { required: 'Salary is required', min: { value: 1000, message: 'salary is not less than 1000' }, max: { value: 20000, message: 'Salary is not more than 20000' } })} className='p-2 block sm:ms-16 focus:outline-none text-darkColor rounded'></input>
                            {errors.salary && <p className='text-red-300'>{errors.salary.message}</p>}
                        </div>
                        <div className="flex items-center my-5">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded" />
                            <label className="ml-2 text-sm font-medium">{negotiable}</label>
                        </div>
                    </div>

                    <div className='sm:w-11/12 md:w-1/2 mx-auto bg-base-100 shadow-md shadow-darkColor dark:shadow-grayBody p-5 rounded space-y-2'>
                        <h2 className='text-center font-semibold text-lg underline'>{studentsRequirements}</h2>
                        <div>
                            <label className='font-bold'>{studentsInfo} :</label>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 ms-16'>
                                <select {...register('medium')} className='p-2 focus:outline-none text-darkColor rounded'>
                                    <option>{medium}</option>
                                </select>
                                <select {...register('class')} className='p-2 focus:outline-none text-darkColor rounded'>
                                    <option>{classes}</option>
                                </select>
                                <select {...register('subject')} className='p-2 focus:outline-none text-darkColor rounded'>
                                    <option>{subject}</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className='font-bold'>{description} :</label>
                            {errors.description && <p className='text-red-300'>{errors.description.message}</p>}
                            <textarea {...register('description', { required: 'Description is required', maxLength: { value: 200, message: 'Description is not more than 200 characters' } })} cols="40" rows="5" className='p-2 block sm:ms-16 focus:outline-none text-darkColor rounded' placeholder={describe}></textarea>
                        </div>
                    </div>
                </div>
                <div className="flex items-center my-5">
                    <input type="checkbox" onClick={handleTermAccepted} className="w-4 h-4 text-blueFoot bg-gray-100 border-gray-300 rounded" />
                    <label className="ml-2 text-sm font-medium">{term} <Link to='/terms' className='text-yellowBtn'>{termLink}</Link></label>
                </div>
                <div className='w-52 mx-auto'>
                    <LoginButton disabled={termAccepted ? false : true}>{postLeaflet}</LoginButton>
                </div>
            </form>
        </div>
    );
};

export default HouseTeacherLeaflet;