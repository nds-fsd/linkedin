import React from "react";
import NavBar from "../components/navBar/NavBar";
import Bienvenida from "../components/bienvenida/bienvenida";
import Noticias from "../components/noticias/noticias";
import styles from "./home.module.css";

const HomePage = (props) => {
  return (
    <>
      <NavBar />
      <div className={styles.body}>
        <div className={styles.horizontal}>
          <Bienvenida />
        </div>
        <div className={styles.horizontal}>
          <div className={styles.vertical}>Bloque 1</div>
          <div className={styles.vertical}>Bloque 2</div>
        </div>
        <div className={styles.horizontal}>
          <Noticias />
        </div>
      </div>
    </>
  );
};

export default HomePage;
