import React from "react";
import styles from "./Button.module.css";

export default function button(props) {
  return (
    <input
      type={props.type}
      onClick={props.onClick}
      className={`${styles.btn} ${styles[props.btnStyle]}`}
      value={props.text}
    />
  );
}
