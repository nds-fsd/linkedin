import React from "react";
import Header from "../components/header/Header";
import ProfileBar from "../components/profileBar/ProfileBar";
import Feed from "../components/feed/Feed";
//import Post from "../components/post/Post";
//import Bienvenida from "../components/bienvenida/bienvenida";
//import Noticias from "../components/noticias/noticias";
import styles from "./profileUser.module.css";
//import Widget from "../components/widget_right/Widget";
import Jobsmap from "../components/jobs/Jobs_map";
//import JobCard  from "../components/jobs/JobCard"
import { useParams } from "react-router-dom";



const ProfileUserPage = (props) => {
  const {idUser} = useParams();

  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.home__body}>
          <ProfileBar idUser={idUser} />
          <Feed />

        </div>
      </div>
    </>
  );
};

export default ProfileUserPage;
