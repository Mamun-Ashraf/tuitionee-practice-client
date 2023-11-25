import React, { Children } from 'react';

const PrimaryButton = () => {
    return (
        <div>
            <button className='w-full font-medium p-2 rounded-full text-white bg-blue-400' type="submit">{Children}</button>
        </div>
    );
};

export default PrimaryButton;