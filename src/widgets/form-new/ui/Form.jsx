import cls from "./Form.module.scss";

export default function Form() {
  return (
    <form className={cls["form-new"]} id="formNewCard">
      <div className={cls["form-new__block"]}>
        <label htmlFor="formTitle" className="subttl">
          Название задачи
        </label>
        <input
          className={cls["form-new__input"]}
          type="text"
          name="name"
          id="formTitle"
          placeholder="Введите название задачи..."
          autoFocus
        />
      </div>
      <div className={cls["form-new__block"]}>
        <label htmlFor="textArea" className="subttl">
          Описание задачи
        </label>
        <textarea
          className={cls["form-new__area"]}
          name="text"
          id="textArea"
          placeholder="Введите описание задачи..."
        />
      </div>
    </form>
  );
}
