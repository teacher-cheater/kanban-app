import UserMenu from "./UserMenu";

export default function HeaderNav() {
  return (
    <nav className="header__nav">
      <button className="header__btn-main-new _hover01" id="btnMainNew">
        <a href="#popNewCard">Создать новую задачу</a>
      </button>
      <UserMenu />
    </nav>
  );
}
