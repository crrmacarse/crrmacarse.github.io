import i18n from 'i18next';
import BrowserLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json'
import tl from './locales/tl.json'

const options = {
    debug: process.env.NODE_ENV !== 'production',
    fallbackLng: 'en',
    resources: {
        en,
        tl,
      },
}

i18n
    .use(BrowserLanguageDetector)
    .use(initReactI18next)
    .init(options);

export default i18n;
