import UserMenu from "../ui/UserMenu/UserMenu";
import BaseButton from "../../../shared/button/BaseButton";

export default function HeaderNav({handleLogout}) {
  return (
    <nav className="header__nav">
      {/* <button onClick={handleLogout} className="header__btn-main-new _hover01" id="btnMainNew">
        <a href="#popNewCard">Создать новую задачу</a>
      </button> */}
      <BaseButton className="header__btn-main-new _hover01" textBtn={"Создать новую задачу"}  />
      <UserMenu handleLogout={handleLogout} />
    </nav>
  );
}
