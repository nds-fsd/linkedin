import React, { useEffect, useState } from "react";
import styles from "./itemJob.module.css";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import LinkIcon from "@mui/icons-material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import { apiWrapper } from "../../../../utils/apiWrapper";

const ItemJob = (props) => {
  const [isLinked, setIsLinked] = useState(false);
  const [isOwnerCompany, setIsOwnerCompany] = useState(false);

  const handleClickIsLinked = (value) => {
    setIsLinked(value);

    //llamada API para guardar/Borrar el Link
    const body = {
      jobId: props.element._id,
      userId: props.userId,
    };

    apiWrapper(`job/${value === true ? "link" : "unlink"}/`, "POST", body)
      .then((data) => {
        //console.log(data);
        props.reloadPage();
      })
      .catch((error) => console.log(error));
  };

  const handleClickDelete = () => {
    apiWrapper(`job/${props.element._id}`, "DELETE")
      .then((data) => {
        props.reloadPage();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    apiWrapper(`job/${props.element._id}`, "GET")
      .then((data) => {
        //console.log(data);
        if (data.user.includes(props.userId)) setIsLinked(true);
        console.log(props.companyOwner)
        if (props.companyOwner) {
          if (data.company === props.companyOwner[0]._id) {
            setIsOwnerCompany(true);
          } else {
            setIsOwnerCompany(false);
          }
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className={styles.item}>
        <h2>{props.index < 10 ? "0" + props.index : props.index}</h2>
        <div className={styles.card}>
          <div className={styles.Cabecera}>
            <div className={styles.Titulo}>
              {isOwnerCompany && (
                <DeleteIcon
                  className={styles.iconoDelete}
                  onClick={() => {
                    handleClickDelete();
                  }}
                />
              )}
              {props.element.jobPosition}
            </div>

            <div className={styles.Star}>
              {isLinked ? (
                <LinkOffIcon
                  className={styles.icono}
                  onClick={() => {
                    handleClickIsLinked(false);
                  }}
                />
              ) : (
                <LinkIcon
                  className={styles.icono}
                  onClick={() => {
                    handleClickIsLinked(true);
                  }}
                />
              )}
            </div>
          </div>
          <div className={styles.Descripcion}>{props.element.jobDescription}</div>
          <div className={styles.Pie}>
            <div className={styles.Salario}>Salario : {props.element.salary} €</div>
            <div className={styles.Pais}>{props.element.countryLocation}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemJob;
