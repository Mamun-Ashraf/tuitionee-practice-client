import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LoginButton from '../../Components/GenericButton/LoginButton';
import { useHeader } from '../../Contexts/HeaderProvider';

const HouseTuition = () => {

    const { darkMode } = useHeader();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLeaflet = data => {

    }

    return (
        <div className={`w-5/6 mx-auto p-7 rounded ${darkMode ? 'dark' : 'bg-grayBody text-blue-Foot'}`}>
            <h2 className='text-2xl font-bold text-center text-blueFoot dark:text-grayBody mb-8'>Please input details about your Leaflet</h2>
            <form onSubmit={handleSubmit(handleLeaflet)}>
                <div className='md:flex space-y-6 md:space-x-6 md:space-y-0'>
                    <div className='w-11/12 mx-auto md:w-1/2 bg-base-100 shadow-md shadow-darkColor dark:shadow-grayBody p-5 rounded space-y-2'>
                        <h2 className='text-center font-semibold text-lg'>Your Demand</h2>
                        <div className="w-full">
                            <label>Location</label>
                            <input type="text" {...register("location",
                                {
                                    required: "Location is required"
                                })}
                                className="w-full p-3 rounded focus:outline-none" placeholder='Location/Area, you want to teach' />
                            {errors.location && <p className='text-red-500' role="alert">{errors.location?.message}</p>}
                        </div>
                        <div className="w-full">
                            <label>Class</label>
                            <input type="text" {...register("class",
                                {
                                    required: "Class is required"
                                })}
                                className="w-full p-3 rounded focus:outline-none" placeholder="Which class's student you want to teach" />
                            {errors.class && <p className='text-red-500' role="alert">{errors.class?.message}</p>}
                        </div>
                        <div className="w-full">
                            <label>Subject/Subjects</label>
                            <input type="text" {...register("subject",
                                {
                                    required: "Subject is required"
                                })}
                                className="w-full p-3 rounded focus:outline-none" placeholder="Subject/Subjects, you want to teach" />
                            {errors.subject && <p className='text-red-500' role="alert">{errors.subject?.message}</p>}
                        </div>
                        <div className="w-full">
                            <label>Expected Salary (tk/-)</label>
                            <input type="number" {...register("salary",
                                {
                                    required: "Salary is required"
                                })}
                                className="w-full p-3 rounded focus:outline-none" />
                            {errors.salary && <p className='text-red-500' role="alert">{errors.salary?.message}</p>}
                        </div>
                        <div className="flex items-center my-5">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded" />
                            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium">Negotiable</label>
                        </div>
                    </div>
                    <div className='w-11/12 mx-auto md:w-1/2 bg-base-100 shadow-md shadow-darkColor dark:shadow-grayBody p-5 rounded space-y-2'>
                        <h2 className='text-center font-semibold text-lg'>Personal details</h2>
                        <div className="w-full">
                            <label>Name</label>
                            <input type="text" {...register("name",
                                {
                                    required: "Name is required"
                                })}
                                className="w-full p-3 rounded focus:outline-none" />
                            {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                        </div>
                        <div className="w-full">
                            <label>Email</label>
                            <input type="email" {...register("email",
                                {
                                    required: "Email Address is required"
                                })}
                                className="w-full p-3 rounded focus:outline-none" />
                            {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="w-full mb-3">
                            <label>Phone Number</label>
                            <input type="phone" {...register("phoneNumber",
                                {
                                    required: "Phone number is required",
                                    // minLength: { value: 11, message: 'phone number must be at least 6 characters or longer' }
                                })}
                                className="w-full p-3 rounded focus:outline-none" />
                            {errors.phoneNumber && <p className='text-red-500' role="alert">{errors.phoneNumber?.message}</p>}
                        </div>
                        <div className="w-full">
                            <label>Status</label>
                            <input type="text" {...register("status",
                                {
                                    required: "Status is required"
                                })}
                                className="w-full p-3 rounded focus:outline-none" placeholder="Teacher's status (Teacher/Student/Other)" />
                            {errors.status && <p className='text-red-500' role="alert">{errors.status?.message}</p>}
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
        </div >
    );
};

export default HouseTuition;