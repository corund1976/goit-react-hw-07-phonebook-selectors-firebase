createAsyncThunk()
createSlice()

Redux Toolkit включает в себя следующие API:

- configureStore(): обертка для createStore(), упрощающая настройку хранилища с настройками по умолчанию. Позволяет автоматически комбинировать отдельные частичные редукторы (slice reducers), добавлять промежуточные слои или посредников (middlewares), по умолчанию включает redux-thunk (преобразователя), позволяет использовать расширение Redux DevTools (инструменты разработчика Redux)

- createReducer(): позволяет использовать таблицу поиска (lookup table) операций для редукторов случая (case reducers) вместо инструкций switch. В данном API используется библиотека immer, позволяющая напрямую изменять иммутабельный код, например, так: state.todos[3].completed = true

- createAction(): генерирует создателя операции (action creator) для переданного типа операции. Функция имеет переопределенный метод toString(), что позволяет использовать ее вместо константы типа

- createSlice(): принимает объект, содержащий редуктор, название части состояния (state slice), начальное значение состояния, и автоматически генерирует частичный редуктор с соответствующими создателями и типами операции

- createAsyncThunk(): принимает тип операции и функцию, возвращающую промис, и генерирует thunk, отправляющий типы операции pending/fulfilled/rejected на основе промиса

- createEntityAdapter(): генерирует набор переиспользуемых редукторов и селекторов для управления нормализованными данными в хранилище

- утилита createSelector() из библиотеки Reselect

ххххххххххххххххххххххххххххххххххххххххххх

1. Устанавливаем Create React App (в текущей папке, которая открыта в VSCode)
   npx create-react-app .

2. В package.json добавляем после 3ей строки "private" св-во "homepage"
   (перед "dependencies") со своими значениями
   ("homepage": "https://corund1976.github.io/goit-react-hw-07-phonebook",)
   "homepage": "https://myusername.github.io/my-app"

3. Добавляем 2 новых скрипта в package.json
   "scripts": {
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",

4. Добавляем пакет gh-pages для автоматического деплоя приложения
   npm install --save gh-pages или
   yarn add gh-pages

5. Копируем исходник (папку src) и Запускаем деплой
   npm run deploy

6. Устанавливаем Redux Toolkit (ранее назывался "Redux Starter Kit")
   npm install @reduxjs/toolkit или
   yarn add @reduxjs/toolkit

7. Устанавливаем React Redux для связи React с Redux
   npm i react-redux или
   yarn add react-redux

8. Устанавливаем axios
   npm i axios

9. Запускаем проект локально
   npm start или
   yarn start
