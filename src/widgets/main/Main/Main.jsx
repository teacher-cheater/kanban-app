import { useContext } from "react";
import { TasksContext } from "../../../app/providers/TasksProvider/TasksContext";
import "react-loading-skeleton/dist/skeleton.css";
import cls from "./Main.module.scss";
import MainBoard from "../../main-board/MainBoard/MainBoard";

export default function Main() {
  const { tasks, loading, error } = useContext(TasksContext);

  return (
    <main className={cls["main"]}>
      <div className={cls["container"]}>
        <MainBoard
          tasks={tasks || []}
          isLoading={loading}
          isError={!!error}
          errorMessage={error}
        />
      </div>
    </main>
  );
}
