import React, { useState,useEffect } from "react";
import { camelCase } from "../../../utils/functions";
import ModalElement from "./modalElement";
import styles from "./modalElementUser.module.css";

const ModalElementUser = (props) => {
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [modalconfirmation,  setModalConfirmation]=useState(false)

  const saveModalConfirmation = (param) => {
    setModalConfirmation(param);

    if (param===true && props.statusClick==="D" ){
      //Se ha marcado que se desea eliminar el registro
      //TODO  APIWRAPPER
    }



  };

  const handleClick = () => {
    props.onClose();
  };

  useEffect(() => {
    if (props.statusClick === "D" && openModalConfirm===false) {
      console.log("DELETE");
      //llamamos al Modal->Confirm
      setOpenModalConfirm(true);
    }
  }, [props.statusClick]);

  return (
    <div className={styles.fondo}>
      <h2>{`${camelCase(props.titulo)} ( ${props.itemId} ) ${props.statusClick}`} </h2>

      <input
        type="text"
        placeholder="Nombre"
        disabled={props.statusClick === "R" ? "disabled" : null}
      />
      <input
        type="text"
        placeholder="Primer Apellido"
        disabled={props.statusClick === "R" ? "disabled" : null}
      />
      <input
        type="text"
        placeholder="Segundo Apellido"
        disabled={props.statusClick === "R" ? "disabled" : null}
      />
      <input
        type="text"
        placeholder="Email"
        disabled={props.statusClick === "R" ? "disabled" : null}
      />
      <input
        type="text"
        placeholder="Cambiar Password"
        disabled={props.statusClick === "R" ? "disabled" : null}
      />
      {props.statusClick === "R" && (
        <div className={styles.botones}>
          <button onClick={handleClick}>Cerrar</button> &nbsp;
        </div>
      )}
      {(props.statusClick === "C" || props.statusClick === "U") && (
        <div className={styles.botones}>
          <div>
            <button onClick={handleClick}>Guardar</button> &nbsp;
          </div>
          <div>
            <button onClick={handleClick}>Cancelar</button>
          </div>
        </div>
      )}
       <ModalElement open={openModalConfirm} onClose={() => setOpenModalConfirm(false)} element="confirm" mensaje="¿Esta seguro de eliminar el registro?" saveModalConfirmation={saveModalConfirmation}/>
    </div>
     
  );
};

export default ModalElementUser;
