import styles from "./BaseInput.module.css";

export default function BaseInput(props) {
  const { type, name, placeholder, id, error, ...restProps } = props;
  return (
    <div>
      <input
        className={styles.baseInput}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        autoFocus
        {...restProps}
      />
      {error && <div className={styles.errorText}>Обязательное поле</div>}
    </div>
  );
}
