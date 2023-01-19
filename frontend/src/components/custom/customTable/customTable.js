import React from "react";
import styles from "./customTable.module.css";

const CustomTable = (props) => {
  return (
    <div className={styles.fondo}>
      <table className={styles.styled_table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dom</td>
            <td>6000</td>
            <td>decode</td>
          </tr>
          <tr className={styles.active_row}>
            <td>2</td>
            <td>Melissa</td>
            <td>5150</td>
            <td>runner</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Rus</td>
            <td>22,50</td>
            <td>sfdsfdsds</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Feli</td>
            <td>5684</td>
            <td>zzzz</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              {new Array(12)
                .fill()
                .map(() => String.fromCharCode(Math.random() * 86 + 40))
                .join("")}
            </td>
            {/*hacemos una random de string para poner un texto diferente*/}
            <td>5684</td>
            <td>zzzz</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              {new Array(12)
                .fill()
                .map(() => String.fromCharCode(Math.random() * 86 + 40))
                .join("")}
            </td>
            <td>5684</td>
            <td>zzzz</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              {new Array(12)
                .fill()
                .map(() => String.fromCharCode(Math.random() * 86 + 40))
                .join("")}
            </td>
            <td>5684</td>
            <td>zzzz</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              {new Array(12)
                .fill()
                .map(() => String.fromCharCode(Math.random() * 86 + 40))
                .join("")}
            </td>
            <td>5684</td>
            <td>zzzz</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              {new Array(12)
                .fill()
                .map(() => String.fromCharCode(Math.random() * 86 + 40))
                .join("")}
            </td>
            <td>5684</td>
            <td>zzzz</td>
          </tr>
          {/*}
          <tr>
            <td>4</td>
            <td>{new Array(12).fill().map(() => String.fromCharCode(Math.random()*86+40)).join("")}</td>
            <td>5684</td>
            <td>zzzz</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{new Array(12).fill().map(() => String.fromCharCode(Math.random()*86+40)).join("")}</td>
            <td>5684</td>
            <td>zzzz</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{new Array(12).fill().map(() => String.fromCharCode(Math.random()*86+40)).join("")}</td>
            <td>5684</td>
            <td>zzzz</td>
  </tr>*/}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
