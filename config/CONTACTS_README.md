# Управление контактами и ссылками QortexMQ

Этот файл содержит инструкции по редактированию контактных данных и ссылок на скачивание на всех страницах сайта.

## 📁 Структура файлов

### `config/contacts.js`
Простой словарь контактов:
- `email` - email адрес
- `telegram` - ссылка на Telegram
- `github` - ссылка на GitHub

**Важно:** Если значение `null`, блок не показывается автоматически!

### `config/downloads.js`
Простой словарь ссылок на скачивание:
- `linux` - ссылка на Linux версию
- `windows` - ссылка на Windows версию
- `macos` - ссылка на macOS версию
- `nuget` - ссылка на NuGet пакет
- `docker` - ссылка на Docker образ
- `github` - ссылка на GitHub releases

**Важно:** Если значение `null`, блок не показывается автоматически!

### `config/analytics.js`
Конфигурация аналитики:
- `google.id` - ID Google Analytics
- `yandex.id` - ID Yandex.Metrika
- `google.enabled` - включить/выключить Google Analytics
- `yandex.enabled` - включить/выключить Yandex.Metrika

## ✏️ Как редактировать

### Контакты
Откройте `assets/js/contacts.js` и измените значения в объекте `CONTACTS`:

```javascript
const CONTACTS = {
  email: "ваш@email.com",              // Email адрес
  telegram: "https://t.me/username",   // Telegram ссылка
  github: "https://github.com/user"    // GitHub ссылка
};
```

**Чтобы скрыть блок:** установите значение `null`
```javascript
const CONTACTS = {
  email: "ваш@email.com",
  telegram: null,                       // Telegram блок не покажется
  github: "https://github.com/user"
};
```

### Ссылки на скачивание
Откройте `assets/js/downloads.js` и измените значения в объекте `DOWNLOADS`:

```javascript
const DOWNLOADS = {
  linux: "https://новый.url/файл.tar.gz",
  windows: "https://новый.url/файл.zip",
  macos: "https://новый.url/файл.tar.gz",
  nuget: "https://новый.url/пакет",
  docker: "https://новый.url/образ",
  github: "https://новый.url/releases"
};
```

**Чтобы скрыть блок:** установите значение `null`
```javascript
const DOWNLOADS = {
  linux: "https://новый.url/файл.tar.gz",
  windows: null,                       // Windows блок не покажется
  macos: "https://новый.url/файл.tar.gz"
};
```

## 🔄 Автоматическое обновление

После изменения файлов контакты и ссылки автоматически обновятся на всех страницах при следующей загрузке.

## 📧 Контактная форма

**Форма "Связаться с нами" убрана** - теперь пользователи связываются напрямую через:
- **Email**: клик по email адресу открывает почтовый клиент
- **Telegram**: переход в чат
- **GitHub**: переход на страницу проекта

## 📱 Поддерживаемые страницы

- `index.html` - главная страница
- `license.html` - страница лицензии
- `docs.html` - документация
- `downloads.html` - загрузки

## ⚠️ Важные замечания

1. **Не удаляйте** функции `getContact()`, `getEmail()`, `getSocialLink()`, `getWebsiteLink()`
2. **Не изменяйте** названия ключей в объектах
3. **Сохраняйте** структуру объектов
4. **Проверяйте** корректность URL и email адресов

## 🚀 Примеры использования

### Изменение email
```javascript
// В config/contacts.js
email: "новый@домен.com"  // Изменить здесь
```

### Добавление новой платформы
```javascript
// В config/downloads.js
const DOWNLOADS = {
  // ... существующие платформы
  new_platform: "https://новый.url/файл.zip"
};
```

### Настройка аналитики
```javascript
// В config/analytics.js
const ANALYTICS = {
  google: {
    id: "G-1234567890",        // Ваш Google Analytics ID
    enabled: true              // Включить Google Analytics
  },
  yandex: {
    id: "12345678",            // Ваш Yandex.Metrika ID
    enabled: false             // Отключить Yandex.Metrika
  }
};
```

## 📞 Поддержка

При возникновении проблем с редактированием контактов обращайтесь к разработчику.
