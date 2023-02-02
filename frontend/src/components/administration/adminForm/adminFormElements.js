import React, { useEffect, useState } from "react";
import { apiWrapper } from "../../../utils/apiWrapper";
import CustomTable from "../../custom/customTable/customTable";
import {camelCase } from "../../../utils/functions";
import styles from "./adminFormElements.module.css";

const AdminFormElements = (props) => {
  const [jsonElement, setJsonElement] = useState({});
  const [element, setElement] = useState("");
  const [columsDescription, setColumsDescription] = useState({});
  const [columsName, setColumsName] = useState({});

  useEffect(() => {
    console.log("props " + props.navigationIdSelected);
    switch (props.navigationIdSelected.toLowerCase()) {
      case "usuarios":
        setElement("user");
        setColumsDescription([
          { name: "Usuario" },
          { name: "Email" },
          { name: "Password" },
          { name: "Fecha Creacion" },
        ]);
        setColumsName([
          { name: "username" },
          { name: "email" },
          { name: "password" },
          { name: "createdAt" },
        ]);
        break;
      case "empresas":
        setElement("company");
        setColumsDescription([
          { name: "Empresa" },
          { name: "Web" },
          { name: "Sector" },
          { name: "Volumen Trabajadores" },
          { name: "Fecha Creacion" },
        ]);
        setColumsName([
          { name: "name" },
          { name: "website" },
          { name: "company_type" },
          { name: "company_size" },
          { name: "createdAt" },
        ]);
        break;
      case "posts":
        setElement("post");
        setColumsDescription([
          { name: "titulo" },
          { name: "Descripcion" },
          { name: "contenido" },
          { name: "usuario" },
          { name: "comentarios" },
          { name: "Fecha Creacion" },
        ]);
        setColumsName([
          { name: "title" },
          { name: "description" },
          { name: "content" },
          { name: "user" },
          { name: "comments" },
          { name: "createdAt" },
        ]);
        break;
      case "ofertas":
        setElement("job");
        setColumsDescription([
          { name: "Nombre Compañia" },
          { name: "Oferta" },
          { name: "Pais" },
          { name: "Salario" },
          { name: "Fecha Creacion" },
        ]);
        setColumsName([
          { name: "companyName" },
          { name: "jobPosition" },
          { name: "countryLocation" },
          { name: "salary" },
          { name: "createdAt" },
        ]);
        break;
    }

    console.log("useEffect -> " + element);
    if (element) {
      apiWrapper(element, "GET").then((res) => {
        setJsonElement(res);
      });
    }
  }, [element]);

  return (
    <div className={styles.fondo}>
      {/*Title*/}
      <div className={styles.title}>{camelCase(props.navigationIdSelected)}</div>

      {/*NavBar*/}
      <div className={styles.topbar}>
        <div className={styles.toggle}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className={styles.search}>
          <label>
            <input type="text" placeholder="Search here" />
            <ion-icon name="search-outline"></ion-icon>
          </label>
        </div>
        <div className={styles.user}>
          <img src="/img/avatar/AvatarMaker H 2.png" alt="avatar" />
        </div>
      </div>

      {/*Custom Table*/}
      <div className={styles.customTable}>
        <CustomTable
          json={jsonElement}
          columsDescription={columsDescription}
          columsName={columsName}
          mode="write"
          element={element}
          titulo={props.navigationIdSelected}
        />
        {/*<CustomTable
          json={jsonElement}
          columsDescription={[
            { name: "titulo" },
            { name: "contenido" },
            { name: "Fecha Creacion" },
          ]}
          columsName={[{ name: "title" }, { name: "content" }, { name: "createdAt" }]}
        />*/}
      </div>
    </div>
  );
};

export default AdminFormElements;
