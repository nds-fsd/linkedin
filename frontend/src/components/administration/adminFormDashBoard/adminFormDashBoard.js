import React from "react";
import CustomTable from "../../custom/customTable/customTable";
import CustomTableUserDashBoard from "../../custom/customTable/customTableUserDashBoard";
import AdminCard from "./adminCard";
import styles from "./adminFormDashBoard.module.css";

const AdminFormDashBoard = (props) => {
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
        <div className={styles.user}>
          <img src="/img/avatar/AvatarMaker H 2.png" alt="avatar" />
        </div>
      </div>

      {/*Cards*/}
      <div className={styles.cardBox}>
        {/*TODO  al hacer Click en la Card, situarse en el elemento que interesa. Utilizar useRef para incluirle un addEventListener */}
        <AdminCard number={75} name="Usuarios" icon={<ion-icon name="people-outline"></ion-icon>} />
        <AdminCard number={23} name="Empresas" icon={<ion-icon name="home-outline"></ion-icon>} />
        <AdminCard number={68} name="Ofertas" icon={<ion-icon name="desktop-outline"></ion-icon>} />
        <AdminCard number={25} name="Posts" icon={<ion-icon name="id-card-outline"></ion-icon>} />
      </div>

      {/*Graphs*/}
      <div className={styles.graphBox}>
        <div className={styles.graph}>&nbsp;</div>
        <div className={styles.graph}>&nbsp;</div>
      </div>

      {/*Details*/}
      <div className={styles.details}>
        <div className={styles.lastPosts}>
          <div className={styles.cardHeader}>
            <h2>Last Posts</h2>
          </div>
          <CustomTable />
        </div>
        <div className={styles.lastUsers}>
          <div className={styles.cardHeader}>
            <h2>Last Users</h2>
          </div>
          <CustomTableUserDashBoard />
        </div>
      </div>
    </div>
  );
};

export default AdminFormDashBoard;
