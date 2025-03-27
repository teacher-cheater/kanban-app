import ThemeSwitcher from "../../../features/theme-toggle/ui/ThemeSwitcher";
import BaseButton from "../../../shared/button/BaseButton";
export default function UserMenu({handleLogout}) {
  return (
    <>
      <a href="#user-set-target" className="header__user _hover02">
        Ivan Ivanov
      </a>
      <div className="header__pop-user-set pop-user-set" id="user-set-target">
        <a href="">x</a>
        <p className="pop-user-set__name">Ivan Ivanov</p>
        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
        <ThemeSwitcher />
        <BaseButton textBtn={"Выйти"} type={"button"} onClick={handleLogout} />
        {/* <button type="button" className="_hover03">
          <a href="#popExit">Выйти</a>
        </button> */}
      </div>
    </>
  );
}
