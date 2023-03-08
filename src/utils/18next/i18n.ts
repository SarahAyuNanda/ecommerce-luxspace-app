import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './model';

export default i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',    
    ns: ['translation'],
    defaultNS: 'translation',
    resources: resources,
    keySeparator: false
  })