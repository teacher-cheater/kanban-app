import ModalExit from "../../ModalExit";
import cls from "./PopupExit.module.scss";

export default function PopupExit({ handleClose }) {
  return (
    <div className={cls["pop-exit"]}>
      <div className={cls["pop-exit__container"]}>
        <div className={cls["pop-exit__block"]}>
          <div className={cls["pop-exit__ttl"]}>
            <h2>Выйти из аккаунта?</h2>
          </div>
          <ModalExit handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
}
