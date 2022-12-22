import React from "react";
import styles from "./Input.module.css";
import Label from "./Label";

export default function Input(props) {
  return (
    <div>
      <Label label={props.label} id={props.id} />
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        style={props.error && { border: "2px solid red" }}
      />
    </div>
  );
}
