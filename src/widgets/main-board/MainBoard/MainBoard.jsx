import { statusList } from "../../../shared/lib/statusList";
import StatusColumn from "../ui/StatusColumn/StatusColumn";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import cls from "./MainBoard.module.scss";

export default function MainBoard(props) {
  const { isLoading, tasks, onDrop } = props;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={cls["main-board"]}>
        <div className={cls["main-board__content"]}>
          {statusList.map((status, index) => {
            const filteredTasks = tasks.filter(task => task.status === status);
            return (
              <StatusColumn
                status={status}
                tasks={filteredTasks}
                key={status}
                isLoading={isLoading}
                onDrop={onDrop}
              />
            );
          })}
        </div>
      </div>
    </DndProvider>
  );
}
