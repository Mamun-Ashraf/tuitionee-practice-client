import React from 'react';
import NotFound from '../../assets/pageNotFound.jpg';
import useTitle from '../../Hooks/useTitle';

const PageNotFound = () => {

    useTitle('Page not found');
    return (
        <div className='h-screen flex justify-center items-center'>
            <img src={NotFound} alt="" />
        </div>
    );
};

export default PageNotFound;