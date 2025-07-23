import { useContext, useState } from "react";
import Form from "../../../../widgets/form-new/ui/Form";
import BaseButton from "../../../button/BaseButton";
import CategoriesLabel from "../../../CategoriesLabel/CategoriesLabel";
import { useNavigate } from "react-router-dom";
import { addTask } from "../../../api/api";
import { TasksContext } from "../../../../app/providers/TasksProvider/TasksContext";
import { AuthContext } from "../../../../app/providers/router/AuthProvider/AuthContext";
import cls from "./NewCard.module.scss";
import Calendar from "../../../../widgets/calendar/Calendar";
import { AppRoutes } from "../../../lib/appRoutes";

export default function NewCard() {
  const { setTasks } = useContext(TasksContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [date, setDate] = useState(new Date().toISOString());

  const [task, setTask] = useState({
    title: "",
    topic: "Research",
    status: "Без статуса",
    description: "",
    date: null,
  });

  const createTask = e => {
    // e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!task.title || !task.description || !task.date) {
      setError("Пожалуйста, заполните все поля");
      setIsLoading(false);
      return;
    }

    addTask({ task, token: user.token })
      .then(res => {
        setTasks(res.tasks);
        navigate(AppRoutes.MAIN);
        task.title = "";
        task.description = "";
      })
      .catch(() => {
        setError("Что-то пошло не так. Попробуйте еще раз");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={cls["pop-new-card"]}>
      <div className={cls["pop-new-card__container"]}>
        <div className={cls["pop-new-card__block"]}>
          <div className={cls["pop-new-card__content"]}>
            <h3 className={cls["pop-new-card__ttl"]}>
              {error ? (
                <div className={cls["pop-new-card__error"]}>{error}</div>
              ) : (
                "Создание задачи"
              )}
            </h3>
            <button
              onClick={() => navigate(AppRoutes.MAIN)}
              className={cls["pop-new-card__close"]}
            >
              &#10006;
            </button>
            <div className={cls["pop-new-card__wrap"]}>
              <Form
                task={task}
                setTask={setTask}
                title={task.title}
                description={task.description}
              />
              <div className={cls["pop-new-card__calendar"]}>
                <Calendar
                  selected={task.date}
                  setSelected={date => setTask({ ...task, date })}
                />
              </div>
            </div>
            <CategoriesLabel topic={task.topic} setTask={setTask} task={task} />
            <BaseButton
              textBtn={isLoading ? "Создание..." : "Создать задачу"}
              type={"button"}
              onClick={() => createTask()}
              className={cls["form-new__create"]}
              disabled={isLoading}
              primary={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
