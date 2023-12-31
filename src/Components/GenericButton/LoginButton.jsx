import React from 'react';
import { twMerge } from 'tailwind-merge';

const LoginButton = ({ children, className, handleSignInWithGoogle, handleSignInWithFacebook, disabled }) => {
    return (
        <div>
            <button
                className={twMerge(`w-full font-medium p-2 rounded-full text-white dark:text-blueFoot bg-yellowDeep dark:bg-white shadow-md shadow-darkColor dark:shadow-yellowDeep transform hover:scale-105 duration-500 ${disabled && 'bg-base text-gray-300 dark:bg-base dark:text-gray-600 hover:scale-100'} ${className}`)}
                type="submit"
                onClick={handleSignInWithGoogle || handleSignInWithFacebook}
                disabled={disabled}
            >
                {children}
            </button>
        </div>
    );
};

export default LoginButton;