import React, { useState } from "react";
import styles from "./itemJob.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import LinkOffIcon from '@mui/icons-material/LinkOff';
import LinkIcon from '@mui/icons-material/Link';

const ItemJob = (props) => {
  const [checkStar, setCheckStar] = useState(false);

  const handleClickCheckStar = (value)=>{
    setCheckStar(value);
  }
  return (
    <>
      <div className={styles.item}>
        <h2>{props.index < 10 ? "0" + props.index : props.index}</h2>
        <div className={styles.card}>
          <div className={styles.Cabecera}>
            <div className={styles.Titulo}>{props.element.jobPosition}</div>
            <div className={styles.Star}>
              {checkStar ? (
                <LinkIcon
                  className={styles.icono}
                  onClick={() => {
                    handleClickCheckStar(false);
                  }}
                />
              ) : (
                <LinkOffIcon
                  className={styles.icono}
                  onClick={() => {
                    handleClickCheckStar(true);
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
