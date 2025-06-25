import TaskCard from "../../../../entities/task/ui/TaskCard";

export default function CardColumn({ tasks }) {
  return (
    <div className="cards">
      <TaskCard tasks={tasks} themeLabel={"_orange"} />
      {/* <TaskCard task={task} label={task.topic} themeLabel={"_green"} />
      <TaskCard task={task} label={task.topic} themeLabel={"_orange"} />
      <TaskCard task={task} label={task.topic} themeLabel={"_purple"} />
      <TaskCard task={task} label={task.topic} themeLabel={"_orange"} /> */}
    </div>
  );
}
