import { useContext } from "react";
import { AuthContext } from "../../../../app/providers/router/AuthProvider/AuthContext";
import BaseButton from "../../../button/BaseButton";
import { AppRoutes } from "../../../lib/appRoutes";

import cls from "./ModalExit.module.scss";

export default function ModalExit() {
  const { logout } = useContext(AuthContext);

  return (
    <form className={cls["exit-form"]}>
      <div className={cls["exit-form__form-group"]}>
        <BaseButton
          textBtn={"Да, выйти"}
          type={"button"}
          onClick={logout}
          className={cls["exit-form__exit-yes"]}
          primary={true}
        />
        <BaseButton
          textBtn={"Нет, остаться"}
          type={"button"}
          className={cls["exit-form__exit-no"]}
          to={AppRoutes.MAIN}
        />
      </div>
    </form>
  );
}
