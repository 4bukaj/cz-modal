import React from "react";
import styles from "./AddReviewModal.module.css";
import ModalHeader from "../header/ModalHeader";
import ModalForm from "../form/ModalForm";

export default function AddReviewModal(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <ModalHeader title="Dodaj opinie" />
        <ModalForm onClose={props.onClose} />
      </div>
    </div>
  );
}
