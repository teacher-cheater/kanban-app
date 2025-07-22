import cls from "./ColumnTitle.module.scss";

export default function ColumnTitle({ children }) {
  return (
    <div className={cls["column-title"]}>
      <p>{children}</p>
    </div>
  );
}
