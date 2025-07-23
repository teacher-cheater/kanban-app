import { useContext } from "react";
import { TasksContext } from "../../../app/providers/TasksProvider/TasksContext";
import "react-loading-skeleton/dist/skeleton.css";
import cls from "./Main.module.scss";
import MainBoard from "../../main-board/MainBoard/MainBoard";
import { AuthContext } from "../../../app/providers/router/AuthProvider/AuthContext";

export default function Main() {
  const { tasks, loading, error, updateTaskStatus } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  const handleDrop = async (item, newStatus) => {
    try {
      await updateTaskStatus(item.id, newStatus, user.token);
    } catch (err) {
      console.error("Failed to update task status:", err);
    }
  };

  return (
    <main className={cls["main"]}>
      <div className={cls["container"]}>
        <MainBoard
          key={tasks.length}
          tasks={tasks || []}
          isLoading={loading}
          isError={!!error}
          errorMessage={error}
          onDrop={handleDrop}
        />
      </div>
    </main>
  );
}
