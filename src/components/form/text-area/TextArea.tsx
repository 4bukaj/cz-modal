import React from "react";
import styles from "./TextArea.module.css";
import Label from "../input/Label";

export default function TextArea(props) {
  return (
    <>
      <Label label={props.label} id={props.id} />
      <textarea
        value={props.value}
        onChange={props.onChange}
        className={styles.textarea}
        id={props.id}
        placeholder={props.placeholder}
        style={props.error && { border: "2px solid red" }}
      ></textarea>
    </>
  );
}
