import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
import Post from "../components/post/Post";
//import Bienvenida from "../components/bienvenida/bienvenida";
//import Noticias from "../components/noticias/noticias";
import styles from "./home.module.css";
import Widget from "../components/widget_right/Widget";

const HomePage = (props) => {
  return (
    <>
    <div className={styles.home}>      
      <Header />
     <div className={styles.home__body}>     
       <Sidebar />
       <Feed />
       <Widget />
       

     </div>

      </div>

      {/* <div className={styles.body}>
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
      </div> */}
    </>
  );
};

export default HomePage;
