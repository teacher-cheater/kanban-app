import styles from "./BaseInput.module.css";

export default function BaseInput(props) {
  const { type, name, placeholder, id } = props;
  return (
    <div>
      <input
        className={styles.baseInput}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        autoFocus
        {...props}
      />
    </div>
  );
}
