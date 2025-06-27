import { useContext, useState } from "react";
import ThemeSwitcher from "../../../../features/theme-toggle/ui/ThemeSwitcher";
import BaseButton from "../../../../shared/button/BaseButton";
import PopupExit from "../../../../shared/popup/ui/PopupExit/PopupExit";
import { AuthContext } from "../../../../app/providers/router/AuthProvider/AuthContext";

import styles from "../UserMenu/UserMenu.module.scss";

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
    <div className={styles["user-menu"]}>
      <div onClick={handleModalOpen} className={styles["user-menu__info"]}>
        {user.name}
      </div>
      {isModal && (
        <div className={styles["user-menu__popup"]}>
          <div
            className={styles["user-menu__close-btn"]}
            onClick={handleModalClose}
          ></div>
          <p className={styles["user-menu__name"]}>{user.name}</p>
          <p className={styles["user-menu__email"]}>{user.login}</p>
          <ThemeSwitcher />
          <BaseButton textBtn={"Выйти"} type={"button"} onClick={handleOpen} />
          {isPopupExitOpen && <PopupExit handleClose={handleClose} />}
        </div>
      )}
    </div>
  );
}
