import React from 'react';
import { twMerge } from 'tailwind-merge';

const LoginButton = ({ children, className, handleSignInWithGoogle, handleSignInWithFacebook }) => {
    return (
        <div>
            <button
                className={twMerge(`w-full font-medium p-2 rounded-full text-white dark:text-blueFoot bg-yellowDeep dark:bg-white shadow-md shadow-darkColor dark:shadow-yellowDeep transform hover:scale-105 duration-500 ${className}`)}
                type="submit"
                onClick={handleSignInWithGoogle || handleSignInWithFacebook}
            >
                {children}
            </button>
        </div>
    );
};

export default LoginButton;