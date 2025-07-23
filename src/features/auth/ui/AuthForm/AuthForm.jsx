import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BaseButton from "../../../../shared/button/BaseButton";
import BaseInput from "../../../../shared/input/BaseInput";
import { signIn, signUp } from "../../api/authApi";
import { AuthContext } from "../../../../app/providers/router/AuthProvider/AuthContext";
import cls from "./AuthForm.module.scss";

export default function AuthForm({ isSignUp }) {
  const { updateUserInfo } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    login: false,
    name: false,
    password: false,
  });

  const [userData, setUserData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !userData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!userData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!userData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const data = isSignUp
        ? await signUp(userData)
        : await signIn({ login: userData.login, password: userData.password });

      if (data) {
        updateUserInfo(data);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={cls["modal-wrapper"]}>
      <div className={cls["modal"]}>
        <h2 className={cls["modal__title"]}>
          {isSignUp ? "Регистрация" : "Вход"}
        </h2>
        <form className={cls["modal__container"]} onSubmit={handleSubmit}>
          <div className={cls["modal__input-wrapper"]}>
            {isSignUp && (
              <BaseInput
                type="text"
                name="name"
                id="formname"
                placeholder="Имя"
                onChange={handleChange}
                error={errors.name}
                value={userData.name}
              />
            )}
            <BaseInput
              error={errors.login}
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
              value={userData.login}
              onChange={handleChange}
            />
            <BaseInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              onChange={handleChange}
              error={errors.password}
              value={userData.password}
              autoComplete="current-password"
            />
          </div>
          <div className={cls["modal__login-error"]}>{error}</div>
          <BaseButton
            textBtn={isSignUp ? "Зарегистрироваться" : "Войти"}
            type="submit"
            primary={true}
          />
        </form>
        {!isSignUp && (
          <div className={cls["modal__form-group"]}>
            <p>Нужно зарегистрироваться?</p>
            <Link to="/sign-up">Регистрируйтесь здесь</Link>
          </div>
        )}
        {isSignUp && (
          <div className={cls["modal__form-group"]}>
            <p>Уже есть аккаунт?</p>
            <Link to="/sign-in"> Войдите здесь</Link>
          </div>
        )}
      </div>
    </div>
  );
}
