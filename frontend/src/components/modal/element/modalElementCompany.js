import React, { useEffect, useState } from "react";
import { camelCase } from "../../../utils/functions";
import ModalElement from "./modalElement";
import { apiWrapper } from "../../../utils/apiWrapper";
import styles from "./modalElement.module.css";
import { toast } from "react-toastify";

const ModalElementCompany = (props) => {
  const [title, setTitle] = useState("");
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [modalconfirmation, setModalConfirmation] = useState(false);

  const [nombre, setNombre] = useState("");
  const [web, setWeb] = useState("");
  const [sector, setSector] = useState("");
  const [nTrabajadores, setNTrabajadores] = useState(0);

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
    apiWrapper("company", "POST", {
      name: nombre,
      website: web,
      company_type: sector,
      company_size: nTrabajadores,
    }).then((res) => {
      console.log(res);
    });

    //TODO : No funciona
    /*
    toast.success("Usuario Creado correctamente", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    */
  };

  const sendBackendUPDATE = () => {
    apiWrapper(`company/${props.itemId.replace('"', "").replace('"', "")}`, "PATCH", {
      name: nombre,
      website: web,
      company_type: sector,
      company_size: nTrabajadores,
    }).then((res) => {
      console.log(res);
    });
  };

  const sendBackendDELETE = () => {
    apiWrapper(`company/${props.itemId.replace('"', "").replace('"', "")}`, "DELETE").then(
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
        setWeb("");
        setSector("");
        setNTrabajadores(0);

        break;
      case "R":
        setTitle(`Consultar un nuevo Registro de "${camelCase(props.titulo)}"`);
        //Leemos los datos de la ficha del usuario
        apiWrapper(`company/${props.itemId.replace('"', "").replace('"', "")}`, "GET").then(
          (res) => {
            setNombre(res.name);
            setWeb(res.website);
            setSector(res.company_type);
            setNTrabajadores(res.company_size);
          }
        );
        break;
      case "U":
        setTitle(`Actualizar un nuevo Registro de "${camelCase(props.titulo)}"`);
        //Leemos los datos de la ficha del usuario
        apiWrapper(`company/${props.itemId.replace('"', "").replace('"', "")}`, "GET").then(
          (res) => {
            setNombre(res.name);
            setWeb(res.website);
            setSector(res.company_type);
            setNTrabajadores(res.company_size);
          }
        );
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
          value={web}
          onChange={(e) => {
            setWeb(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && web!=="" ? "hidden" : null}>Web</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={sector}
          onChange={(e) => {
            setSector(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && sector!=="" ? "hidden" : null}>Sector</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={nTrabajadores}
          onChange={(e) => {
            setNTrabajadores(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && nombre!=="" ? "hidden" : null}>Nº Trabajadores</span>
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

export default ModalElementCompany;
