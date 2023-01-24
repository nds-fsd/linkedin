import React, { useEffect, useState } from "react";
import Modal from "../../modal/modal";
import ModalElement from "../../modal/element/modalElement"
import styles from "./customTable.module.css";

const CustomTable = (props) => {
  const [mode, setMode] = useState("read");
  const [openModal, setOpenModal] = useState(false);
  const [itemId, setItemId] = useState("");
  const [statusClick, setStatusClick] = useState("");

  
  useEffect(() => {
    setMode(props.mode);
  }, [mode]);

  const handleClickAdd = () => {
    setStatusClick("C");//Create
    setOpenModal(true);
    //alert("Añadir " + props.element);
  };
  const handleClickConsult = (item) => {
    setStatusClick("R");//Read
    setItemId(JSON.stringify(item["item"]["_id"]))
    setOpenModal(true);
    //alert("Consultar " + JSON.stringify(item["item"]["_id"]) + " " + props.element);
  };
  const handleClickEdit = (item) => {
    setStatusClick("U");//Update
    setItemId(JSON.stringify(item["item"]["_id"]))
    setOpenModal(true);
    //alert("Editar " + JSON.stringify(item["item"]["_id"]) + " " + props.element);
  };
  const handleClickDelete = (item) => {
    setStatusClick("D");//Delete
    setItemId(JSON.stringify(item["item"]["_id"]))
    setOpenModal(true);
    //alert("Borrar " + JSON.stringify(item["item"]["_id"]) + " " + props.element);
  };

  const tableRows = (item) => {
    //item = cada uno de los registros de JSON
    //itemColumn = columnas definidas a pintar en la Tabla

    return props.columsName.map((itemColumn, index) => (
      <td key={item["_id"] + "#" + itemColumn.name}>{item[itemColumn.name]}</td>
    ));
  };

  return (
    <div className={styles.fondo}>
      <table className={styles.styled_table}>
        <thead>
          <tr>
            {mode === "write" && <th></th>}
            {props.json &&
              JSON.stringify(props.columsDescription) !== "{}" &&
              props.columsDescription.map((item) => <th key={item.name}>{item.name}</th>)}
            {mode === "write" && <th></th>}
            {mode === "write" && (
              <th>
                <ion-icon
                  name="add-circle-outline"
                  onClick={() => {
                    handleClickAdd();
                  }}
                ></ion-icon>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {!props.json && (
            <tr>
              <td></td>
            </tr>
          )}
          {props.json &&
            JSON.stringify(props.json) !== "{}" &&
            props.json.map((item) => (
              <tr key={item["_id"]}>
                {mode === "write" && (
                  <td>
                    <ion-icon
                      name="search-outline"
                      onClick={() => {
                        handleClickConsult({ item });
                      }}
                    ></ion-icon>
                  </td>
                )}
                {tableRows(item)}
                {mode === "write" && (
                  <td>
                    <ion-icon
                      name="clipboard-outline"
                      onClick={() => {
                        handleClickEdit({ item });
                      }}
                    ></ion-icon>
                  </td>
                )}
                {mode === "write" && (
                  <td>
                    <ion-icon
                      name="trash-outline"
                      onClick={() => {
                        handleClickDelete({ item });
                      }}
                    ></ion-icon>
                  </td>
                )}
              </tr>
            ))}

          {/*
              {new Array(12)
                .fill()
                .map(() => String.fromCharCode(Math.random() * 86 + 40))
                .join("")}
            </td>
            {/ *hacemos una random de string para poner un texto diferente* /}
                    */}
        </tbody>
      </table>
      <ModalElement open={openModal} onClose={() => setOpenModal(false)} element={props.element} titulo={props.titulo} itemId={itemId} statusClick={statusClick}/>
    </div>
  );
};

export default CustomTable;
