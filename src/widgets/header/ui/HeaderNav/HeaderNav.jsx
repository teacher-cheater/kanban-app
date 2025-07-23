import UserMenu from "../UserMenu/UserMenu";
import BaseButton from "../../../../shared/button/BaseButton";
import cls from "./HeaderNav.module.scss";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../shared/lib/appRoutes";

export default function HeaderNav() {
  const navigate = useNavigate();

  return (
    <nav className={cls["header-nav"]}>
      <BaseButton
        className={cls["header-nav__btn-main-new _hover01"]}
        textBtn={"Создать новую задачу"}
        primary={true}
        onClick={() => navigate(AppRoutes.ADD_TASK)}
      />
      <UserMenu />
    </nav>
  );
}
