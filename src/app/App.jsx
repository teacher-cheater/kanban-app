import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "../pages/ui/MainPage/MainPage";
import SignInPage from "../pages/ui/SignInPage/SignInPage";
import SignUpPage from "../pages/ui/SignUpPage/SignUpPage";
import NotFoundPage from "../pages/ui/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>
      {/* Главная страница */}
      <Route path="/" element={<MainPage />} />
      {/* Страница входа */}
      <Route path="/sign-in" element={<SignInPage />} />
      {/* Страница регистрации */}
      <Route path="/sign-up" element={<SignUpPage />} />
      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
