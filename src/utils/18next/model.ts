import enTranslation from './locales/en.json';
import idTranslation from './locales/id.json';

const locales = ['en', 'id'] as const
type languages = typeof locales[number];

const resources = {
  en: {
    translation: enTranslation
  },
  id: {
    translation: idTranslation
  }
}

export type { languages }
export { resources }