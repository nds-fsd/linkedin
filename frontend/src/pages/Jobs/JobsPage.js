import React from "react";
import Header from "../../components/header/Header";
import styles from "./jobsPage.module.css";
import { useParams } from "react-router-dom";



const JobsPage = (props) => {
  const {idUser} = useParams();

  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.home__body}>
          Job
        </div>
      </div>
    </>
  );
};

export default JobsPage;
