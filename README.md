# Платформа для продажу ігор
## Опис проекту

Розробити веб-платформу для продажу ігор, що дозволяє користувачам переглядати каталог ігор, додавати ігри в кошик, переглядати інформацію про гру та здійснювати покупки. Веб-додаток взаємодіє з бекендом через Fetch API для отримання та відправки даних.

## Основні функціональні можливості
- Головна сторінка:
  - Відображення списку популярних ігор.
  - Пошук ігор за назвою.
- Сторінка гри:
  - Відображення детальної інформації про гру (назва, опис, ціна, рейтинг).
  - Кнопка додавання гри в кошик.
- Кошик:
  - Відображення доданих до кошика ігор. 
  - Видалення ігор з кошика. 
  - Перегляд загальної вартості ігор у кошику. 
  - Кнопка для підтвердження покупки.
- Сторінка профілю користувача:
  - Відображення особистої інформації користувача (username, email). 
  - Перегляд історії покупок.
- Авторизація та реєстрація:
  - Реєстрація нового користувача.
  - Авторизація існуючого користувача.
  - Відображення стану авторизації на головній сторінці.
- Адмінка для додавання ігор:
  - Додавання нових ігор (назва, опис, ціна, зображення).
  - Редагування існуючих ігор.
  - Видалення ігор з каталогу.



## Приклад запитів: [fetch запити](fetch-examples.md)

### URL для запитів https://maker-time-server-6dc0ba9fb22f.herokuapp.com

## Розподіл завдань та етапи реалізації
### Тиждень 1: Основна структура, авторизація та реєстрація

- Авторизація та реєстрація:
  - [HTML] Створити структуру сторінок авторизації та реєстрації.
  - [CSS] Стилізувати сторінки авторизації та реєстрації.
  - [JS] Реалізувати функціонал реєстрації нового користувача.
  - [JS] Реалізувати функціонал авторизації існуючого користувача.
  - [JS] Відображення стану авторизації на головній сторінці.
- Головна сторінка:
  - [HTML] Створити базову структуру головної сторінки.
  - [CSS] Стилізувати головну сторінку.
- Сторінка гри:
  - [HTML] Створити базову структуру сторінки гри.
  - [CSS] Стилізувати сторінку гри.

### Тиждень 2: Сторінка гри, кошик та адмінка

- Сторінка гри:
  - [JS] Реалізувати пошук ігор за назвою.
  - [JS] Реалізувати кнопку додавання гри в кошик.
- Кошик:
  - [HTML] Створити структуру сторінки кошика.
  - [CSS] Стилізувати сторінку кошика.
  - [JS] Реалізувати додавання та видалення ігор з кошика.
- Адмінка:
  - [HTML] Створити структуру сторінки адмінки.
  - [CSS] Стилізувати сторінку адмінки.
  - [JS] Реалізувати функціонал додавання нових ігор.
  - [JS] Реалізувати функціонал редагування існуючих ігор.
  - [JS] Реалізувати функціонал видалення ігор з каталогу.

### Тиждень 3: Інтеграція з бекендом

- Fetch API:
  - [JS] Реалізувати запити до бекенду для отримання списку ігор.
  - [JS] Реалізувати запити до бекенду для отримання детальної інформації про гру.
- Кошик:
  - [JS] Реалізувати запити до бекенду для додавання та видалення ігор з кошика.
  - [JS] Реалізувати запити до бекенду для підтвердження покупки.
- Адмінка:
  - [JS] Реалізувати запити до бекенду для додавання нових ігор.
  - [JS] Реалізувати запити до бекенду для редагування існуючих ігор.
  - [JS] Реалізувати запити до бекенду для видалення ігор з каталогу.

### Тиждень 4: Тестування та фіналізація проекту

- Тестування:
  - Провести тестування всіх функцій на помилки та баги.
  - Виправити знайдені помилки.
- Фіналізація:
  - Оптимізувати код та стилі.
  - Підготувати проект до демонстрації.

## Вимоги до дизайну
- Адаптивний дизайн, що коректно відображається на різних пристроях.
- Зручний та інтуїтивно зрозумілий інтерфейс для користувачів.
