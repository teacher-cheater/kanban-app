import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BaseButton from "../../../../shared/button/BaseButton";
import BaseInput from "../../../../shared/input/BaseInput";
import styles from "./AuthForm.module.scss";


export default function AuthForm({ isSignUp, setIsAuth, isAuth }) {

  const [isValidate, setIsValidate] = useState(false);
  
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{isSignUp ? "Регистрация" : "Вход"}</h2>
        <form className={styles.container}>
          <div className={styles.inputWrapper}>
            {isSignUp && (
              <BaseInput
                type="text"
                name="login"
                id="username"
                placeholder="Введите логин"
              />
            )}
            <BaseInput
              type="text"
              name="login"
              id="login-email"
              placeholder="Эл. почта"
            />
            <BaseInput
              type="password"
              name="login"
              id="login-password"
              placeholder="Пароль"
            />
          </div>
          {isValidate && (
            <div className={styles.loginError}>
              Введенные вами данные не распознаны. Проверьте свой логин и пароль и
              повторите попытку входа.
          </div> )}
          <BaseButton
            textBtn={isSignUp ? "Зарегистрироваться" : "Войти"}
            type={"button"}
            onClick={handleLogin}
          />
        </form>
        {!isSignUp && (
          <div className={styles.formGroup}>
            <p>Нужно зарегистрироваться?</p>
            <Link to="/sign-up">Регистрируйтесь здесь</Link>
          </div>
        )}
        {isSignUp && (
          <div className={styles.formGroup}>
            <p>Уже есть аккаунт?</p>
            <Link to="/sign-in"> Войдите здесь</Link>
          </div>
        )}
      </div>
    </div>
  );
}
