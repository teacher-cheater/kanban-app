import StatusColumn from "./StatusColumn/StatusColumn";

export default function MainBoard(props) {
  const { isLoading, tasks, isError, errorMessage } = props;

  const allStatus = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <div className="main__block">
      <div className="main__content">
        {allStatus.map((status, index) => {
          const filteredTasks = tasks.filter(task => task.status === status);
          return <StatusColumn
            status={status}
            tasks={filteredTasks}
            key={index}
            isLoading={isLoading}
          />;
        })}
      </div>
    </div>
  );
}
