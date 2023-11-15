import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                logout: 'Logout'
            }
        },
        fr: {
            translation: {
                logout: 'Déconnexion'
            }
        },
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Langue de secours
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;