// Простой словарь контактов QortexMQ
// Если значение null - блок не показывается

const CONTACTS = {
  email: "qortexmq@gmail.com",
  telegram: null,
  github: null
};

// Экспорт в глобальную область видимости для проверок validator.js
window.CONTACTS = CONTACTS;

// Функция для получения контакта
function getContact(key) {
  return CONTACTS[key] || null;
}

// Функция для проверки, нужно ли показывать блок
function shouldShowContact(key) {
  return CONTACTS[key] !== null && CONTACTS[key] !== undefined;
}

// Функция для получения отображаемого текста
function getContactText(key) {
  const value = CONTACTS[key];
  if (!value) return '';
  
  switch (key) {
    case 'telegram':
      return value.replace('https://t.me/', '@');
    case 'github':
      return value.replace('https://github.com/', 'github.com/');
    default:
      return value;
  }
}
