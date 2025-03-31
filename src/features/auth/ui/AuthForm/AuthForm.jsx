import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BaseButton from "../../../../shared/button/BaseButton";
import BaseInput from "../../../../shared/input/BaseInput";
import { signIn, signUp } from "../../api/authApi";
import styles from "./AuthForm.module.scss";

export default function AuthForm({ isSignUp, setIsAuth, isAuth }) {
  const [isValidate, setIsValidate] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({
    login: "",
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState({
    login: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  const validateForm = () => {
    const errors = { login: "", email: "", password: "" };
    let isValid = true;

    if (isSignUp && !userData.login.trim()) {
      errors.login = true;
      isValid = false;
    }

    if (!userData.email.trim()) {
      errors.email = true;
      isValid = false;
    }

    if (!userData.password.trim()) {
      errors.password = true;
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const data = !isSignUp
        ? await signIn({ email: userData.email, password: userData.password })
        : await signUp(userData);

      if (data) {
        setIsAuth(true);
        localStorage.setItem("token", JSON.stringify(data.token));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{isSignUp ? "Регистрация" : "Вход"}</h2>
        <form className={styles.container} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            {isSignUp && (
              <BaseInput
                type="text"
                name="login"
                id="login"
                placeholder="Введите логин"
                onChange={handleChange}
                error={errors.login}
                value={userData.login}
              />
            )}
            <BaseInput
              type="text"
              name="email"
              id="email"
              placeholder="Эл. почта"
              onChange={handleChange}
              error={errors.email}
              value={userData.email}
            />
            <BaseInput
              type="password"
              name="password"
              id="password"
              placeholder="Пароль"
              onChange={handleChange}
              error={errors.password}
              value={userData.password}
            />
          </div>
          <div className={styles.loginError}>{errorMessage}</div>
          <BaseButton
            textBtn={isSignUp ? "Зарегистрироваться" : "Войти"}
            type="submit"
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
