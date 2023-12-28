import React, { useEffect } from 'react';

const useTitle = title => {
    useEffect(() =>{
        document.title = `${title} - Tuitionee`
    },[title])
};

export default useTitle;