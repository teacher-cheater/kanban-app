import { useContext, useState } from "react";
import ThemeSwitcher from "../../../../features/theme-toggle/ui/ThemeSwitcher";
import BaseButton from "../../../../shared/button/BaseButton";
import PopupExit from "../../../../shared/popup/ui/PopupExit/PopupExit";
import { AuthContext } from "../../../../app/providers/router/AuthProvider/AuthContext";

import styles from "../UserMenu/UserMenu.module.scss";

export default function UserMenu() {
  const { user, logout } = useContext(AuthContext);
  const [isPopupExitOpen, setIsPopupExitOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleOpen = () => setIsPopupExitOpen(true);
  const handleClose = () => {
    console.log("handleClose", handleClose);
    setIsPopupExitOpen(false);
  };
  console.log(handleClose);
  
  const handleModalOpen = () => setIsModal(true);
  const handleModalClose = () => setIsModal(false);

  return (
    <div className={styles.userMenu}>
      <div onClick={handleModalOpen} className={styles.userMenuInfo}>
        {user.name}
      </div>
      {isModal && (
        <div className={styles.popUserSet}>
          <div className={styles.closeBtn} onClick={handleModalClose}></div>
          <p className={styles.name}>{user.name}</p>
          <p className={styles.mail}>{user.login}</p>
          <ThemeSwitcher />
          <BaseButton textBtn={"Выйти"} type={"button"} onClick={handleOpen} />
          {isPopupExitOpen && <PopupExit handleClose={handleClose} />}
        </div>
      )}
    </div>
  );
}
