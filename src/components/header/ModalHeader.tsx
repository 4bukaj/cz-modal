import React from "react";
import styles from "./ModalHeader.module.css";

export default function ModalHeader(props) {
  return <h2 className={styles.title}>{props.title}</h2>;
}
