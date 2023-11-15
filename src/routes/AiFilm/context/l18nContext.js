import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                logout: 'Logout',
                login: 'Signin'
            }
        },
        fr: {
            translation: {
                logout: 'Déconnexion',
                login: 'Se connecter'
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