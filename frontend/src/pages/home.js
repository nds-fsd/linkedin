import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
//import Post from "../components/post/Post";
//import Bienvenida from "../components/bienvenida/bienvenida";
//import Noticias from "../components/noticias/noticias";
import styles from "./home.module.css";
//import Widget from "../components/widget_right/Widget";
import Jobsmap from "../components/jobs/Jobs_map";
//import JobCard  from "../components/jobs/JobCard"


const HomePage = (props) => {
  return (
    <>
    <div className={styles.home}>      
      <Header />
     <div className={styles.home__body}>     
       <Sidebar />
       <Feed className={styles.feed}/>
       {/* <Widget /> */}
       <Jobsmap />
       {/* <JobCard /> */}
       

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
