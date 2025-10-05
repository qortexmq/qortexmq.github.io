# Конфигурация сайта QortexMQ

Этот каталог содержит все настройки и конфигурации сайта QortexMQ.

## 📁 Структура файлов

```
config/
├── README.md           # Эта документация
├── validator.js       # Валидация конфигураций
├── site.js            # Основные настройки сайта
├── contacts.js        # Контакты и связи
├── downloads.js       # Ссылки на загрузки
├── analytics.js       # Настройки аналитики
└── license-generator.js # Генератор лицензий
```

## 🔧 Файлы конфигурации

### `site.js` - Основные настройки сайта
Содержит все URL, пути и основные настройки сайта.

**Основные настройки:**
- `domain` - домен сайта (например: "qortexmq.ru")
- `baseUrl` - полный URL сайта с протоколом
- `paths` - пути к страницам и внешние ссылки
- `seo` - настройки SEO (title, description, keywords)
- `social` - ссылки на социальные сети
- `project` - информация о проекте

**Функции:**
- `getSiteUrl(path)` - получить полный URL
- `getPageUrl(page, language)` - получить URL страницы
- `getExternalUrl(key)` - получить внешнюю ссылку
- `getSeoValue(key)` - получить SEO значение
- `getProjectValue(key)` - получить значение проекта

### `contacts.js` - Контакты и связи
Содержит все контактные данные и способы связи.

**Структура:**
```javascript
const CONTACTS = {
  email: "qortexmq2@gmail.com",
  telegram: null,  // или ссылка
  github: null     // или ссылка
};
```

**Функции:**
- `getContact(key)` - получить контакт
- `shouldShowContact(key)` - проверить, нужно ли показывать
- `getContactText(key)` - получить отображаемый текст

### `downloads.js` - Ссылки на загрузки
Содержит все ссылки для скачивания ПО.

**Структура:**
```javascript
const DOWNLOADS = {
  linux: "https://github.com/.../linux.tar.gz",
  windows: "https://github.com/.../windows.zip",
  macos: "https://github.com/.../macos.tar.gz",
  nuget: "https://www.nuget.org/...",
  docker: "https://hub.docker.com/...",
  github: "https://github.com/.../releases"
};
```

**Функции:**
- `getDownload(key)` - получить ссылку на загрузку
- `shouldShowDownload(key)` - проверить, нужно ли показывать
- `getDownloadText(key)` - получить отображаемый текст

### `analytics.js` - Настройки аналитики
Содержит настройки Google Analytics и Yandex.Metrika.

**Структура:**
```javascript
const ANALYTICS = {
  google: {
    id: "G-REPLACEID",
    enabled: true
  },
  yandex: {
    id: "REPLACE_YM_ID",
    enabled: true
  }
};
```

**Функции:**
- `getGoogleAnalyticsId()` - получить ID Google Analytics
- `getYandexMetrikaId()` - получить ID Yandex.Metrika
- `isAnalyticsEnabled(provider)` - проверить, включена ли аналитика

### `validator.js` - Валидация конфигураций
Объединяет все конфигурации и предоставляет функции проверки.

**Функции:**
- `checkConfigs()` - проверить загрузку всех конфигураций

### `license-generator.js` - Генератор лицензий
Скрипт для генерации и скачивания лицензионных файлов.

**Функции:**
- `loadLicenseTemplate(language)` - загрузить шаблон лицензии
- `generateLicense(content, email, siteUrl)` - сгенерировать лицензию
- `downloadLicense(language)` - скачать лицензию

**Использование:**
- Использует шаблоны из `assets/templates/`
- Подставляет актуальные данные из конфигурации
- Генерирует файлы LICENSE.txt для скачивания
- `getAllConfigs()` - получить все конфигурации
- `validateConfigs()` - валидировать конфигурации

## 🚀 Как использовать

### 1. Подключение в HTML
```html
<!-- Сначала загружаем конфигурации -->
<script src="config/site.js"></script>
<script src="config/contacts.js"></script>
<script src="config/downloads.js"></script>
<script src="config/analytics.js"></script>

<!-- Затем главный файл -->
<script src="config/main.js"></script>
```

### 2. Использование в JavaScript
```javascript
// Получить URL сайта
const siteUrl = getSiteUrl('/docs.html');

// Получить контакт
const email = getContact('email');

// Получить ссылку на загрузку
const downloadUrl = getDownload('linux');

// Проверить аналитику
if (isAnalyticsEnabled('google')) {
  // Загрузить Google Analytics
}
```

## ⚙️ Настройка

### Изменение домена сайта
В файле `config/site.js`:
```javascript
const SITE_CONFIG = {
  domain: "новый-домен.com",
  baseUrl: "https://новый-домен.com",
  // ...
};
```

### Добавление нового контакта
В файле `config/contacts.js`:
```javascript
const CONTACTS = {
  email: "email@example.com",
  telegram: "https://t.me/username",
  github: "https://github.com/username",
  discord: "https://discord.gg/invite"  // Новый контакт
};
```

### Добавление новой платформы
В файле `config/downloads.js`:
```javascript
const DOWNLOADS = {
  linux: "https://...",
  windows: "https://...",
  macos: "https://...",
  android: "https://..."  // Новая платформа
};
```

## 🔍 Валидация

Главный файл `main.js` автоматически проверяет:
- ✅ Загрузку всех конфигураций
- ✅ Наличие обязательных полей
- ✅ Корректность данных

При ошибках в консоли браузера будут показаны предупреждения.

## 📝 Примечания

1. **Порядок загрузки важен** - сначала конфигурации, потом главный файл
2. **Все функции глобальные** - доступны во всех скриптах
3. **Null значения** - автоматически скрывают блоки на странице
4. **Валидация** - помогает найти ошибки в конфигурации

## 🆘 Поддержка

При проблемах с конфигурацией:
1. Проверьте консоль браузера на ошибки
2. Убедитесь, что все файлы загружены
3. Проверьте синтаксис JavaScript
4. Убедитесь в правильном порядке загрузки
