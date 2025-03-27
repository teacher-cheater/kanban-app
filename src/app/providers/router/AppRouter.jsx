import { Routes, Route } from "react-router-dom";
import MainPage from "../../../pages/ui/MainPage/MainPage";
import SignInPage from "../../../pages/ui/SignInPage/SignInPage";
import SignUpPage from "../../../pages/ui/SignUpPage/SignUpPage";
import NotFoundPage from "../../../pages/ui/NotFoundPage/NotFoundPage";
import { PrivateRoute } from "./ProvateRoute";

export default function AppRouter({ isAuth, setIsAuth }) {
  return (
    <Routes>
      {/* Главная страница */}
      <Route path="/" element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          {/* <Route path="/task/add" element={<NewTaskPage />} /> */}
          {/* <Route path="/task/:id" element={<TaskPage />} /> */}
          {/* <Route path="/train" element={<TrainPage />} /> */}
        </Route>
      </Route>
      {/* Страница входа */}
      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      {/* Страница регистрации */}
      <Route path="/sign-up" element={<SignUpPage />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
