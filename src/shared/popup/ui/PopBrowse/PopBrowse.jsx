import { Link, useNavigate, useParams } from "react-router-dom";
import Calendar from "../../../../widgets/calendar/Calendar";
import BaseButton from "../../../button/BaseButton";
import { updateTask } from "../../../api/api";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../app/providers/router/AuthProvider/AuthContext";
import { TasksContext } from "../../../../app/providers/TasksProvider/TasksContext";
import { AppRoutes } from "../../../lib/appRoutes";

import cls from "./PopBrowse.module.scss";

export default function PopBrowse() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { tasks, setTasks } = useContext(TasksContext);
  const [isEdit, setIsEdit] = useState(false);
  const [task, setTask] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    setTask(tasks.find(task => task?._id === id));
  }, [tasks, id]);

  const handlerUpdateTask = e => {
    if (!task.description || !task.date || !task.status) {
      setError("Пожалуйста, заполните все поля");
    }

    updateTask({ task, token: user.token }).then(res => {
      setTasks(res.task);
      navigate(AppRoutes.MAIN);
    });
  };

  return (
    <div className={cls["pop-browse"]}>
      <div className={cls["pop-browse__container"]}>
        <div className={cls["pop-browse__block"]}>
          <div className={cls["pop-browse__content"]}>
            <div className={cls["pop-browse__top-block"]}>
              <h3 className={cls["pop-browse__ttl"]}>
                {error ? (
                  <div className={cls["pop-browse__error"]}> {error} </div>
                ) : (
                  task?.title
                )}
              </h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{task?.topic}</p>
              </div>
            </div>
            <div className={cls["pop-browse__status status"]}>
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme">
                  <p>{task?.status}</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme">
                  <p>В работе</p>
                </div>
                <div className="status__theme">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div className={cls["pop-browse__wrap"]}>
              <form className={cls["pop-browse__form form-browse"]}>
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
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
              <div className={cls["pop-new-card__calendar"]}>
                <Calendar />
              </div>
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            {!isEdit && (
              <div className={cls["pop-browse__btn-browse "]}>
                <div className="btn-group">
                  <BaseButton
                    onClick={() => setIsEdit(prev => !prev)}
                    textBtn={"Редактировать задачу"}
                    type="button"
                  />
                  <BaseButton textBtn={"Удалить задачу"} type="button" />
                </div>
                <Link to={AppRoutes.MAIN}>Закрыть</Link>
              </div>
            )}
            {isEdit && (
              <div className={cls["pop-browse__btn-edit"]}>
                <div className="btn-group">
                  <BaseButton
                    onClick={() => handlerUpdateTask()}
                    textBtn={"Сохранить"}
                    type="button"
                  />
                  <BaseButton
                    onClick={() => setIsEdit(false)}
                    textBtn={"Отменить"}
                    type="button"
                  />
                  <BaseButton textBtn={"Удалить задачу"} type="button" />
                </div>
                <Link to={AppRoutes.MAIN}>Закрыть</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
