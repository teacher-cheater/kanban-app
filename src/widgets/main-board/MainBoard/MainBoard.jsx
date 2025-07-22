import { statusList } from "../../../shared/lib/statusList";
import StatusColumn from "../ui/StatusColumn/StatusColumn";
import cls from "./MainBoard.module.scss";

export default function MainBoard(props) {
  const { isLoading, tasks, isError, errorMessage } = props;

  return (
    <div className={cls["main-board"]}>
      <div className={cls["main-board__content"]}>
        {statusList.map((status, index) => {
          const filteredTasks = tasks.filter(task => task.status === status);
          return (
            <StatusColumn
              status={status}
              tasks={filteredTasks}
              key={index}
              isLoading={isLoading}
            />
          );
        })}
      </div>
    </div>
  );
}
