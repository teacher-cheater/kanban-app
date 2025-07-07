import { useParams } from "react-router-dom";
import Calendar from "../../widgets/calendar/Calendar";
import BaseButton from "../button/BaseButton";

export default function PopBrowse() {
  // const { onClose, id, task } = props;
  const { id } = useParams();
  const { tasks, setTasks } = useContext(TasksContext);
  const [isEdit, setIsEdit] = useState(false);
  console.log("id", id);
  console.log("tasks", tasks);

  return (
    <div className="pop-browse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <Calendar />
              </div>
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <BaseButton textBtn={"Редактировать задачу"} type="button" />
                <BaseButton textBtn={"Удалить задачу"} type="button" />
              </div>
              <BaseButton textBtn={"Закрыть"} type="button" />
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <BaseButton textBtn={"Сохранить"} type="button" />
                <BaseButton textBtn={"Отменить"} type="button" />
                <BaseButton textBtn={"Удалить задачу"} type="button" />
              </div>
              <BaseButton textBtn={"Закрыть"} type="button" onClick={onClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
