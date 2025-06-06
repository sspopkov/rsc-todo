▎📋 RSC Todo: Демонстрация React Server Components

▎🚀 Обзор проекта

Этот проект представляет собой Todo-приложение, демонстрирующее технологии React и Next.js, включая:

- React Server Components (RSC)
- Server Actions
- Оптимистичные обновления
- Управление состоянием
- Работа с JSON File DB

▎✨ Особенности

▎🔹 Серверные компоненты
- Статистика todo загружается асинхронно
- Встроенная поддержка серверных действий

▎🔹 Клиентское взаимодействие
- Мгновенные оптимистичные обновления
- Плавное добавление и переключение задач

▎🔹 Производительность
- Минимальная задержка при взаимодействии
- Эффективное управление состоянием

▎🛠 Технологический стек

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

<pre><code>📦 Структура проекта

📂 app/
│
├── 📄 page.tsx          # Основная страница приложения
│
├── 📂 todos/            # Всё, что связано с todo-функциональностью
│   ├── 📄 actions.ts    # Серверные действия для todo
│   ├── 📄 Context.tsx   # Контекст управления todo
│   ├── 📄 TodoList.tsx  # Компонент списка задач
│   └── 📄 Stats.tsx     # Компонент статистики
│
└── 📂 lib/              # Общие библиотечные файлы
    └── 📄 db.ts         # Управление данными
</code></pre>


▎🚦 Основные функции

- ✅ Добавление новых задач
- ✅ Переключение статуса задачи
- ✅ Отображение статистики
- ✅ Оптимистичные обновления

▎🔧 Установка и запуск

# Клонирование репозитория
git clone https://github.com/sspopkov/rsc-todo.git

# Переход в директорию проекта
cd rsc-todo

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev


▎🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте свою ветку (git checkout -b feature/AmazingFeature)
3. Commits с описанием изменений
4. Push в свою ветку
5. Создайте Pull Request

▎📄 Лицензия

Распространяется под лицензией MIT.

