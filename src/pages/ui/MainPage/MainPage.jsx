import { Outlet } from "react-router-dom";
import CreateTask from "../../../shared/popup/CreateTask";
import NewCard from "../../../shared/popup/NewCard";
import PopupExit from "../../../shared/popup/ui/PopupExit/PopupExit";
import Header from "../../../widgets/header/ui/Header";
import Main from "../../../widgets/main/Main/Main";
import TasksProvider from "../../../app/providers/TasksProvider/TasksProvider";

export default function MainPage() {
  return (
    <div className="wrapper">
      <TasksProvider>
        <PopupExit />
        <NewCard />
        <CreateTask />
        <Header />
        <Main />
        <Outlet />
      </TasksProvider>
    </div>
  );
}
