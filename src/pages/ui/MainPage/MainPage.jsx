import CreateTask from "../../../shared/popup/CreateTask";
import Header from "../../../widgets/header/ui/Header/Header";
import Main from "../../../widgets/main/Main/Main";
import TasksProvider from "../../../app/providers/TasksProvider/TasksProvider";

export default function MainPage() {
  return (
    <div className="wrapper">
      <TasksProvider>
        <CreateTask />
        <Header />
        <Main />
      </TasksProvider>
    </div>
  );
}
