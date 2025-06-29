import { useContext } from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import cls from "./Header.module.scss";
import { ThemeContext } from "../../../../app/providers/ThemeApp/ThemeContext";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={cls["header"]}>
      <div className={cls["container"]}>
        <div className={cls["header__block"]}>
          <div className={cls["header__logo"]}>
            <a href="" target="_self">
              {theme === "_light" ? (
                <img src="images/logo.png" alt="logo" />
              ) : (
                <img src="images/logo_dark.png" alt="logo" />
              )}
            </a>
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
