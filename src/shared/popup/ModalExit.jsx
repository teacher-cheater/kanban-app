import { useContext } from "react";
import { AuthContext } from "../../app/providers/router/AuthProvider/AuthContext";
import BaseButton from "../button/BaseButton";

export default function ModalExit({ handleClose }) {
  const { logout } = useContext(AuthContext);

  return (
    <form className="pop-exit__form" id="formExit">
      <div className="pop-exit__form-group">
        <BaseButton
          textBtn={"Да, выйти"}
          type={"button"}
          onClick={logout}
          className="pop-exit__exit-yes _hover01"
        />
        <BaseButton
          textBtn={"Нет, остаться"}
          type={"button"}
          onClick={handleClose}
          className="pop-exit__exit-no _hover03"
        />
      </div>
    </form>
  );
}
