import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import MainPage from "../../../pages/ui/MainPage/MainPage";
import SignInPage from "../../../pages/ui/SignInPage/SignInPage";
import SignUpPage from "../../../pages/ui/SignUpPage/SignUpPage";
import NotFoundPage from "../../../pages/ui/NotFoundPage/NotFoundPage";

export default function AppRouter() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      {/* Главная страница */}
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage setIsAuth={setIsAuth} />}>
          {/* <Route path="/task/add" element={<NewTaskPage />} /> */}
          {/* <Route path="/task/:id" element={<TaskPage />} /> */}
          {/* <Route path="/train" element={<TrainPage />} /> */}
        </Route>
      </Route>
      {/* Страница входа */}
      <Route
        path="/sign-in"
        element={<SignInPage setIsAuth={setIsAuth} isAuth={isAuth} />}
      />
      {/* Страница регистрации */}
      <Route
        path="/sign-up"
        element={<SignUpPage setIsAuth={setIsAuth} isAuth={isAuth} />}
      />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
