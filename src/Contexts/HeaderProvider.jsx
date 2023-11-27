import React, { createContext, useContext, useState } from 'react';
import enTranslations from '../Language/english.json';
import bnTranslations from '../Language/bangla.json';

const HeaderContaxt = createContext();
export const HeaderProvider = ({ children }) => {

    // theme state
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    // language state
    const [isEnglish, setIsEnglish] = useState(true);
    const translations = isEnglish ? enTranslations : bnTranslations;
    const toggleLanguage = () => setIsEnglish(!isEnglish);

    const headerInfo = {
        // theme
        darkMode,
        toggleDarkMode,
        // language
        isEnglish,
        translations,
        toggleLanguage
    }
    return (
        <HeaderContaxt.Provider value={headerInfo}>
            {children}
        </HeaderContaxt.Provider>
    );
};

export const useHeader = () => useContext(HeaderContaxt);