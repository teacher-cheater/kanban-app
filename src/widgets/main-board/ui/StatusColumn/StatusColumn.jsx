import ColumnTitle from "../../../../entities/task/ui/ColumnTitle/ColumnTitle";
import CardColumn from "../CardColumn/CardColumn";
import { useDrop } from "react-dnd";
import StatusColumnSkeleton from "./StatusColumnSkeleton";
import { ItemTypes } from "../../../../shared/lib/itemTypes";
import cls from "./StatusColumn.module.scss";

export default function StatusColumn(props) {
  const { tasks, status, isLoading, onDrop } = props;
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: item => onDrop(item, status),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`${cls["status-column"]} ${isOver ? cls["over"] : ""}`}
    >
      <ColumnTitle>{status}</ColumnTitle>
      {isLoading ? (
        <StatusColumnSkeleton />
      ) : (
        <CardColumn status={status} tasks={tasks} onDrop={onDrop} />
      )}
    </div>
  );
}
