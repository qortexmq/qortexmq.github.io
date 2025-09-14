// Главный файл конфигурации QortexMQ
// Загружает все настройки сайта и предоставляет единый интерфейс

// Загружаем основные настройки сайта
// SITE_CONFIG, getSiteUrl, getPageUrl, getExternalUrl, getSeoValue, getProjectValue

// Загружаем настройки контактов
// CONTACTS, getContact, shouldShowContact, getContactText

// Загружаем настройки загрузок
// DOWNLOADS, getDownload, shouldShowDownload, getDownloadText

// Загружаем настройки аналитики
// ANALYTICS, getGoogleAnalyticsId, getYandexMetrikaId, isAnalyticsEnabled

// Функция для проверки загрузки всех конфигураций
function checkConfigs() {
  const requiredConfigs = [
    'SITE_CONFIG',
    'CONTACTS', 
    'DOWNLOADS',
    'ANALYTICS'
  ];
  
  const missing = requiredConfigs.filter(config => typeof window[config] === 'undefined');
  
  if (missing.length > 0) {
    console.warn('Отсутствуют конфигурации:', missing);
    return false;
  }
  
  return true;
}

// Функция для получения всех настроек в одном объекте
function getAllConfigs() {
  return {
    site: SITE_CONFIG,
    contacts: CONTACTS,
    downloads: DOWNLOADS,
    analytics: ANALYTICS
  };
}

// Функция для валидации конфигураций
function validateConfigs() {
  const errors = [];
  
  // Проверяем обязательные поля
  if (!SITE_CONFIG?.domain) {
    errors.push('Отсутствует домен сайта');
  }
  
  if (!CONTACTS?.email) {
    errors.push('Отсутствует email контакт');
  }
  
  // Проверяем, что в новой структуре DOWNLOADS есть хотя бы одна доступная ссылка
  try {
    const sections = typeof getDownloadSections === 'function' ? getDownloadSections() : Object.keys(DOWNLOADS || {});
    const hasAnyLink = sections.some((sectionKey) => {
      const meta = DOWNLOADS?.[sectionKey];
      const links = meta?.links || {};
      return Object.keys(links).some((k) => !!links[k]);
    });
    if (!hasAnyLink) {
      errors.push('Отсутствуют ссылки на загрузки');
    }
  } catch (e) {
    errors.push('Ошибка проверки DOWNLOADS');
  }
  
  if (errors.length > 0) {
    console.error('Ошибки в конфигурации:', errors);
    return false;
  }
  
  return true;
}

// Инициализация конфигураций
document.addEventListener('DOMContentLoaded', function() {
  if (checkConfigs()) {
    console.log('✅ Все конфигурации загружены');
    
    if (validateConfigs()) {
      console.log('✅ Конфигурации валидны');
    } else {
      console.error('❌ Ошибки в конфигурации');
    }
  } else {
    console.error('❌ Не все конфигурации загружены');
  }
});
