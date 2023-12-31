import React from 'react';
import useTitle from '../../Hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    useTitle('Home');

    const users = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl font-bold text-blueBody'>Discover your <span className='text-yellowBtn'>Ideal Tutor/Pupil</span></h1>
            <p>Users: {users.length}</p>
        </div>
    );
};

export default Home;