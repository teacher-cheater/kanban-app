import cls from "./BaseButton.module.scss";

export default function BaseButton(props) {
  const { textBtn, type, onClick, primary } = props;
  return (
    <button
      className={`${cls["baseButton"]} ${
        primary ? cls["baseButton--primary"] : ""
      }`}
      type={type}
      onClick={onClick}
    >
      {textBtn}
    </button>
  );
}
