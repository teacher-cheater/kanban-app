import { useContext } from "react";
import { ThemeContext } from "../../../app/providers/ThemeApp/ThemeContext";
import { AuthContext } from "../../../app/providers/router/AuthProvider/AuthContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="pop-user-set__theme">
      <p>{theme === "_dark" ? "Темная тема" : "Светлая тема"}</p>
      <input
        type="checkbox"
        className="checkbox"
        name="checkbox"
        checked={theme === "_dark"}
        onChange={toggleTheme}
      />
    </div>
  );
}
