import React from "react";
import styles from "./customTable.module.css";

const CustomTable = (props) => {
  const tableRows = (item) => {
    //item = cada uno de los registros de JSON
    //itemColumn = columnas definidas a pintar en la Tabla

    return props.columsName.map((itemColumn) => (
      <td key={item["_id"] + "#" + itemColumn.name}>{item[itemColumn.name]}</td>
    ));
  };

  return (
    <div className={styles.fondo}>
      <table className={styles.styled_table}>
        <thead>
          <tr>
            { props.json && JSON.stringify(props.columsDescription) !== "{}" &&  props.columsDescription.map((item) => (
              <th key={item.name}>{item.name}</th>
            ))}
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
            props.json.map((item) => <tr key={item["_id"]}>{tableRows(item)}</tr>)}

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
    </div>
  );
};

export default CustomTable;
