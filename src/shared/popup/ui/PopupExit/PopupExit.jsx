import ModalExit from "../../ModalExit";
import styles from "./PopupExit.module.scss";


export default function PopupExit({ handleClose }) {
  return (
    <div className={styles["pop-exit"]}>
      <div className={styles["pop-exit__container"]}>
        <div className={styles["pop-exit__block"]}>
          <div className={styles["pop-exit__ttl"]}>
            <h2>Выйти из аккаунта?</h2>
          </div>
          <ModalExit handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
}
