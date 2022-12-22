import React from "react";
import styles from "./Input.module.css";

export default function label(props) {
  return (
    <label className={styles.label} htmlFor={props.id}>
      {props.label}
    </label>
  );
}
