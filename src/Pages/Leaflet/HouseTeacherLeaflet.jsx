import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const HouseTeacherLeaflet = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLeaflet = data => {

    }

    return (
        <div className='w-5/6 mx-auto p-7  bg-gray-50 rounded'>
            <h2 className='text-2xl font-bold text-center text-violet-700 mb-8'>Please fill in details about your Leaflet</h2>
            <form onSubmit={handleSubmit(handleLeaflet)}>
                <div className='flex gap-12'>
                    <div className='w-1/2 bg-gray-50 p-5 rounded'>
                        <h2 className='text-center font-semibold text-lg text-yellow-500'>Student's detail</h2>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Location</span></label>
                            <input type="text" {...register("location",
                                {
                                    required: "Location is required"
                                })}
                                className="input input-bordered w-full" placeholder="Location/Address of your residence." />
                            {errors.location && <p className='text-red-500' role="alert">{errors.location?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Class</span></label>
                            <input type="text" {...register("class",
                                {
                                    required: "Class is required"
                                })}
                                className="input input-bordered w-full" placeholder="Class, you are reading in." />
                            {errors.class && <p className='text-red-500' role="alert">{errors.class?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Subject/Subjects</span></label>
                            <input type="text" {...register("subject",
                                {
                                    required: "Subject is required"
                                })}
                                className="input input-bordered w-full pla" placeholder="Subject/Subjects, you want to learn." />
                            {errors.subject && <p className='text-red-500' role="alert">{errors.subject?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Institute</span></label>
                            <input type="text" {...register("institute",
                                {
                                    required: "Institute name is required"
                                })}
                                className="input input-bordered w-full" placeholder="Name of school/college, you are reading in." />
                            {errors.institute && <p className='text-red-500' role="alert">{errors.institute?.message}</p>}
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className='w-1/2 bg-gray-50 p-5 rounded'>
                        <h2 className='text-center font-semibold text-lg text-yellow-500'>Guardian's detail</h2>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Name</span></label>
                            <input type="text" {...register("name",
                                {
                                    required: "Name is required"
                                })}
                                className="input input-bordered w-full" />
                            {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Email</span></label>
                            <input type="email" {...register("email",
                                {
                                    required: "Email Address is required"
                                })}
                                className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full mb-3">
                            <label className="label"><span className="label-text font-semibold">Phone Number</span></label>
                            <input type="number" {...register("phoneNumber",
                                {
                                    required: "Phone number is required",
                                    // minLength: { value: 11, message: 'phone number must be at least 6 characters or longer' }
                                })}
                                className="input input-bordered w-full" />
                            {errors.phoneNumber && <p className='text-red-500' role="alert">{errors.phoneNumber?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Salary</span></label>
                            <input type="text" {...register("salary",
                                {
                                    required: "Salary is required"
                                })}
                                className="input input-bordered w-full" placeholder="Salary (tk/-), you offer" />
                            {errors.salary && <p className='text-red-500' role="alert">{errors.salary?.message}</p>}
                        </div>
                        <div className="flex items-center my-5">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium">Negotiable</label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center my-5">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium">I have read and accept the <Link to='/terms' className='text-violet-700'>terms and conditions</Link></label>
                </div>
                <div className='flex justify-center mt-5'>
                    <button className='btn bg-yellow-500 hover:bg-yellow-600 text-white w-1/3'>Post Leaflet</button>
                </div>
            </form>
        </div >
    );
};

export default HouseTeacherLeaflet;