import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
    return (
        <div>
            <button className='transform hover:scale-150 duration-500'>
                <Link to={to}>{children}</Link>
            </button>
        </div>
    );
};

export default LinkButton;