import { useState } from "react";
import UserMenu from "../ui/UserMenu/UserMenu";
import BaseButton from "../../../shared/button/BaseButton";
import NewCard from "../../../shared/popup/NewCard";

export default function HeaderNav() {
  const [isModal, setIsModal] = useState(false);
  console.log("isModal", isModal);

  const handleOpen = () => setIsModal(true);
  const handleClose = () => setIsModal(false);

  return (
    <nav className="header__nav">
      <BaseButton
        className="header__btn-main-new _hover01"
        textBtn={"Создать новую задачу"}
        onClick={handleOpen}
      />
      <UserMenu />
      {isModal && <NewCard handleClose={handleClose} />}
    </nav>
  );
}
