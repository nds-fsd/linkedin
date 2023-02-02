import React, { useEffect, useState } from "react";
import { camelCase } from "../../../utils/functions";
import ModalElement from "./modalElement";
import { apiWrapper } from "../../../utils/apiWrapper";
import styles from "./modalElement.module.css";
import { toast } from "react-toastify";

const ModalElementPost = (props) => {
  const [title, setTitle] = useState("");
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [modalconfirmation, setModalConfirmation] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contenido, setContenido] = useState("");
  const [comentarios, setComentarios] = useState("");

  const saveModalConfirmation = (param) => {
    setModalConfirmation(param);

    if (param === true) {
      switch (props.statusClick) {
        case "C": //CREATE
          console.log("Confirm OK CREATE");
          sendBackendPOSTCreate();
          break;
        case "U": //UPDATE
          console.log("Confirm OK UPDATE");
          sendBackendUPDATE();
          toast("Confirm OK UPDATE");
          break;
        case "D": //DELETE
          console.log("Confirm OK DELETE");
          sendBackendDELETE();
          toast("Confirm OK DELETE");
          break;
      }
      props.onClose();
    } else {
      if (props.statusClick === "D") {
        props.onClose();
      }
    }
  };

  const sendBackendPOSTCreate = async () => {
    apiWrapper("post", "POST", {
      title: titulo,
      description: descripcion,
      content: contenido,
      comments: comentarios,
    }).then((res) => {
      console.log(res);
    });

    //TODO : No funciona
    toast.success("Usuario Creado correctamente", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const sendBackendUPDATE = () => {
    apiWrapper(`post/${props.itemId.replace('"', "").replace('"', "")}`, "PATCH", {
      title: titulo,
      description: descripcion,
      content: contenido,
      comments: comentarios,
    }).then((res) => {
      console.log(res);
    });
  };

  const sendBackendDELETE = () => {
    apiWrapper(`post/${props.itemId.replace('"', "").replace('"', "")}`, "DELETE").then(
      (payload) => {
        console.log(payload);
      }
    );
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
        setTitulo("");
        setDescripcion("");
        setContenido("");
        setComentarios("");
        break;
      case "R":
        setTitle(`Consultar un nuevo Registro de "${camelCase(props.titulo)}"`);
        //Leemos los datos de la ficha del usuario
        apiWrapper(`post/${props.itemId.replace('"', "").replace('"', "")}`, "GET").then((res) => {
          setTitulo(res.title);
          setDescripcion(res.description);
          setContenido(res.content);
          setComentarios(res.comments);
        });
        break;
      case "U":
        setTitle(`Actualizar un nuevo Registro de "${camelCase(props.titulo)}"`);
        //Leemos los datos de la ficha del usuario
        apiWrapper(`post/${props.itemId.replace('"', "").replace('"', "")}`, "GET").then((res) => {
          setTitulo(res.title);
          setDescripcion(res.description);
          setContenido(res.content);
          setComentarios(res.comments);
        });
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
          value={titulo}
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && titulo!=="" ? "hidden" : null}>Titulo</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={descripcion}
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && descripcion!=="" ? "hidden" : null}>Descripcion</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={contenido}
          onChange={(e) => {
            setContenido(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && contenido!=="" ? "hidden" : null}>Contenido</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={comentarios}
          onChange={(e) => {
            setComentarios(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && comentarios!=="" ? "hidden" : null}>Comentarios</span>
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

export default ModalElementPost;
