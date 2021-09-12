import { Routes } from "./components/Routes";
import "./App.scss";
import { useState, useCallback } from "react";
import { Provider } from "react-redux";
import { ThemeContext } from "./utils/ThemeContext";
import { store } from "./store";


function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Routes />
      </ThemeContext.Provider>
    </Provider>
  );
}
// 1. Установить redux, react-redux.
// 2. Создать редьюсер профиля.Подключить страницу профиля к redux.
// 3. Добавить на странице профиля чекбокс и сохранение его состояния в сторе.
export default App;
