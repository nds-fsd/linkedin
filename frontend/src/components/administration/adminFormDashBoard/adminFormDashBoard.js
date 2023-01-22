import React, { useEffect, useState } from "react";
import CustomTable from "../../custom/customTable/customTable";
import CustomTableUserDashBoard from "../../custom/customTable/customTableUserDashBoard";
import AdminCard from "./adminCard";
import { apiWrapper } from "../../../utils/apiWrapper";
import styles from "./adminFormDashBoard.module.css";

const AdminFormDashBoard = (props) => {
  const [firstTimeOut, setFirstTimeOut] = useState(true);
  const [counterTimeOut, setCounterTimeOut] = useState(0);

  const [jsonUser, setJsonUser] = useState({});
  const [jsonCompany, setJsonCompany] = useState({});
  const [jsonJob, setJsonJob] = useState({});
  const [jsonPost, setJsonPost] = useState({});

  const camelCase = (param) => {
    let titleSplit = param.split("");
    if (param !== "") titleSplit[0] = titleSplit[0].toUpperCase();

    return titleSplit.join("");
  };

  /* HANDLE ============================================================================================= */
  const handleTimeOut = () => {
    //cuando salta e Contador, lanzamos las consultas necesarias.

    apiWrapper("user", "GET").then((res) => {
      //console.log(jsonUser);
      setJsonUser(res);
    });

    apiWrapper("company", "GET").then((res) => {
      //console.log(jsonCompany);
      setJsonCompany(res);
    });

    apiWrapper("job", "GET").then((res) => {
      //console.log(jsonJob);
      setJsonJob(res);
    });

    apiWrapper("post", "GET").then((res) => {
      //console.log(jsonPost);
      //console.log(jsonPost[0]["title"])
      setJsonPost(res);
    });
  };

  const handleJsonSortForCreatedAt = (json, ascendent = true) => {
    if (json && JSON.stringify!=="{}" )   {
      if (ascendent)
        return json.sort((a, b) => {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });
      else
        return json.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
    }
  };
  /* ==================================================================================================== */

  useEffect(() => {
    if (firstTimeOut) {
      //forzamos la primera carga antes de que se inicie el TimeOut
      setFirstTimeOut(!firstTimeOut);
      handleTimeOut();
    }

    //creamos un TimeOut para que el DashBoard se vaya actualizando solo cada X segundos
    const timer = setTimeout(() => {
      handleTimeOut();

      setCounterTimeOut(counterTimeOut + 1);
      console.log("counter:" + counterTimeOut);
    }, 5000);

    return () => clearTimeout(timer);
  }, [counterTimeOut, firstTimeOut]);

  return (
    <div className={styles.fondo}>
      {/*Title*/}
      <div className={styles.title}>{camelCase(props.navigationIdSelected)}</div>

      {/*NavBar*/}
      <div className={styles.topbar}>
        <div className={styles.toggle}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className={styles.user}>
          <img src="/img/avatar/AvatarMaker H 2.png" alt="avatar" />
        </div>
      </div>

      {/*Cards*/}
      <div className={styles.cardBox}>
        {/*TODO  al hacer Click en la Card, situarse en el elemento que interesa. Utilizar useRef para incluirle un addEventListener */}
        <AdminCard
          number={Object.keys(jsonUser).length}
          name="Usuarios"
          icon={<ion-icon name="people-outline"></ion-icon>}
          saveNavigationIdSelected={props.saveNavigationIdSelected}
        />
        <AdminCard
          number={Object.keys(jsonCompany).length}
          name="Empresas"
          icon={<ion-icon name="home-outline"></ion-icon>}
          saveNavigationIdSelected={props.saveNavigationIdSelected}
        />
        <AdminCard
          number={Object.keys(jsonJob).length}
          name="Ofertas"
          icon={<ion-icon name="desktop-outline"></ion-icon>}
          saveNavigationIdSelected={props.saveNavigationIdSelected}
        />
        <AdminCard
          number={Object.keys(jsonPost).length}
          name="Posts"
          icon={<ion-icon name="id-card-outline"></ion-icon>}
          saveNavigationIdSelected={props.saveNavigationIdSelected}
        />
      </div>

      {/*Graphs*/}
      <div className={styles.graphBox}>
        <div className={styles.graph}>&nbsp;</div>
        <div className={styles.graph}>&nbsp;</div>
      </div>

      {/*Details*/}
      <div className={styles.details}>
        <div className={styles.lastPosts}>
          <div className={styles.cardHeader}>
            <h2>Last 10 Posts</h2>
          </div>
          {/*handleJsonSortForCreatedAt(jsonPost, false)*/}
          <CustomTable
            json={jsonPost}
            columsDescription={[
              { name: "titulo" },
              { name: "contenido" },
              { name: "Fecha Creacion" },
            ]}
            columsName={[{ name: "title" }, { name: "content" }, { name: "createdAt" }]}
          />
        </div>
        <div className={styles.lastUsers}>
          <div className={styles.cardHeader}>
            <h2>Last Users</h2>
          </div>
          <CustomTableUserDashBoard />
        </div>
      </div>
    </div>
  );
};

export default AdminFormDashBoard;
