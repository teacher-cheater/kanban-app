import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import cls from "./Calendar.module.scss";

export default function Calendar(props) {
  const { selected, setSelected } = props;

  return (
    <DayPicker
      className={cls.calendar}
      animate
      mode="single"
      selected={selected}
      onSelect={setSelected}
      weekStartsOn={1}
      locale="ru"
      formatters={{
        formatCaption: (date) => {
          return new Intl.DateTimeFormat("ru-RU", {
            month: "long",
            year: "numeric",
          }).format(date);
        },
      }}
      footer={
        selected ? `Выбрано: ${selected.toLocaleDateString()}` : "Выберите дату"
      }
    />
  );
}
