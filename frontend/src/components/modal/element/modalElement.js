import React, { useState, useRef, useEffect } from "react";
import Modal from "../modal";
import ModalElementJob from "./modalElementJob";
import ModalElementUser from "./modalElementUser";
import ModalElementCompany from "./modalElementCompany";
import ModalElementPost from "./modalElementPost";
import ModalElementConfirm from "./modalElementConfirm";
import ModalElementMessage from "./modalElementMessage";

const ModalElement = (props) => {
  //const [saveValue, setSaveValue] = useState('');
  const inputRef = useRef(null);
  /*
  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log('keyboardEvent', event);
      const { key, ctrlKey, metaKey } = event;
      if (inputRef.current && (ctrlKey || metaKey) && key === 'f') {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [inputRef]);
  */
  return (
    <Modal open={props.open} onClose={props.onClose}>
      {props.element === "user" && (
        <ModalElementUser
          onClose={props.onClose}
          titulo={props.titulo}
          itemId={props.itemId}
          statusClick={props.statusClick}
        />
      )}
      {props.element === "job" && (
        <ModalElementJob
          onClose={props.onClose}
          titulo={props.titulo}
          itemId={props.itemId}
          statusClick={props.statusClick}
        />
      )}
      {props.element === "company" && (
        <ModalElementCompany
          onClose={props.onClose}
          titulo={props.titulo}
          itemId={props.itemId}
          statusClick={props.statusClick}
        />
      )}
      {props.element === "post" && (
        <ModalElementPost
          onClose={props.onClose}
          titulo={props.titulo}
          itemId={props.itemId}
          statusClick={props.statusClick}
        />
      )}

      {props.element === "confirm" && <ModalElementConfirm mensaje={props.mensaje} onClose={props.onClose} saveModalConfirmation={props.saveModalConfirmation} />}
      {props.element === "message" && <ModalElementMessage />}

    </Modal>
  );
};

export default ModalElement;
