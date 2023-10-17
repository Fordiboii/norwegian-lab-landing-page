import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import englishTranslation from './translations/english/translation.json';
import norwegianTranslation from './translations/norwegian/translation.json';

const resources = {
  en: {
    translation: englishTranslation
  },
  no: {
    translation: norwegianTranslation
  }
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'no'
  });

export default i18next;