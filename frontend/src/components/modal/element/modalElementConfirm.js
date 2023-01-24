import React from "react";
import styles from "./modalElementUser.module.css";

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
          <button onClick={()=> {handleClick(true)}}>Si</button> &nbsp;
        </div>
        <div>
          <button onClick={()=> {handleClick(false)}}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ModalElementConfirm;
