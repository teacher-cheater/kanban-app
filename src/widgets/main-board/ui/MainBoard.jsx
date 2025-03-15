import StatusColumn from "./StatusColumn/StatusColumn";

export default function MainBoard({ loadingTask }) {
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
        {allStatus.map((status, index) => (
          <StatusColumn status={status} key={index} loadingTask={loadingTask} />
        ))}
      </div>
    </div>
  );
}
