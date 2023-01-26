import React, { useEffect, useState } from "react";
import { camelCase } from "../../../utils/functions";
import styles from "./modalElement.module.css";

const ModalElementJob = (props) => {
  const [title, setTitle] = useState("");
  const handleClick = () => {
    props.onClose();
  };

  useEffect(() => {
    //console.log(`${camelCase(props.titulo)} ( ${props.itemId} ) ${props.statusClick}`);
    
    let title = "";
    switch (props.statusClick) {
      case "C":
        setTitle(`Crear un nuevo Registro de "${camelCase(props.titulo)}"`);
        break;
      case "U":
        setTitle(`Actualizar un nuevo Registro de "${camelCase(props.titulo)}"`);
        break;
      case "R":
        setTitle(`Consultar un nuevo Registro de "${camelCase(props.titulo)}"`);
        break;
      case "D":
        setTitle(`Eliminar un nuevo Registro de "${camelCase(props.titulo)}"`);
        break;
      default:
    }
  }, [props.statusClick]);

  return (
    <div className={styles.fondo}>
      <h2>{title}</h2>

      <div className={styles.inputBox}>
        <input type="text" required="required" disabled={props.statusClick === "R" ? "disabled" : null} />
        <span>Nombre de la Compañia</span>
      </div>
      <div className={styles.inputBox}>
        <input type="text" required="required" disabled={props.statusClick === "R" ? "disabled" : null} />
        <span>Oferta</span>
      </div>
      <div className={styles.inputBox}>
        <input type="text" required="required" disabled={props.statusClick === "R" ? "disabled" : null} />
        <span>Pais</span>
      </div>
      <div className={styles.inputBox}>
        <input type="text" required="required" disabled={props.statusClick === "R" ? "disabled" : null} />
        <span>Salario</span>
      </div>
      {props.statusClick === "R" && (
        <div className={styles.botones}>
          <button className={styles.botonOK} onClick={handleClick}>Cerrar</button> &nbsp;
        </div>
      )}
      {(props.statusClick === "C" || props.statusClick === "U") && (
        <div className={styles.botones}>
          <div>
            <button className={styles.botonOK} onClick={handleClick}>Guardar</button>
          </div>
          <div>
            <button className={styles.botonNOK} onClick={handleClick}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalElementJob;
