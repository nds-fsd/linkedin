import React from "react";
import styles from "./adminNavigation.module.css";

const AdminNavigation = (props) => {
  return (
    <div className={styles.fondo}>
      <ul>
        <li>
          <a href="#">
            <span className={styles.Logo}>JL</span>
            <span className={styles.title}>JobLink</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <ion-icon name="pie-chart-outline"></ion-icon>
            </span>
            <span className={styles.title}>DashBoard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className={styles.title}>Usuarios</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className={styles.title}>Empresa</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <ion-icon name="desktop-outline"></ion-icon>
            </span>
            <span className={styles.title}>Ofertas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <ion-icon name="id-card-outline"></ion-icon>
            </span>
            <span className={styles.title}>Posts</span>
          </a>
        </li>

        <li>
          <a href="#">
            <span className={styles.icon}>
            <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className={styles.title}>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavigation;
