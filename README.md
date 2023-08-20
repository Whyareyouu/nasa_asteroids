# Тестовое задание: Онлайн-сервис мониторинга и уничтожения опасных астероидов

Данный репозиторий содержит выполненное тестовое задание для создания онлайн-сервиса по мониторингу и уничтожению опасных астероидов на основе данных API NASA. Задание выполнено на базе Next.js.

## Описание

Этот веб-сервис позволяет пользователю отслеживать астероиды, приближающиеся к Земле. Веб-приложение получает данные о ближайших астероидах с использованием [API NASA Asteroids - NeoWs](https://api.nasa.gov/neo/rest/v1/neo/browse), отображает их списком на главной странице и предоставляет дополнительные сведения на отдельных страницах для каждого астероида.

## Основные функции

- Отображение списка подлетающих астероидов к Земле, включая название, размер, оценку опасности, близость к Земле, и точную дату максимального подлета.
- Использование иконок для астероидов в зависимости от их размера.
- Возможность выбора единиц измерения расстояния: километры или расстояния до Луны.
- Адаптивная вёрстка для удобного просмотра на различных устройствах.
- Возможность добавления астероидов в корзину.
- Отображение списка заказанных астероидов на странице успешного заказа.
- Подгрузка астероидов при скролле

## Переменные окружения

Для работы с API NASA и безопасного хранения ключа API, проект использует файл `.env.local`. В этом файле вы можете определить свой ключ API, который будет использоваться при запросах к API NASA.

API_KEY=ваш_ключ

## Установка и запуск

1. Склонируйте репозиторий:

```bash
git clone https://github.com/Whyareyouu/nasa_asteroids.git
```

2. Перейдите в директорию проекта:

```bash
cd nasa_asteroids
```

3. Установите зависимости:

```bash
npm install
```

4. Запустите веб-приложение:

```bash
npm run dev
```

5. Запуск тестов:
```bash
npm run test
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

## Технологии

- [Next.js](https://nextjs.org/) - фреймворк React для серверного рендеринга и статической генерации.
- [API NASA](https://api.nasa.gov/) - использование данных об астероидах.
- [CSS Modules](https://github.com/css-modules/css-modules) - локальные стили для компонентов.

## Демонстрация проекта:

Вы можете просмотреть работающий компонент таблицы с действиями по ссылке: [Vercel](https://nasa-asteroids-zeta.vercel.app/)

