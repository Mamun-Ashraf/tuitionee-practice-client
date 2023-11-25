import React from 'react';
import NotFound from '../../assets/pageNotFound.jpg';

const PageNotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img src={NotFound} alt="" />
        </div>
    );
};

export default PageNotFound;