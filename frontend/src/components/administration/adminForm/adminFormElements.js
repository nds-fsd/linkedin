import React from "react";
import CustomTable from "../../custom/customTable/customTable";
import styles from "./adminFormElements.module.css";

const AdminFormElements = (props) => {
  const camelCase = (param) => {
    let titleSplit = param.split("");
    if (param !== "") titleSplit[0] = titleSplit[0].toUpperCase();

    return titleSplit.join("");
  };

  return (
    <div className={styles.fondo}>
      {/*Title*/}
      <div className={styles.title}>{camelCase(props.navigationIdSelected)}</div>

      {/*NavBar*/}
      <div className={styles.topbar}>
        <div className={styles.toggle}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className={styles.search}>
          <label>
            <input type="text" placeholder="Search here" />
            <ion-icon name="search-outline"></ion-icon>
          </label>
        </div>
        <div className={styles.user}>
          <img src="/img/avatar/AvatarMaker H 2.png" alt="avatar" />
        </div>
      </div>

      {/*Custom Table*/}
      <div className={styles.customTable}>
        <CustomTable />
      </div>
    </div>
  );
};

export default AdminFormElements;
