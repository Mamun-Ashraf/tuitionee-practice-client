import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHeader } from '../../Contexts/HeaderProvider';
import LoginButton from '../../Components/GenericButton/LoginButton';
import useTitle from '../../Hooks/useTitle';
import FindLocation from '../../Components/FindLocation/FindLocation';

const AdmissionLeaflet = () => {

    useTitle('Admission/Hiring');

    const { darkMode, translations } = useHeader();
    const { heading, description, term, termLink, postLeaflet } = translations.leafletHouseTuition;
    const { institutesIntro, instituteName, area, circularDetails, describe } = translations.circularLeaflet;
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
                        <h2 className='text-center font-semibold text-lg underline'>{institutesIntro}</h2>
                        <div>
                            <label className='font-bold'>{instituteName} :</label>
                            <input type="text" {...register('institute', { required: 'Institution name is required' })} className='p-2 block sm:ms-16 focus:outline-none text-darkColor rounded'></input>
                            {errors.institute && <p className='text-red-300'>{errors.institute.message}</p>}
                        </div>
                        <div>
                            <FindLocation>
                                <input type="text" title={area} placeholder={area} {...register('location', { required: 'Location of institution is required' })} className='p-2 focus:outline-none text-darkColor rounded'></input>
                                {errors.location && <p className='text-red-300'>{errors.location.message}</p>}
                            </FindLocation>
                        </div>
                    </div>

                    <div className='sm:w-11/12 md:w-1/2 mx-auto bg-base-100 shadow-md shadow-darkColor dark:shadow-grayBody p-5 rounded space-y-2'>
                        <h2 className='text-center font-semibold text-lg underline'>{circularDetails}</h2>

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

export default AdmissionLeaflet;