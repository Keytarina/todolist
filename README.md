# To-Do List

Цей проєкт — це веб-застосунок "To-Do List", що дозволяє користувачам додавати, видаляти та фільтрувати завдання. Додаток створено з використанням React і Redux Toolkit для керування станом.

**Основні можливості:**

- Додавання нових завдань
- Видалення виконаних завдань
- Фільтрація завдань за станом
- Збереження даних у локальному сховищі за допомогою redux-persist

**Технології:**

- React (Компонентний підхід)
- Redux Toolkit (Керування станом)
- Redux Persist (Збереження стану після перезавантаження сторінки)
- SCSS (Стилізація)

**Встановлення та запуск**

1. Клонування репозиторію

git clone https://github.com/Keytarina/todolist.git
cd todolist

2. Встановлення залежностей

npm install

3. Запуск проєкту

npm run dev

**Використання:**

1. Введіть назву завдання в поле введення та натисніть "Додати".
2. Позначте завдання як виконане, натиснувши на чекбокс.
3. Використовуйте фільтри для відображення активних або виконаних завдань.
4. Завдання зберігаються у localStorage, тож після перезавантаження сторінки вони залишаться.
