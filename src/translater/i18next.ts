import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Russ from './Russ.json';
import Eng from './Eng.json';

void i18n
	.use(initReactI18next)
	.init({
		resources: {
			ru: {translation: Russ},
			en: {translation: Eng},
		},
		detection: {
			order: ['localStorage', 'cookies'],
			caches: ['localStorage', 'cookies'],
		},
		fallbackLng: 'ru',
		interpolation: {escapeValue: false},
	});

export const changeLang = (lang: string) => {
	void i18n.changeLanguage(lang).then(r => r);
};
