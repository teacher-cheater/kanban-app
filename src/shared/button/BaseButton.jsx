import React from "react";
import styles from "./BaseButton.module.css";

export default function BaseButton(props) {
  const { textBtn, type, onClick } = props;
  return (
    <button className={styles.baseButton} type={type} onClick={onClick}>
      {textBtn}
    </button>
  );
}
