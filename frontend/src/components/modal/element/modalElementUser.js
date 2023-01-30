import React, { useState, useEffect } from "react";
import { camelCase } from "../../../utils/functions";
import ModalElement from "./modalElement";
import { apiWrapper } from "../../../utils/apiWrapper";
import styles from "./modalElement.module.css";
//import { toast } from 'react-toastify';

const ModalElementUser = (props) => {
  const [title, setTitle] = useState("");
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [modalconfirmation, setModalConfirmation] = useState(false);

  const saveModalConfirmation = (param) => {
    setModalConfirmation(param);

    if (param === true) {
      switch (props.statusClick) {
        case "C": //CREATE
          console.log("Confirm OK CREATE");
          sendBackendPOSTCreate();
          //TODO Se añaden Toast, indicando que ha sido OK
          //toast("Confirm OK CREATE");
          break;
        case "U": //UPDATE
          console.log("Confirm OK UPDATE");
          sendBackendUPDATE();
          //TODO Se añaden Toast, indicando que ha sido OK
          //toast("Confirm OK UPDATE");
          break;
        case "D": //DELETE
          console.log("Confirm OK DELETE");
          sendBackendDELETE();
          //TODO Se añaden Toast, indicando que ha sido OK
          //toast("Confirm OK DELETE");
          break;
      }
      props.onClose();
    } else {
      if (props.statusClick === "D") {
        props.onClose();
      }
    }
  };

  const sendBackendPOSTCreate = () => {};
  const sendBackendUPDATE = () => {};
  const sendBackendDELETE = () => {
    //Se ha marcado que se desea eliminar el registro
    //TODO  APIWRAPPER
    /*
      apiWrapper(
        "user", 
        "POST", 
         {
            username:username,
            email:email,
            password:password


        }
        )
        .then((payload)=>{
            console.log(payload)
        });
  */
  };

  const handleClick = (param) => {
    //si pulsamos el boton de OK (Guardar), forzamos un segundo modal de Confirmacion
    if (
      param === "sendConfirm" &&
      (props.statusClick === "C" || props.statusClick === "U") &&
      openModalConfirm === false
    ) {
      setOpenModalConfirm(true); //llamamos al Modal->Confirm
    } else props.onClose();
  };

  useEffect(() => {
    //console.log(`${camelCase(props.titulo)} ( ${props.itemId} ) ${props.statusClick}`);

    let title = "";
    switch (props.statusClick) {
      case "C":
        setTitle(`Crear un nuevo Registro de "${camelCase(props.titulo)}"`);
        break;
      case "R":
        setTitle(`Consultar un nuevo Registro de "${camelCase(props.titulo)}"`);
        break;
      case "U":
        setTitle(`Actualizar un nuevo Registro de "${camelCase(props.titulo)}"`);
        break;
      case "D":
        setTitle(`Eliminar un nuevo Registro de "${camelCase(props.titulo)}"`);
        break;
      default:
    }

    if (props.statusClick === "D" && openModalConfirm === false) {
      console.log("DELETE");
      //llamamos al Modal->Confirm
      setOpenModalConfirm(true);
    }
  }, [props.statusClick]);

  return (
    <div className={styles.fondo}>
      <h2>{title} </h2>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
        />
        <span>Nombre</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
        />
        <span>Primer Apellido</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
        />
        <span>Segundo Apellido</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
        />
        <span>Email</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
        />
        <span>Cambiar Password</span>
      </div>
      {props.statusClick === "R" && (
        <div className={styles.botones}>
          <button className={styles.botonOK} onClick={handleClick}>
            Cerrar
          </button>{" "}
          &nbsp;
        </div>
      )}
      {(props.statusClick === "C" || props.statusClick === "U") && (
        <div className={styles.botones}>
          <div>
            <button className={styles.botonOK} onClick={() => handleClick("sendConfirm")}>
              Guardar
            </button>{" "}
            &nbsp;
          </div>
          <div>
            <button className={styles.botonNOK} onClick={handleClick}>
              Cancelar
            </button>
          </div>
        </div>
      )}
      <ModalElement
        open={openModalConfirm}
        onClose={() => setOpenModalConfirm(false)}
        element="confirm"
        mensaje={`¿Esta seguro de ${
          props.statusClick === "C"
            ? "crear"
            : props.statusClick === "U"
            ? "actualizar"
            : props.statusClick === "D"
            ? "eliminar"
            : ""
        } el registro?`}
        saveModalConfirmation={saveModalConfirmation}
      />
    </div>
  );
};

export default ModalElementUser;
