import React from "react";
import styles from "./adminNavigation.module.css";

const AdminNavigation = (props) => {
  console.log("inicio navigation " + props.navigationIdSelected);

  const handleClick = (param) => {
    props.saveNavigationIdSelected(param);
    props.reloadElement();
  };

  return (
    <div className={styles.fondo}>
      <ul>
        <li>
          <div id="logo">
            <span className={styles.Logo}>JL</span>
            <span className={styles.title}>JobLink</span>
          </div>
        </li>
        <li>
          <div
            id="dashboard"
            onClick={() => handleClick("dashboard")}
            className={props.navigationIdSelected === "dashboard" ? styles.hovered : ``}
          >
            <span className={styles.icon}>
              <ion-icon name="pie-chart-outline"></ion-icon>
            </span>
            <span className={styles.title}>DashBoard</span>
          </div>
        </li>
        <li>
          <div
            id="usuarios"
            onClick={() => handleClick("usuarios")}
            className={props.navigationIdSelected === "usuarios" ? styles.hovered : ``}
          >
            <span className={styles.icon}>
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className={styles.title}>Usuarios</span>
          </div>
        </li>
        <li>
          <div
            id="empresas"
            onClick={() => handleClick("empresas")}
            className={props.navigationIdSelected === "empresas" ? styles.hovered : ``}
          >
            <span className={styles.icon}>
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className={styles.title}>Empresas</span>
          </div>
        </li>
        <li>
          <div
            id="ofertas"
            onClick={() => handleClick("ofertas")}
            className={props.navigationIdSelected=== "ofertas" ? styles.hovered : ``}
          >
            <span className={styles.icon}>
              <ion-icon name="desktop-outline"></ion-icon>
            </span>
            <span className={styles.title}>Ofertas</span>
          </div>
        </li>
        <li>
          <div
            id="posts"
            onClick={() => handleClick("posts")}
            className={props.navigationIdSelected === "posts" ? styles.hovered : ``}
          >
            <span className={styles.icon}>
              <ion-icon name="id-card-outline"></ion-icon>
            </span>
            <span className={styles.title}>Posts</span>
          </div>
        </li>
        <li>
          <div
            id="logout"
            onClick={() => handleClick("logout")}
            className={props.navigationIdSelected === "logout" ? styles.hovered : ``}
          >
            <span className={styles.icon}>
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className={styles.title}>Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavigation;
