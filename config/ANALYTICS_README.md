# Настройка аналитики QortexMQ

Этот файл содержит инструкции по настройке Google Analytics и Yandex.Metrika для сайта QortexMQ.

## 📁 Файл конфигурации

Все настройки аналитики находятся в файле `config/analytics.js`:

```javascript
const ANALYTICS = {
  // Google Analytics
  google: {
    id: "G-REPLACEID",        // Замените на ваш Google Analytics ID
    enabled: true             // Включить/выключить Google Analytics
  },
  
  // Yandex.Metrika
  yandex: {
    id: "REPLACE_YM_ID",      // Замените на ваш Yandex.Metrika ID
    enabled: true             // Включить/выключить Yandex.Metrika
  }
};
```

## 🔧 Как настроить

### 1. Google Analytics

1. **Получите ID:**
   - Зайдите в [Google Analytics](https://analytics.google.com/)
   - Создайте аккаунт или выберите существующий
   - Создайте новое свойство для сайта
   - Скопируйте ID измерения (начинается с `G-`)

2. **Обновите файл:**
   ```javascript
   google: {
     id: "G-1234567890",      // Ваш реальный ID
     enabled: true
   }
   ```

### 2. Yandex.Metrika

1. **Получите ID:**
   - Зайдите в [Yandex.Metrika](https://metrika.yandex.ru/)
   - Создайте новый счетчик
   - Скопируйте ID счетчика (обычно 8-10 цифр)

2. **Обновите файл:**
   ```javascript
   yandex: {
     id: "12345678",          // Ваш реальный ID
     enabled: true
   }
   ```

## 🚀 Возможности

### Включение/отключение аналитики
```javascript
// Отключить Google Analytics
google: {
  id: "G-1234567890",
  enabled: false              // Аналитика не будет загружаться
}

// Отключить Yandex.Metrika
yandex: {
  id: "12345678",
  enabled: false              // Аналитика не будет загружаться
}
```

### Временное отключение
```javascript
// Отключить всю аналитику
google: { enabled: false },
yandex: { enabled: false }
```

## 📱 Поддерживаемые страницы

Аналитика автоматически подключается на всех страницах:
- ✅ `index.html` - главная страница
- ✅ `downloads.html` - загрузки
- ✅ `license.html` - лицензия
- ✅ `docs.html` - документация
- ✅ `en/index.html` - английская версия
- ✅ `en/downloads.html` - английские загрузки
- ✅ `en/license.html` - английская лицензия

## 🔒 Безопасность

- **ID аналитики видны в коде** - это нормально для веб-аналитики
- **Аналитика загружается только при необходимости**
- **Поддерживается блокировщики рекламы** - аналитика не сломает сайт

## ⚠️ Важные замечания

1. **Не удаляйте** функции `getGoogleAnalyticsId()`, `getYandexMetrikaId()`
2. **Не изменяйте** названия ключей в объекте `ANALYTICS`
3. **Сохраняйте** структуру объектов
4. **Проверяйте** корректность ID

## 🎯 После настройки

1. **Обновите страницу** в браузере
2. **Проверьте консоль** на наличие ошибок
3. **Убедитесь**, что аналитика работает в Google Analytics/Yandex.Metrika
4. **Проверьте**, что данные собираются

## 📞 Поддержка

При проблемах с настройкой аналитики:
- [Google Analytics Help](https://support.google.com/analytics/)
- [Yandex.Metrika Help](https://yandex.ru/support/metrika/)
- Обратитесь к разработчику



