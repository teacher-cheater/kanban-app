import StatusColumn from "./StatusColumn/StatusColumn";

export default function MainBoard({ isLoading }) {
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
          <StatusColumn status={status} key={index} isLoading={isLoading} />
        ))}
      </div>
    </div>
  );
}
