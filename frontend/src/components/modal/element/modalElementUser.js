import React, { useState, useEffect } from "react";
import { camelCase } from "../../../utils/functions";
import ModalElement from "./modalElement";
import { apiWrapper } from "../../../utils/apiWrapper";
import styles from "./modalElement.module.css";
import { toast } from "react-toastify";

const ModalElementUser = (props) => {
  const [title, setTitle] = useState("");
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [modalconfirmation, setModalConfirmation] = useState(false);

  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    apiWrapper("user/register", "POST", {
      username: usuario,
      email: email,
      password: password,
      /*
      "nombre":nombre,
      "apellido1":apellido1,
      "apellido2":apellido2,
      */
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
    apiWrapper(`user/${props.itemId.replace('"', "").replace('"', "")}`, "PATCH", {
      username: usuario,
      email: email,
      /*
      "nombre":nombre,
      "apellido1":apellido1,
      "apellido2":apellido2,
      */
    }).then((res) => {
      console.log(res);
    });
  };

  const sendBackendDELETE = () => {
    apiWrapper(`user/${props.itemId.replace('"', "").replace('"', "")}`, "DELETE").then(
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
        setNombre("");
        setApellido1("");
        setApellido2("");
        setEmail("");
        setPassword("");
        break;
      case "R":
        setTitle(`Consultar un nuevo Registro de "${camelCase(props.titulo)}"`);
        //Leemos los datos de la ficha del usuario
        apiWrapper(`user/${props.itemId.replace('"', "").replace('"', "")}`, "GET").then((res) => {
          setUsuario(res.username);
          setEmail(res.email);
        });

        break;
      case "U":
        setTitle(`Actualizar un nuevo Registro de "${camelCase(props.titulo)}"`);
        //Leemos los datos de la ficha del usuario
        apiWrapper(`user/${props.itemId.replace('"', "").replace('"', "")}`, "GET").then((res) => {
          setUsuario(res.username);
          setEmail(res.email);
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
          value={usuario}
          onChange={(e) => {
            setUsuario(e.target.value);
          }}
        />
        <span  hidden={props.statusClick === "R" && usuario!=="" ? "hidden" : null}>Usuario</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && nombre!=="" ? "hidden" : null}>Nombre</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={apellido1}
          onChange={(e) => {
            setApellido1(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && apellido1!=="" ? "hidden" : null}>Primer Apellido</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={apellido2}
          onChange={(e) => {
            setApellido2(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && apellido2!=="" ? "hidden" : null}>Segundo Apellido</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && email!=="" ? "hidden" : null}>Email</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type={props.statusClick === "U" ? "hidden" : "text"}
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "U" ? "hidden" : null} >Cambiar Password</span>
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
