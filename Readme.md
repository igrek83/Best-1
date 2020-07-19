# Проект "Лучшие друзья"

## Описание
Одностраничный сайт для благотворительного фонда "Лучшие друзья"

### Реализованный функционал
На сайте размещена форма по отправке пожертвований для Фонда. Прием платежей осущевляется посредством виджета CloudPayments, есть возможность как выбрать предложенную сумму, так и ввести свою, совершить как разовое пожертвование, так и оформить ежемесячный платеж. "Встроенная" форма и форма, открывающаяся при нажатии на кнопку - одинаковы по функционалу. Форма работает в тестовом режиме, для проверки можно ввести несуществующий номер карты, на указанный e-mail приходит письмо о пожертвовании.

О сайте можно рассказать друзьям, для этого присутствуют share-кнопки популярных социальных сетей, а так же кнопка копирования ссылки на проект в буфер обмена.

Реализация слайдера: CSS + js без сторонних плагинов.

Видео начинает проигрываться с момента загрузки страницы без звука, повторяется по кругу. При нажатии на кнопку play, видео начинает проигрываться с начала и со звуком 1 раз. При нажатии на крест в углу, видео вновь начинает проигрываться с стандартном режиме.

Валидация e-mail с помощью регулярных выражений.

Сайт адаптирован под популярные разрешения устройств.

Кроссбраузерность.

### Используемые технологии

Нативный JS, функционал разбит на отдельные модули; CSS, наименование классов по БЭМ, адаптив с помощью медиа запросов; HTML; WebPack, оптимизация шрифтов и изображений.

### Локальный запуск
1. Клонировать репозиторий
2. Установить необходимые модули npm
    ```
        npm install
    ```
3. Запустить локальный сервер
    ```
        npm run dev
   ```

### Продакшн сборка
1. Клонировать репозиторий
2. Установить необходимые модули npm
    ```
        npm install
    ```
3. Запустить сборку проекта
    ```
        npm run build
   ```

### Ссылка на проект

https://igrek83.github.io/Best-1/