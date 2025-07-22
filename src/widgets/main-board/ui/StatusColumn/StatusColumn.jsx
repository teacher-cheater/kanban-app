import ColumnTitle from "../../../../entities/task/ui/ColumnTitle/ColumnTitle";
import CardColumn from "../CardColumn/CardColumn";

import cls from "./StatusColumn.module.scss";
import StatusColumnSkeleton from "./StatusColumnSkeleton";

export default function StatusColumn({ tasks, status, isLoading }) {
  return (
    <div className={cls["status-column"]}>
      <ColumnTitle>{status}</ColumnTitle>
      {isLoading ? (
        <StatusColumnSkeleton />
      ) : (
        <CardColumn status={status} tasks={tasks} />
      )}
    </div>
  );
}
