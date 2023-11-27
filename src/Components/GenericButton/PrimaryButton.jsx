import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className='w-full font-medium p-2 rounded-full text-white bg-blue-400' type="submit">{children}</button>
        </div>
    );
};

export default PrimaryButton;