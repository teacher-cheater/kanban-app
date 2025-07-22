import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../app/providers/router/AuthProvider/AuthContext";
import { TasksContext } from "../../../../app/providers/TasksProvider/TasksContext";

import { AppRoutes } from "../../../lib/appRoutes";
import { deleteTask, updateTask } from "../../../api/api";

import Calendar from "../../../../widgets/calendar/Calendar";
import BaseButton from "../../../button/BaseButton";
import FormTextarea from "../../../form-textarea/FormTextarea";

import { statusList } from "../../../lib/statusList";
import { categories } from "../../../lib/categories";
import cls from "./PopBrowse.module.scss";

export default function PopBrowse() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { tasks, setTasks } = useContext(TasksContext);
  const [isEdit, setIsEdit] = useState(false);
  const [task, setTask] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTask(tasks?.find(task => task?._id === id));
  }, [tasks, id]);

  const handlerUpdateTask = e => {
    if (!task.description || !task.date || !task.status) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    updateTask({ task, token: user.token })
      .then(res => {
        setTasks(res.tasks);
        navigate(AppRoutes.MAIN);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  const handlerDeleteTask = e => {
    deleteTask({ task, token: user.token })
      .then(res => {
        setTasks(res.tasks);
        navigate(AppRoutes.MAIN);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  const currentCategory =
    categories.find(cat => cat.id === task?.topic) || categories[0];

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
              <div className={cls["categories-theme"]}>
                <p className={currentCategory.className}>
                  {currentCategory.name}
                </p>
              </div>
            </div>
            <div className={cls["pop-browse__status status"]}>
              <p className={cls["status__subttle"]}>Статус</p>
              <div className={cls["status__themes"]}>
                {isEdit ? (
                  statusList.map(status => (
                    <div
                      className={`${cls["status__theme"]} ${
                        task.status === status
                          ? cls["status__theme--active"]
                          : ""
                      }`}
                      key={status}
                    >
                      <input
                        type="radio"
                        name="status"
                        value={status}
                        className={cls["status__input"]}
                        checked={task.status === status}
                        onChange={() => setTask({ ...task, status })}
                      />
                      <p>{status}</p>
                    </div>
                  ))
                ) : (
                  <div className={cls["status__theme"]}>
                    <p>{task?.status}</p>
                  </div>
                )}
              </div>
            </div>
            <div className={cls["pop-browse__wrap"]}>
              <FormTextarea isEdit={isEdit} task={task} setTask={setTask} />
              <div className={cls["pop-new-card__calendar"]}>
                <Calendar />
              </div>
            </div>
            {!isEdit && (
              <div className={cls["pop-browse__btn-browse"]}>
                <div className={cls["pop-browse__btn-group"]}>
                  <BaseButton
                    onClick={() => setIsEdit(prev => !prev)}
                    textBtn={"Редактировать задачу"}
                    type="button"
                  />
                  <BaseButton
                    textBtn={"Удалить задачу"}
                    type="button"
                    onClick={() => handlerDeleteTask()}
                  />
                </div>
                <Link
                  className={cls["pop-browse__close-link"]}
                  to={AppRoutes.MAIN}
                >
                  Закрыть
                </Link>
              </div>
            )}
            {isEdit && (
              <div className={cls["pop-browse__btn-edit"]}>
                <div className={cls["pop-browse__btn-group"]}>
                  <BaseButton
                    onClick={() => handlerUpdateTask()}
                    textBtn={"Сохранить"}
                    type="button"
                    primary={true}
                  />
                  <BaseButton
                    onClick={() => setIsEdit(false)}
                    textBtn={"Отменить"}
                    type="button"
                  />
                  <BaseButton textBtn={"Удалить задачу"} type="button" />
                </div>
                <div className={cls["pop-browse__btn-close"]}>
                  <Link to={AppRoutes.MAIN}>Закрыть</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
