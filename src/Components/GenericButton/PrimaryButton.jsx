import React from 'react';

const PrimaryButton = ({ children, openModal }) => {
    return (
        <div>
            <button onClick={openModal} className='bg-yellowBtn text-white rounded-full shadow-md shadow-black dark:shadow-white text-md md:text-lg font-medium text-center px-4 py-1.5 mr-8 md:mr-0 transform hover:scale-105 duration-500'>
                {children}
            </button>
        </div>
    );
};

export default PrimaryButton;