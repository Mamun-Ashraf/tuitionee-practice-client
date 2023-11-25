import React, { createContext, useContext, useState } from 'react';
import enTranslations from '../Language/english.json';
import bnTranslations from '../Language/bangla.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const [isEnglish, setIsEnglish] = useState(true);
    const translations = isEnglish ? enTranslations : bnTranslations;
    const toggleLanguage = () => setIsEnglish(!isEnglish);

    const languageInfo = {
        isEnglish,
        translations,
        toggleLanguage
    }

    return (
        <LanguageContext.Provider value={languageInfo}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);