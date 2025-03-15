import TaskCard from "../../../../entities/task/ui/TaskCard";

export default function CardColumn() {
  return (
    <div className="cards">
      <TaskCard label={"Web Design"} themeLabel={"_orange"} />
      <TaskCard label={"Research"} themeLabel={"_green"} />
      <TaskCard label={"Web Design"} themeLabel={"_orange"} />
      <TaskCard label={"Copywriting"} themeLabel={"_purple"} />
      <TaskCard label={"Web Design"} themeLabel={"_orange"} />
    </div>
  );
}
