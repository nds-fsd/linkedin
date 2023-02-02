import React, { useEffect, useState } from "react";
import { camelCase } from "../../../utils/functions";
import styles from "./modalElement.module.css";
import ModalElement from "./modalElement";
import { apiWrapper } from "../../../utils/apiWrapper";
import { toast } from "react-toastify";

const ModalElementJob = (props) => {
  const [title, setTitle] = useState("");
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [modalconfirmation, setModalConfirmation] = useState(false);

  const [nombre, setNombre] = useState("");
  const [oferta, setOferta] = useState("");
  const [pais, setPais] = useState("");
  const [salario, setSalario] = useState(0);

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
    apiWrapper("job", "POST", {
      companyName: nombre,
      jobPosition: oferta,
      countryLocation: pais,
      salary: salario,
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
    apiWrapper(`job/${props.itemId.replace('"', "").replace('"', "")}`, "PATCH", {
      companyName: nombre,
      jobPosition: oferta,
      countryLocation: pais,
      salary: salario,
    }).then((res) => {
      console.log(res);
    });
  };

  const sendBackendDELETE = () => {
    apiWrapper(`job/${props.itemId.replace('"', "").replace('"', "")}`, "DELETE").then(
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
    console.log(`${camelCase(props.titulo)} ( ${props.itemId} ) ${props.statusClick}`);

    let title = "";
    switch (props.statusClick) {
      case "C":
        setTitle(`Crear un nuevo Registro de "${camelCase(props.titulo)}"`);
        setNombre("");
        setOferta("");
        setPais("");
        setSalario(0);
        break;
      case "R":
        setTitle(`Consultar un nuevo Registro de "${camelCase(props.titulo)}"`);
        apiWrapper(`job/${props.itemId.replace('"', "").replace('"', "")}`, "GET").then((res) => {
          setNombre(res.companyName);
          setOferta(res.jobPosition);
          setPais(res.countryLocation);
          setSalario(res.salary);
        });
        break;
      case "U":
        setTitle(`Actualizar un nuevo Registro de "${camelCase(props.titulo)}"`);
        //Leemos los datos de la ficha del usuario
        apiWrapper(`job/${props.itemId.replace('"', "").replace('"', "")}`, "GET").then((res) => {
          setNombre(res.companyName);
          setOferta(res.jobPosition);
          setPais(res.countryLocation);
          setSalario(res.salary);
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
      <h2>{title}</h2>

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
        <span hidden={props.statusClick === "R" && nombre !== "" ? "hidden" : null}>
          Nombre de la Compañia
        </span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={oferta}
          onChange={(e) => {
            setOferta(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && oferta !== "" ? "hidden" : null}>Oferta</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={pais}
          onChange={(e) => {
            setPais(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && pais !== "" ? "hidden" : null}>Pais</span>
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          required="required"
          disabled={props.statusClick === "R" ? "disabled" : null}
          value={salario}
          onChange={(e) => {
            setSalario(e.target.value);
          }}
        />
        <span hidden={props.statusClick === "R" && salario !== "" ? "hidden" : null}>Salario</span>
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
            </button>
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

export default ModalElementJob;
