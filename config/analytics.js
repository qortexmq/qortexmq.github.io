// Конфигурация аналитики QortexMQ
// Этот файл можно легко редактировать для изменения ID аналитики

const ANALYTICS = {
  // Google Analytics
  google: {
    id: "GTM-K3P829D5", // Замените на ваш Google Analytics ID
    enabled: true
  },
  
  // Yandex.Metrika
  yandex: {
    id: "104436671", // ID Яндекс.Метрики
    enabled: true
  }
};

// Экспорт в глобальную область видимости для проверок validator.js
window.ANALYTICS = ANALYTICS;

// Функция для получения ID Google Analytics
function getGoogleAnalyticsId() {
  return ANALYTICS.google.enabled ? ANALYTICS.google.id : null;
}

// Функция для получения ID Yandex.Metrika
function getYandexMetrikaId() {
  return ANALYTICS.yandex.enabled ? ANALYTICS.yandex.id : null;
}

// Функция для проверки, включена ли аналитика
function isAnalyticsEnabled(provider) {
  return ANALYTICS[provider]?.enabled || false;
}



