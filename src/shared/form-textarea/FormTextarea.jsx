import cls from "./FormTextarea.module.scss";

export default function FormTextarea({ isEdit, task, setTask }) {
  return (
    <form className={cls["form-textarea"]}>
      <div className={cls["form-textarea__block"]}>
        <label htmlFor="textArea01" className={cls["form-textarea__subttle"]}>
          Описание задачи
        </label>
        <textarea
          className={cls["form-textarea__area"]}
          name="text"
          id="textArea01"
          readOnly={!isEdit}
          placeholder={task?.description}
          onChange={e => {
            setTask({ ...task, description: e.target.value });
          }}
        />
      </div>
    </form>
  );
}
