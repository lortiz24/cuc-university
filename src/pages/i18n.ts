import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Spanish from '@/languages/Spanish.json'
import English from '@/languages/English.json'


i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: English
        },
        es: {
            translation: Spanish
        },
    }
});

export default i18n;