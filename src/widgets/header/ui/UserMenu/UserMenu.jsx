import { useContext, useState } from "react";
import ThemeSwitcher from "../../../../features/theme-toggle/ui/ThemeSwticher/ThemeSwitcher";
import BaseButton from "../../../../shared/button/BaseButton";
import { AuthContext } from "../../../../app/providers/router/AuthProvider/AuthContext";

import cls from "../UserMenu/UserMenu.module.scss";
import { AppRoutes } from "../../../../shared/lib/appRoutes";
import { useNavigate } from "react-router-dom";

export default function UserMenu({ isOpen, handleToggle }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <div className={cls["user-menu"]}>
          <div className={cls["user-menu__popup"]}>
            <div
              className={cls["user-menu__close-btn"]}
              onClick={() => handleToggle()}
            />
            <div className={cls["user-menu__data"]}>
              <p className={cls["user-menu__name"]}>{user.name}</p>
              <p className={cls["user-menu__email"]}>{user.login}</p>
            </div>
            <ThemeSwitcher />
            <BaseButton
              textBtn={"Выйти"}
              type={"button"}
              onClick={() => navigate(AppRoutes.EXIT)}
              primary={true}
            />
          </div>
        </div>
      )}
    </>
  );
}
