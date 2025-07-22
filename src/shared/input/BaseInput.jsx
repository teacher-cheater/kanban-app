import cls from "./BaseInput.module.scss";

export default function BaseInput(props) {
  const { type, name, placeholder, id, error, ...restProps } = props;
  return (
    <div>
      <input
        className={cls.baseInput}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        autoFocus
        {...restProps}
      />
      {error && <div className={cls.errorText}>Обязательное поле</div>}
    </div>
  );
}
