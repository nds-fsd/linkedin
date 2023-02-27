import React, { useState } from "react";
import Header from "../../components/header/Header";
import styles from "./jobsPage.module.css";
import { useParams } from "react-router-dom";

const JobsPage = (props) => {
  const { idUser } = useParams();

  const [checkTab, setCheckTab] = useState("tab3");
  const handleClickCheckTab = (value) => {
    setCheckTab(value);
  };

  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.home__body}>
          <div className={styles.contenido}>
            <div className={styles.izquierda}>
              {/*TABS -------------------------------------------------------------------------------------------*/}
              <div className={styles.tabs}>
                <input
                  className={styles.tab}
                  id={styles["tab1"]}
                  type="radio"
                  name="tabs"
                  checked={checkTab === "tab1" ? "checked" : null}
                />
                <label
                  className={styles.label}
                  htmlFor="tab1"
                  onClick={() => {
                    handleClickCheckTab("tab1");
                  }}
                >
                  Consulta de Ofertas
                </label>

                <input
                  className={styles.tab}
                  id={styles["tab2"]}
                  type="radio"
                  name="tabs"
                  checked={checkTab === "tab2" ? "checked" : null}
                />
                <label
                  className={styles.label}
                  htmlFor="tab2"
                  onClick={() => {
                    handleClickCheckTab("tab2");
                  }}
                >
                  Generacion de Oferta
                </label>

                  {/*CONTENT (TAB) 1 -------------------------------------------------------------------------------------------*/}
                  <section id={styles["content1"]} className={styles.section}>
                  <div>
                    <div className={styles.values}>
                      <span>Consulta</span>
                    </div>
                  </div>
                </section>

                {/*CONTENT (TAB) 2 -------------------------------------------------------------------------------------------*/}
                <section id={styles["content2"]} className={styles.section}>
                  <div>
                    <div className={styles.values}>
                      <span>Generador</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className={styles.derecha}>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsPage;
