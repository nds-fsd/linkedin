import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import styles from "./jobsPage.module.css";
import { useParams } from "react-router-dom";
import ListJobs from "../../components/jobs/list/listJobs";
import LinkJobs from "../../components/jobs/links/linkJobs";
import GeneratorJobs from "../../components/jobs/generator/generatorJobs";
import ViewListIcon from "@mui/icons-material/ViewList";
import AddLinkIcon from "@mui/icons-material/AddLink";
import WorkIcon from "@mui/icons-material/Work";
import { apiWrapper } from "../../utils/apiWrapper";

const JobsPage = (props) => {
  const { idUser } = useParams();
  const [companyOwner, setCompanyOwner] = useState({});

  const [selectOptions, setSelectOptions] = useState(1);
  const handleClickSelectOptions = (value) => {
    setSelectOptions(value);
  };

  /*useEffect(() => {}, [selectOptions]);*/

  useEffect(() => {
    apiWrapper("company/", "GET").then((res) => {
      const resAux = res.filter((element) => element.owner === idUser);
      setCompanyOwner(resAux);
    });
  }, []);

  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.home__body}>
          <div className={styles.contenido}>
            <div className={styles.izquierda}>
              <div
                className={selectOptions === 1 ? styles.opcionSelected : styles.opciones}
                onClick={() => {
                  handleClickSelectOptions(1);
                }}
              >
                <ViewListIcon className={styles.iconos}></ViewListIcon>
                <h2>Consulta de Ofertas</h2>
              </div>
              <div
                className={selectOptions === 2 ? styles.opcionSelected : styles.opciones}
                onClick={() => {
                  handleClickSelectOptions(2);
                }}
              >
                <AddLinkIcon className={styles.iconos}></AddLinkIcon>
                <h2>Ofertas Linkadas</h2>
              </div>

              {companyOwner.length > 0 && (
                <div
                  className={selectOptions === 3 ? styles.opcionSelected : styles.opciones}
                  onClick={() => {
                    handleClickSelectOptions(3);
                  }}
                >
                  <WorkIcon className={styles.iconos}></WorkIcon>
                  <h2>Generador de Ofertas</h2>
                </div>
              )}
            </div>
            <div className={styles.derecha}>
              <div className={styles.contenedor}>
                {selectOptions === 1 && <ListJobs userId={idUser} />}
                {selectOptions === 2 && <LinkJobs userId={idUser} />}
                {companyOwner.length > 0 && selectOptions === 3 && (
                  <GeneratorJobs userId={idUser} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsPage;
