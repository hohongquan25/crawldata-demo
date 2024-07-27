// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import viTranslations from './locales/vi/translation.json';

// Đọc ngôn ngữ từ localStorage nếu có, ngược lại sử dụng ngôn ngữ mặc định
const savedLanguage = localStorage.getItem('i18nextLng') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations
    },
    vi: {
      translation: viTranslations
    }
  },
  lng: savedLanguage, // Ngôn ngữ được lưu trữ
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  // Lưu trữ ngôn ngữ khi thay đổi
  detection: {
    order: ['localStorage'],
    caches: ['localStorage']
  }
});

// Lưu ngôn ngữ vào localStorage khi ngôn ngữ thay đổi
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n;
