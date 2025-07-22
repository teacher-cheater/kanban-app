import cls from "./Form.module.scss";

export default function Form(props) {
  const { setTask, description, title, task } = props;

  return (
    <form className={cls["form-new"]} id="formNewCard">
      <div className={cls["form-new__block"]}>
        <label htmlFor="formTitle" className={cls["form-new__subttle"]}>
          Название задачи
        </label>
        <input
          className={cls["form-new__input"]}
          type="text"
          name="name"
          id="formTitle"
          placeholder="Введите название задачи..."
          autoFocus
          value={title}
          onChange={e => setTask({ ...task, title: e.target.value })}
        />
      </div>
      <div className={cls["form-new__block"]}>
        <label htmlFor="textArea" className={cls["form-new__subttle"]}>
          Описание задачи
        </label>
        <textarea
          className={cls["form-new__area"]}
          name="text"
          id="textArea"
          placeholder="Введите описание задачи..."
          value={description}
          onChange={e => setTask({ ...task, description: e.target.value })}
        />
      </div>
    </form>
  );
}
