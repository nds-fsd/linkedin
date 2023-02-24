import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar"
import { useParams } from "react-router-dom";
import styles from "./followerspage.module.css"
import FollowersList from "../../components/FollowersList/FollowersList";


const FollowersPage = (props) => {
   const {idUser} = useParams();
  return (
    <>
    <div className={styles.home}>      
      <Header />
     <div className={styles.home__body}>     
       <Sidebar className="side_bar"/>
       <FollowersList/>
       
      
      
       

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

export default FollowersPage;
