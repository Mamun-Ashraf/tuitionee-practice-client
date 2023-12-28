import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Home = () => {

    useTitle('Home');
    return (
        <div>
            <h1 className='text-4xl font-bold text-blueBody'>Discover your <span className='text-yellowBtn'>Ideal Tutor/Pupil</span></h1>
        </div>
    );
};

export default Home;