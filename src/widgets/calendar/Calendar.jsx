import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function Calendar(props) {
  const { selected, setSelected, task } = props;
  console.log("selected", selected);

  return (
    <DayPicker
      animate
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected
          ? `Selected: ${selected.toLocaleDateString()}`
          : "Выберите дату"
      }
    />
  );
}
