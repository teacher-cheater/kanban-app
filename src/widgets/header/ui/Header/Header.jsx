import { useContext } from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import cls from "./Header.module.scss";
import { ThemeContext } from "../../../../app/providers/ThemeApp/ThemeContext";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../shared/lib/appRoutes";
import IconKanbanLight from "../../../../assets/images/logo-icon-dark.png";
import IconKanbanDark from "../../../../assets/images/logo-icon-light.png";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={cls["header"]}>
      <div className={cls["container"]}>
        <div className={cls["header__block"]}>
          <div className={cls["header__logo"]}>
            <Link to={AppRoutes.MAIN}>
              {/* Иконки скачаны на https://www.flaticon.com/ru/free-icons иконки от Smashicons - Flaticon*/}
              <img
                src={theme === "_light" ? IconKanbanDark : IconKanbanLight}
                alt="Kanban Logo"
              />
            </Link>
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
