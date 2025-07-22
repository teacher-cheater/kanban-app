import { useState } from "react";
import UserMenu from "../UserMenu/UserMenu";
import BaseButton from "../../../../shared/button/BaseButton";
import NewCard from "../../../../shared/popup/ui/NewCard/NewCard";
import cls from "./HeaderNav.module.scss";

export default function HeaderNav() {
  const [isModal, setIsModal] = useState(false);

  const handleOpen = () => setIsModal(true);
  const handleClose = () => setIsModal(false);

  return (
    <nav className={cls["header-nav"]}>
      <BaseButton
        className={cls["header-nav__btn-main-new _hover01"]}
        textBtn={"Создать новую задачу"}
        onClick={handleOpen}
        primary={true}
      />
      <UserMenu />
      {isModal && <NewCard handleClose={handleClose} />}
    </nav>
  );
}
