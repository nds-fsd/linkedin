import React from "react";
import styles from "./adminFormDashBoard.module.css";

const AdminNavigation = (props) => {
  return (
    <div className={styles.fondo}>
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
          <img src="/img/avatar/AvatarMaker H 2.png" alt="avatar"/>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigation;
