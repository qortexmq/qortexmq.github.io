# QortexMQ - Лёгкий и быстрый брокер сообщений

Проще, чем Kafka, и быстрее, чем ваш CI. Топики, приоритеты, ACK и веб‑интерфейс — всё из коробки.

## 🚀 Быстрый старт

```bash
# Запуск локального сервера
python3 -m http.server 8000

# Откройте http://localhost:8000
```

## 📁 Структура проекта

```
qortexmq-website/
├── config/                 # Конфигурации сайта
│   ├── README.md          # Документация конфигураций
│   ├── validator.js       # Валидация конфигураций
│   ├── site.js            # Основные настройки сайта
│   ├── contacts.js        # Контакты и связи
│   ├── downloads.js       # Ссылки на загрузки
│   ├── analytics.js       # Настройки аналитики
│   └── license-generator.js # Генератор лицензий
├── assets/
│   ├── css/               # Стили
│   ├── js/                # JavaScript скрипты
│   │   ├── main.js        # Основная функциональность
│   │   ├── animations.js  # Анимации
│   │   ├── theme.js       # Управление темой
│   │   └── README.md      # Документация скриптов
│   ├── img/               # Изображения
│   └── templates/         # Шаблоны лицензий
├── en/                    # Английская версия
├── index.html             # Главная страница
├── docs.html              # Документация
├── downloads.html         # Загрузки
├── license.html           # Лицензия
└── README.md              # Эта документация
```

## ⚙️ Конфигурация

Все настройки сайта находятся в каталоге `config/`:

- **`config/site.js`** - домен, URL, пути, SEO настройки
- **`config/contacts.js`** - email, telegram, github и другие контакты
- **`config/downloads.js`** - ссылки на загрузки для разных платформ
- **`config/analytics.js`** - Google Analytics и Yandex.Metrika

### Изменение домена сайта

```javascript
// config/site.js
const SITE_CONFIG = {
  domain: "новый-домен.com",
  baseUrl: "https://новый-домен.com",
  // ...
};
```

### Изменение контактов

```javascript
// config/contacts.js
const CONTACTS = {
  email: "новый@email.com",
  telegram: "https://t.me/username",
  github: "https://github.com/username"
};
```

## 🎨 Особенности

- **Централизованная конфигурация** - все настройки в одном месте
- **Двуязычность** - русская и английская версии
- **Адаптивный дизайн** - работает на всех устройствах
- **Темная/светлая тема** - автоматическое переключение
- **Динамическая генерация** - контакты и ссылки обновляются автоматически
- **SEO оптимизация** - мета-теги и структурированные данные

## 📄 Страницы

- **Главная** (`index.html`) - описание проекта и возможности
- **Документация** (`docs.html`) - инструкции по установке и использованию
- **Загрузки** (`downloads.html`) - бинарные файлы для разных платформ
- **Лицензия** (`license.html`) - условия использования

## 🔧 Разработка

### Добавление новой страницы

1. Создайте HTML файл
2. Подключите конфигурации:
```html
<script src="config/site.js"></script>
<script src="config/contacts.js"></script>
<script src="config/downloads.js"></script>
<script src="config/analytics.js"></script>
<script src="config/validator.js"></script>
```

### Добавление нового контакта

1. Добавьте в `config/contacts.js`:
```javascript
const CONTACTS = {
  email: "email@example.com",
  discord: "https://discord.gg/invite"  // Новый контакт
};
```

2. Обновите функции в том же файле для обработки нового типа

### Добавление новой платформы

1. Добавьте в `config/downloads.js`:
```javascript
const DOWNLOADS = {
  linux: "https://...",
  android: "https://..."  // Новая платформа
};
```

## 📚 Документация

- **[Конфигурация](config/README.md)** - подробная документация по настройкам
- **[Контакты](CONTACTS_README.md)** - управление контактами и загрузками
- **[Аналитика](ANALYTICS_README.md)** - настройка Google Analytics и Yandex.Metrika

## 🚀 Развертывание

1. Загрузите файлы на веб-сервер
2. Обновите домен в `config/site.js`
3. Настройте аналитику в `config/analytics.js`
4. Проверьте все ссылки и контакты

## 📞 Поддержка

По вопросам разработки и использования:
- Email: qortexmq2@gmail.com
- GitHub: https://github.com/qortexmq/qortexmq

## 📄 Лицензия

Проект распространяется под специальной лицензией. См. `license.html` для подробностей.

---

**QortexMQ** - Лёгкий и быстрый брокер сообщений для микросервисов


