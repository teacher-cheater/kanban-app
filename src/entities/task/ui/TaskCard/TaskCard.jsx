import cls from "./TaskCard.module.scss";

export default function TaskCard(props) {
  const { task, themeLabel } = props;

  const clsLabel = themeLabel ? `${themeLabel}` : "";

  function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    return new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
      .format(date)
      .replace(/\//g, ".");
  }

  return (
    <article className={cls["card-task"]}>
      <div className={cls["card-task__item"]}>
        <div className={cls["card-task__group"]}>
          <div className={`${cls["card-task__theme"]} ${clsLabel}`}>
            {task.topic}
          </div>
          <a href="#popBrowse" target="_self">
            <div className={cls["card-task__btn"]}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
        <div className={cls["card-task__content"]}>
          <a href="" target="_blank">
            <h3 className={cls["card-task__title"]}>{task.title}</h3>
          </a>
          <div className={cls["card-task__date-info"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className={cls["card-task__date"]}>{formatDate(task.date)}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
