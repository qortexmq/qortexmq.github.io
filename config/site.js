// Основные настройки сайта QortexMQ
// Этот файл содержит все основные URL, ссылки и настройки сайта

const SITE_CONFIG = {
  // Основной домен сайта
  domain: "qortexmq.ru",
  
  // Полный URL сайта (с протоколом)
  baseUrl: "https://qortexmq.ru",
  
  // Настройки путей
  paths: {
    // Основные страницы
    home: "/",
    docs: "/docs.html",
    downloads: "/downloads.html", 
    license: "/license.html",
    
    // Английские страницы
    en: {
      home: "/en/",
      docs: "/en/docs.html",
      downloads: "/en/downloads.html",
      license: "/en/license.html"
    },
  },
  
  // Настройки SEO
  seo: {
    title: "QortexMQ - Лёгкий и быстрый брокер сообщений",
    description: "Проще, чем Kafka, и быстрее, чем ваш CI. Топики, приоритеты, ACK и веб‑интерфейс — всё из коробки.",
    keywords: "message broker, очередь сообщений, микросервисы, .NET, Kafka альтернатива",
    author: "Олег Трофимов",
    language: "ru"
  },
  
  // Настройки социальных сетей
  social: {
    twitter: null, // "@qortexmq",
    linkedin: null, // "https://linkedin.com/company/qortexmq",
    youtube: null // "https://youtube.com/@qortexmq"
  },
  
  // Настройки проекта
  project: {
    name: "QortexMQ",
    version: "1.0.0",
    author: "Олег Трофимов",
    year: "2025",
    description: "Лёгкий и быстрый брокер сообщений"
  }
};

// Экспорт в глобальную область видимости для проверок validator.js
window.SITE_CONFIG = SITE_CONFIG;

// Функции для получения настроек
function getSiteUrl(path = '') {
  return `${SITE_CONFIG.baseUrl}${path}`;
}

function getPageUrl(page, language = 'ru') {
  if (language === 'en') {
    return SITE_CONFIG.paths.en[page] || SITE_CONFIG.paths[page];
  }
  return SITE_CONFIG.paths[page] || '/';
}

function getExternalUrl(key) {
  return SITE_CONFIG.paths.external[key] || '#';
}

function getSeoValue(key) {
  return SITE_CONFIG.seo[key] || '';
}

function getProjectValue(key) {
  return SITE_CONFIG.project[key] || '';
}
