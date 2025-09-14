// Генератор лицензии QortexMQ
// Загружает шаблон и подставляет актуальные контактные данные

// Функция для загрузки шаблона лицензии
async function loadLicenseTemplate(language = 'ru') {
  try {
    // Определяем путь к шаблону в зависимости от текущей страницы
    const isEnglishPage = window.location.pathname.includes('/en/');
    const basePath = isEnglishPage ? '../' : '';
    
    const templatePath = language === 'en' ? 
      `${basePath}assets/templates/license_en.txt` : 
      `${basePath}assets/templates/license_ru.txt`;
    
    const response = await fetch(templatePath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Ошибка загрузки шаблона лицензии:', error);
    return null;
  }
}

// Функция для генерации лицензии с актуальными данными
function generateLicense(template, contacts) {
  if (!template || !contacts) {
    console.error('Отсутствует шаблон или контакты');
    return null;
  }
  
  // Заменяем плейсхолдеры на актуальные данные
  let license = template;
  
  // Заменяем email
  if (contacts.email) {
    license = license.replace(/\{\{EMAIL\}\}/g, contacts.email);
  }
  
  // Заменяем URL сайта
  if (typeof getSiteUrl === 'function') {
    const siteUrl = getSiteUrl();
    license = license.replace(/\{\{SITE_URL\}\}/g, siteUrl);
  }
  
  return license;
}

// Функция для скачивания лицензии
async function downloadLicense(language = 'ru') {
  try {
    // Загружаем шаблон
    const template = await loadLicenseTemplate(language);
    if (!template) {
      showToast('Ошибка загрузки шаблона лицензии');
      return;
    }
    
    // Получаем актуальные контакты
    const contacts = {
      email: getContact('email'),
      telegram: getContact('telegram'),
      github: getContact('github')
    };
    
    // Генерируем лицензию
    const licenseText = generateLicense(template, contacts);
    if (!licenseText) {
      showToast('Ошибка генерации лицензии');
      return;
    }
    
    // Создаем файл для скачивания
    const blob = new Blob([licenseText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // Создаем ссылку для скачивания
    const a = document.createElement('a');
    a.href = url;
    a.download = `QortexMQ_LICENSE_${language.toUpperCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    
    // Очищаем
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast(language === 'en' ? 'License downloaded' : 'Лицензия скачана');
    
  } catch (error) {
    console.error('Ошибка скачивания лицензии:', error);
    showToast('Ошибка скачивания лицензии');
  }
}

// Функция для показа уведомлений
function showToast(message) {
  // Удаляем существующие тосты
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  // Создаем новый тост
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // Показываем тост
  setTimeout(() => toast.classList.add('show'), 100);
  
  // Скрываем тост через 3 секунды
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
