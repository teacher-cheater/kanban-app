import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import MainPage from "../../../pages/ui/MainPage/MainPage";
import SignInPage from "../../../pages/ui/SignInPage/SignInPage";
import SignUpPage from "../../../pages/ui/SignUpPage/SignUpPage";
import NotFoundPage from "../../../pages/ui/NotFoundPage/NotFoundPage";
import AddTaskPage from "../../../pages/ui/AddTask/AddTask";
import TaskPage from "../../../pages/ui/Task/Task";
import { AppRoutes } from "../../../shared/lib/appRoutes";
import UserMenu from "../../../widgets/header/ui/UserMenu/UserMenu";
import PopupExit from "../../../shared/popup/ui/PopupExit/PopupExit";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={AppRoutes.MAIN} element={<MainPage />}>
          <Route path={AppRoutes.ADD_TASK} element={<AddTaskPage />} />
          <Route path={AppRoutes.TASK} element={<TaskPage />} />
          <Route path={AppRoutes.EXIT} element={<PopupExit />} />
        </Route>
      </Route>
      <Route path={AppRoutes.LOGIN} element={<SignInPage />} />
      <Route path={AppRoutes.REGISTER} element={<SignUpPage />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
