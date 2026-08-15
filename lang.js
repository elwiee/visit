(function () {
  const translations = {
    'Главная': 'Home',
    'Работы': 'Work',
    'Услуги': 'Services',
    'Обо мне': 'About',
    'Связаться': 'Contact',
    'Написать': 'Message me',
    'Контакты': 'Contacts',
    'Веб-разработка · дизайн · 2026': 'Web development · design · 2026',
    'Сайты, которые': 'Websites worth',
    'приятно показывать.': 'showing people.',
    'Помогаю людям и небольшому бизнесу уверенно выглядеть в интернете. Без шаблонного шума и лишних слов.': 'I help people and small businesses look confident online. No template noise or unnecessary words.',
    'Смотреть работы': 'View projects',
    'Обсудить проект ↗': 'Discuss a project ↗',
    'Избранные проекты': 'Selected projects',
    'Три работы.': 'Three projects.',
    'Три разных характера.': 'Three distinct styles.',
    '03 / Многостраничный личный сайт': '03 / Multi-page personal website',
    'Мишель': 'Mishel',
    '02 / Сайт для бизнеса': '02 / Business website',
    '01 / Главный кейс · Персональный сайт': '01 / Featured case · Personal website',
    'Что я делаю': 'What I do',
    'Лендинги': 'Landing pages',
    'Одна страница для продукта, услуги или запуска.': 'A focused one-page website for a product, service, or launch.',
    'Сайты-визитки': 'Portfolio websites',
    'Коротко и убедительно рассказывают о вас или бизнесе.': 'A concise and convincing presentation of you or your business.',
    'Многостраничные': 'Multi-page websites',
    'Сайты до 25 страниц для компаний и крупных проектов.': 'Up to 25 pages for companies and larger projects.',
    'Редизайн': 'Redesign',
    'Обновляю структуру и внешний вид существующего сайта.': 'I refresh the structure and visual style of an existing website.',
    'Подробнее об услугах ↗': 'Explore services ↗',
    'Есть задача?': 'Have a project?',
    'Давайте сделаем': "Let's create",
    'что-то хорошее.': 'something great.',
    'Обсудить проект': 'Discuss a project',
    'Портфолио': 'Portfolio',
    'Работы без': 'Projects without',
    'лишних слов.': 'the extra noise.',
    'Три опубликованных проекта с разной задачей, аудиторией и визуальным характером.': 'Three published projects with different goals, audiences, and visual personalities.',
    'Персональный сайт-хронология: история, фотоархив, полезные материалы и социальные сети в одном цельном пространстве.': 'A personal timeline website bringing together a story, photo archive, useful materials, and social media.',
    'Дизайн': 'Design',
    'Разработка': 'Development',
    'Адаптив': 'Responsive',
    'Открыть сайт ↗': 'Visit website ↗',
    'Сайт кузовного сервиса в Санкт-Петербурге. Услуги, преимущества, примеры работ и понятный путь до заявки.': 'A website for an auto body shop in Saint Petersburg, with services, benefits, case studies, and a clear enquiry path.',
    'Сайт для бизнеса': 'Business website',
    'Структура': 'Structure',
    'Многостраничный персональный сайт о жизни в Сочи, спорте, взрослении и путешествиях. История, ценности и большая фотогалерея собраны в одном визуальном дневнике.': 'A multi-page personal website about life in Sochi, sports, growing up, and travel. A story, values, and a large photo gallery in one visual journal.',
    'Многостраничный сайт': 'Multi-page website',
    'Личный бренд': 'Personal brand',
    'Анимации': 'Motion',
    'Только то,': 'Only what',
    'что нужно.': 'you need.',
    'Подбираю формат под задачу, а не усложняю проект ради объёма.': 'I choose the right format for the task instead of adding complexity for its own sake.',
    'Лендинг': 'Landing page',
    'Сайт из одной страницы для услуги, продукта, события или рекламного запуска.': 'A one-page website for a service, product, event, or campaign launch.',
    'Сайт-визитка': 'Portfolio website',
    'Компактная презентация специалиста или бизнеса с работами и контактами.': 'A compact presentation of a professional or business, including work and contacts.',
    'Сайт до 25 страниц для компании, портфолио или большого проекта. Отдельные страницы для услуг, работ, информации и контактов — по типу этого сайта.': 'A website of up to 25 pages for a company, portfolio, or larger project, with dedicated pages for services, work, information, and contacts.',
    'Новая структура и визуальная подача для сайта, который уже устарел.': 'A new structure and visual direction for an outdated website.',
    'Инфографика': 'Infographics',
    'Понятная визуальная подача информации для страниц и презентаций.': 'Clear visual communication for web pages and presentations.',
    'Стоимость зависит от задачи.': 'Pricing depends on the scope.',
    'Рассказать о проекте': 'Tell me about your project',
    'Личная биография': 'Personal story',
    'Делаю шаги': 'Moving step by step',
    'к своей мечте.': 'towards my dream.',
    'Меня зовут Максим.': "I'm Maxim.",
    'Я школьник и начинающий веб-разработчик. Создаю сайты на заказ и каждый день стараюсь становиться сильнее в своём деле. Моя цель — развиваться в веб-разработке и однажды собрать большую аудиторию на Twitch.': "I'm a student and an aspiring web developer. I build custom websites and work every day to improve my craft. My goal is to grow in web development and one day build a large audience on Twitch.",
    'Спорт помогает мне держать темп: я хожу в зал, плаваю, много гуляю и стараюсь проходить не меньше 10 000 шагов. Люблю велосипедные поездки на 20–100 километров — дорога помогает проветрить голову и оставить лишние мысли позади.': 'Sports help me keep my momentum: I work out, swim, spend time outdoors, and aim for at least 10,000 steps a day. I enjoy cycling 20–100 km because the road clears my head and leaves unnecessary thoughts behind.',
    'Учусь, самостоятельно занимаюсь английским и развиваюсь в создании сайтов: изучаю дизайн, структуру страниц и способы сделать интерфейс понятным для клиента. Постоянная практика учит меня дисциплине и помогает улучшать каждую новую работу.': 'I study English independently and keep developing my web skills: design, page structure, and ways to make interfaces clear for clients. Consistent practice teaches me discipline and makes every new project better.',
    'шагов в день': 'steps a day',
    'дальние велопоездки': 'long-distance rides',
    'Личный путь · 2026': 'Personal journey · 2026',
    'В движении': 'In motion',
    'Спорт, прогулки, велосипед и работа над собой помогают мне сохранять ясную голову и двигаться дальше.': 'Sports, walking, cycling, and self-improvement help me stay clear-minded and keep moving forward.',
    'Сотрудничество': 'Collaboration',
    'Расскажите': 'Tell me',
    'о своей идее.': 'about your idea.',
    'Заполните короткую форму — она подготовит сообщение и откроет наш диалог в Telegram.': 'Complete the short form and it will prepare a message and open our Telegram chat.',
    'Один контакт для проектов': 'One contact for projects',
    'Давайте сделаем': "Let's build",
    'хороший сайт.': 'a great website.',
    'После отправки откроется Telegram с готовым сообщением. Проверьте его и нажмите «Отправить».': 'Telegram will open with a ready-made message. Review it and press Send.',
    'Как вас зовут?': 'What is your name?',
    'Как с вами связаться?': 'How can I reach you?',
    'Какой сайт вам нужен?': 'What kind of website do you need?',
    'Выберите формат': 'Choose a format',
    'Многостраничный сайт до 25 страниц': 'Multi-page website, up to 25 pages',
    'Редизайн существующего сайта': 'Redesign of an existing website',
    'Пока не знаю — нужна консультация': "I'm not sure yet — I need advice",
    'Немного деталей': 'A few details',
    'Отправить заявку': 'Send enquiry',
    'Откроется Telegram @managerlio. Форма не отправляет сообщение без вашего подтверждения.': 'Telegram @managerlio will open. The form will not send anything without your confirmation.'
  };

  const attributeTranslations = {
    'Имя / бренд': 'Name / brand',
    '@username или email': '@username or email',
    'Расскажите о задаче, сроках и примерном бюджете': 'Tell me about the project, timeline, and approximate budget',
    'Основная навигация': 'Main navigation',
    'Личные фотографии Максима': "Maxim's personal photos",
    'Максим в солнечном свете': 'Maxim in sunlight',
    'Максим на прогулке у дома': 'Maxim outdoors',
    'Портрет Максима на улице': 'Portrait of Maxim outdoors',
    'Максим перед зеркалом': 'Maxim in front of a mirror',
    'Портрет Максима': 'Portrait of Maxim',
    'Открыть сайт Мишель': 'Open the Mishel website',
    'Открыть Mill Reef': 'Open Mill Reef',
    'Открыть PAVLOVA': 'Open PAVLOVA'
  };

  const titles = {
    'Максим — сайты с характером': 'Maxim — websites with character',
    'Работы — eelwiee': 'Work — eelwiee',
    'Услуги — eelwiee': 'Services — eelwiee',
    'Обо мне — eelwiee': 'About — eelwiee',
    'Связаться — eelwiee': 'Contact — eelwiee'
  };

  const language = localStorage.getItem('site-language') === 'en' ? 'en' : 'ru';

  function translateTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.parentElement && ['SCRIPT', 'STYLE'].includes(node.parentElement.tagName)) return;
      const value = node.nodeValue.trim();
      if (!value || !translations[value]) return;
      node.nodeValue = node.nodeValue.replace(value, translations[value]);
    });

    document.querySelectorAll('[placeholder], [aria-label], [alt]').forEach((element) => {
      ['placeholder', 'aria-label', 'alt'].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (value && attributeTranslations[value]) element.setAttribute(attribute, attributeTranslations[value]);
      });
    });
  }

  function addToggle() {
    const header = document.querySelector('.header');
    const contact = header && header.querySelector('.header-cta');
    if (!header || !contact) return;
    const button = document.createElement('button');
    button.className = 'lang-toggle';
    button.type = 'button';
    button.textContent = language === 'en' ? 'RU' : 'EN';
    button.setAttribute('aria-label', language === 'en' ? 'Switch to Russian' : 'Переключить на английский');
    button.addEventListener('click', () => {
      localStorage.setItem('site-language', language === 'en' ? 'ru' : 'en');
      window.location.reload();
    });
    header.appendChild(button);
  }

  if (language === 'en') {
    document.documentElement.lang = 'en';
    document.title = titles[document.title] || document.title;
    translateTextNodes();
  }
  addToggle();
})();
