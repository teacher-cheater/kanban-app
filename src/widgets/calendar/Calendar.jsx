import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import cls from "./Calendar.module.scss";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export default function Calendar(props) {
  const { isEdit, selected, setSelected } = props;

  const safeSelected =
    selected instanceof Date && !isNaN(selected) ? selected : null;

  const formattedDate = safeSelected
    ? format(safeSelected, "dd.MM.yy", { locale: ru })
    : null;

  const footerContent = safeSelected
    ? `Выбрано: ${formattedDate}`
    : isEdit
    ? "Выберите дату"
    : "Дата не выбрана";

  return (
    <DayPicker
      className={cls.calendar}
      animate
      mode="single"
      selected={selected}
      onSelect={setSelected}
      weekStartsOn={1}
      locale="ru"
      footer={footerContent}
      modifiers={{
        disabled: isEdit
          ? {}
          : { before: new Date(2100, 0, 1), after: new Date(1900, 0, 1) },
      }}
      styles={
        isEdit
          ? {}
          : {
              day: { cursor: "default" },
              day_selected: { cursor: "default" },
              day_disabled: { cursor: "default" },
            }
      }
    />
  );
}
