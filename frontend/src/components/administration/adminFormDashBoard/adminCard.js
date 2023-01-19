import React from "react";
import styles from "./adminCard.module.css";

const AdminCard = (props) => {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.number}>{props.number}</div>
        <div className={styles.cardName}>{props.name}</div>
      </div>
      <div className={styles.icon}>{props.icon}</div>
    </div>
  );
};

export default AdminCard;
