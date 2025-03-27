import React from "react";
import styles from "./BaseButton.module.css";

export default function BaseButton(props) {
  const { textBtn, type } = props;
  return (
    <button className={styles.baseButton} type={type}>
      {textBtn}
    </button>
  );
}
