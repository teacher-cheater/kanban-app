import TaskCard from "../../../../entities/task/ui/TaskCard/TaskCard";

export default function CardColumn({ tasks, status }) {
  function getThemeLabel(topic) {
    const topicColors = {
      web: "_orange",
      research: "_green",
      copywriting: "_purple",
    };

    return topicColors[topic] || "_gray";
  }

  return (
    <div className="cards">
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
