import { useContext } from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import cls from "./Header.module.scss";
import { ThemeContext } from "../../../../app/providers/ThemeApp/ThemeContext";
import IconKanbanLight from "../../../../assets/images/icon-kanban.svg";
// import IconKanbanDark from "../../../../assets/images/icon-kanban-dark.svg";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={cls["header"]}>
      <div className={cls["container"]}>
        <div className={cls["header__block"]}>
          <div className={cls["header__logo"]}>
            <a href="/" target="_self">
              <img
                src={theme === "_light" ? IconKanbanLight : IconKanbanLight}
                alt="Kanban Logo"
              />
            </a>
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
