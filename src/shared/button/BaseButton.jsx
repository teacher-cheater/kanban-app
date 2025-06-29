import cls from "./BaseButton.module.scss";

export default function BaseButton(props) {
  const { textBtn, type, onClick } = props;
  return (
    <button className={cls.baseButton} type={type} onClick={onClick}>
      {textBtn}
    </button>
  );
}
