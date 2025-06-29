import { useContext, useState } from "react";
import ThemeSwitcher from "../../../../features/theme-toggle/ui/ThemeSwticher/ThemeSwitcher";
import BaseButton from "../../../../shared/button/BaseButton";
import PopupExit from "../../../../shared/popup/ui/PopupExit/PopupExit";
import { AuthContext } from "../../../../app/providers/router/AuthProvider/AuthContext";

import cls from "../UserMenu/UserMenu.module.scss";

export default function UserMenu() {
  const { user } = useContext(AuthContext);
  const [isPopupExitOpen, setIsPopupExitOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleOpen = () => setIsPopupExitOpen(true);
  const handleClose = () => {
    setIsPopupExitOpen(false);
  };

  const handleModalOpen = () => setIsModal(true);
  const handleModalClose = () => setIsModal(false);

  return (
    <div className={cls["user-menu"]}>
      <div onClick={handleModalOpen} className={cls["user-menu__info"]}>
        {user.name}
      </div>
      {isModal && (
        <div className={cls["user-menu__popup"]}>
          <div
            className={cls["user-menu__close-btn"]}
            onClick={handleModalClose}
          />
          <div className={cls["user-menu__data"]}>
            <p className={cls["user-menu__name"]}>{user.name}</p>
            <p className={cls["user-menu__email"]}>{user.login}</p>
          </div>
          <ThemeSwitcher />
          <BaseButton textBtn={"Выйти"} type={"button"} onClick={handleOpen} />
          {isPopupExitOpen && <PopupExit handleClose={handleClose} />}
        </div>
      )}
    </div>
  );
}
