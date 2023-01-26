import React from "react";
import styles from "./modalElement.module.css";

const ModalElementConfirm = (props) => {
  const handleClick = (param) => {
    props.saveModalConfirmation(param)
    props.onClose();
  };
  return (
    <div>
      <h2>{`${props.mensaje} `} </h2>{" "}
      <div className={styles.botones}>
        <div>
          <button className={styles.botonOK} onClick={()=> {handleClick(true)}}>Si</button> &nbsp;
        </div>
        <div>
          <button className={styles.botonNOK} onClick={()=> {handleClick(false)}}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ModalElementConfirm;
