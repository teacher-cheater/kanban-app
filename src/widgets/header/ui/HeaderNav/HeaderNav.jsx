import BaseButton from "../../../../shared/button/BaseButton";
import cls from "./HeaderNav.module.scss";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../shared/lib/appRoutes";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../app/providers/router/AuthProvider/AuthContext";
import UserMenu from "../UserMenu/UserMenu";
import IconArrow from "../../../../assets/images/arrow.svg";

export default function HeaderNav() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={cls["header-nav"]}>
      <div className={cls["header-nav__content"]}>
        <BaseButton
          className={cls["header-nav__btn-main-new"]}
          textBtn={"Создать новую задачу"}
          primary={true}
          onClick={() => navigate(AppRoutes.ADD_TASK)}
        />
        <div onClick={() => handleToggle()} className={cls["header-nav__name"]}>
          {user.name}
          <img
            src={IconArrow}
            alt="arrow"
            className={`${
              isOpen ? cls["header-nav__icon--rotate"] : cls["header-nav__icon"]
            }`}
          />
        </div>
      </div>
      {isOpen && <UserMenu isOpen={isOpen} handleToggle={handleToggle} />}
    </div>
  );
}
