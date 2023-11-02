import React, { ReactNode, createContext, useContext, useState } from 'react';

// Define a default value for LanguageContext
const defaultLanguageContext = { lang: 'en', setLang: (newLang: string) => {} };
const LanguageContext = createContext(defaultLanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState('en'); // Default language is English (EN)

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
