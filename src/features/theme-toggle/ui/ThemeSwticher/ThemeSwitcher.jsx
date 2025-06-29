import { useContext } from "react";
import { ThemeContext } from "../../../../app/providers/ThemeApp/ThemeContext";
import { AuthContext } from "../../../../app/providers/router/AuthProvider/AuthContext";

import cls from "./ThemeSwitcher.module.scss";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={cls["switcher"]}>
      <p className={cls["switcher__text"]}>
        {theme === "_dark" ? "Темная тема" : "Светлая тема"}
      </p>
      <input
        type="checkbox"
        className={cls["checkbox"]}
        name="checkbox"
        checked={theme === "_dark"}
        onChange={toggleTheme}
      />
    </div>
  );
}
