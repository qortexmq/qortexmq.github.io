// Конфигурация загрузок QortexMQ
// Если значение ссылки null - кнопка не показывается

const DOWNLOADS = {
  server: {
    version: "1.3.0",
    releaseNotes: "Вышли в первый релиз! Принимаем поздравления",
    links: {
      linux: "https://drive.google.com/file/d/1WCXS8I9XHd92TSoxz2a5SWIPCGPZCzL9",
      windows: "https://drive.google.com/file/d/1kv80j7LVJVhllciueySGFpVuu5SLtbbB",
      macos: "https://drive.google.com/file/d/1I9bywp7uJ6BgKDzN8eGRH6fH01E_bMy4",
      docker: "https://drive.google.com/file/d/16TV_5BDB-j7bYb6Mg5uVzvKxR7YR3tM5",
      github: null
    }
  },
  client: {
    version: "1.3.0",
    releaseNotes: "Первый релиз, но уже обновленный клиент",
    links: {
      nuget: "https://www.nuget.org/packages/QortexMQ.Client/",
      github: null
    }
  }
};

// Экспорт в глобальную область видимости для проверок validator.js
window.DOWNLOADS = DOWNLOADS;

// Секции доступных загрузок (порядок рендера)
function getDownloadSections() {
  return Object.keys(DOWNLOADS);
}

function getSectionMeta(section) {
  return DOWNLOADS[section] || null;
}

function getAvailableLinks(section) {
  const links = DOWNLOADS[section] && DOWNLOADS[section].links ? DOWNLOADS[section].links : {};
  return Object.keys(links).filter((key) => !!links[key]);
}

function getLink(section, key) {
  return DOWNLOADS[section] && DOWNLOADS[section].links ? (DOWNLOADS[section].links[key] || null) : null;
}

function getLinkText(key) {
  switch (key) {
    case 'linux':
      return 'Linux x64 (.zip)';
    case 'windows':
      return 'Windows x64 (.zip)';
    case 'macos':
      return 'macOS x64 (.zip)';
    case 'nuget':
      return 'NuGet Package';
    case 'docker':
      return 'Docker image (latest)';
    case 'github':
      return 'GitHub Releases';
    default:
      return key;
  }
}
