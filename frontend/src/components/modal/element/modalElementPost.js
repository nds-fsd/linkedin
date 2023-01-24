import React from "react";
import { camelCase } from "../../../utils/functions";
import styles from "./modalElementUser.module.css";

const ModalElementPost = (props) => {
  const handleClick = () => {
    props.onClose();
  };
  return (
    <div className={styles.fondo}>
      <h2>{`${camelCase(props.titulo)} ( ${props.itemId} ) ${props.statusClick}`} </h2>

      <input
        type="text"
        placeholder="Titulo"
        disabled={props.statusClick === "R" ? "disabled" : null}
      />
      <input
        type="text"
        placeholder="Descripcion"
        disabled={props.statusClick === "R" ? "disabled" : null}
      />
      <input
        type="text"
        placeholder="Contenido"
        disabled={props.statusClick === "R" ? "disabled" : null}
      />
      <input
        type="text"
        placeholder="Comentarios"
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
    </div>
  );
};

export default ModalElementPost;
