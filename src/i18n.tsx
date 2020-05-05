/**
 * Documentation - https://react.i18next.com/.
 *
 * Translation files are already at '../public/locales/{lng}/translation.json'
 * which is the default for the xhr backend to load from.
 *
 * Code style and naming convention:
 * Translation key - values pairs format: lowercased for component/group or place they are used, uppercased for value -
 * e.g. pageTitle: {HOME_PAGE: 'Меценат - головна сторінка'}.
 * Key - value pairs that are widely used could be put without component/group - {'HELP': 'Допомогти'}.
 * In that case, please name key by the value meaning (HELP not MAIN_BUTTON_PLACEHOLDER).
 * And if value is used only once - put it into a component/group - {homeButton: {PLACEHOLDER: 'Допомогти'}}.
 * Also, please keep keys in alphabetical order to avoid merge conflicts.
 */

import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(detector)
  .use(backend) // used for lazy-loading
  .use(initReactI18next)
  .init({
    lng: 'uk',
    fallbackLng: 'uk', // use ukrainian if detected lng is not available

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      wait: true,
    },
  });

export default i18n;
