import { Outlet } from "react-router-dom";
import CreateTask from "../../../shared/popup/CreateTask";
import NewCard from "../../../shared/popup/NewCard";
import PopupExit from "../../../shared/popup/PopupExit";
import Header from "../../../widgets/header/ui/Header";
import Main from "../../../widgets/main/Main/Main";

export default function MainPage({ setIsAuth }) {
  return (
    <div className="wrapper">
      <PopupExit />
      <NewCard />
      <CreateTask />
      <Header setIsAuth={setIsAuth} />
      <Main />
      <Outlet />
    </div>
  );
}
