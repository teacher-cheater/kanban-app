import TaskCard from "../../../../entities/task/ui/TaskCard/TaskCard";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../../shared/lib/itemTypes";

export default function CardColumn(props) {
  const { tasks, status, onDrop } = props;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: item => onDrop(item, status),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  function getThemeLabel(topic) {
    const topicColors = {
      web: "_orange",
      research: "_green",
      copywriting: "_purple",
    };

    return topicColors[topic] || "_gray";
  }

  return (
    <div ref={drop} className={`cards ${isOver ? "over" : ""}`}>
      {tasks.map(task => (
        <TaskCard
          task={task}
          themeLabel={getThemeLabel(task.topic)}
          status={status}
          key={task._id}
        />
      ))}
    </div>
  );
}
