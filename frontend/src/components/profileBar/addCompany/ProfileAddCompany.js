import React, { useEffect, useState } from "react";
import styles from "./ProfileAddCompany.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { apiWrapper } from "../../../utils/apiWrapper";

export const ProfileAddCompany = (props) => {
  const [checkTabCompany, setCheckTabCompany] = useState("");

  const handleClickCheckTabCompany = (value, company) => {
    setCheckTabCompany(value);
    setCompanySelected(company);
  };

  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [companySize, setCompanySize] = useState("");

  const [search, setSearch] = useState("");
  const [companys, setCompanys] = useState();
  const [companySelected, setCompanySelected] = useState({});

  const handleClickSearch = async (value) => {
    try {
      await apiWrapper(`company/name/${value}`, "GET").then((response) => {
        console.log(response);
        setCompanys(response);
      });
    } catch (error) {
      console.error(error);
      /*
          toast.error("Error ocurrido al obtener las Compañias.", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });*/
    }
  };

  useEffect(() => {
    console.log("inicio");
    handleClickSearch("$.$"); //forzams a mostrar todas las empresas
  }, []);

  const handleClickLinkCompany = () => {
    console.log("zz " + companySelected._id);
    const res = apiWrapper("company/" + companySelected._id, "PATCH", {
      owner: props.userId,
    });
    props.reloadPage();
  };

  const handleClickNuevoCompany = () => {
    console.log("Creacion Nueva Compañia ");

    const body = {
      name: companyName,
      company_size: companySize,
      company_type: companyType,
      website: companyWebsite,    
    };

    const res = apiWrapper("company/", "POST", body);
    console.log("CREATE comany frontend POST");
    //setCompanySelected(body);
    //props.reloadPage();
    handleClickSearch("$.$"); 
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.search}>
        <SearchIcon
          className={styles.searchIcon}
          onClick={() => {
            //alert(companys)
            handleClickSearch(search);
            console.log(companys);
          }}
        />
        <input
          type="text"
          placeholder="Buscar Empresa ... "
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      {companys && companys !== [] && (
        <div className={styles.contenido}>
          <div className={styles.izquierda}>
            {
              //companys &&
              companys.map((element, index) => (
                <>
                  <input
                    className={styles.tabCompany}
                    id={styles["tabCompany" + index]}
                    type="radio"
                    name="tabsCompany"
                    checked={
                      checkTabCompany === "tabCompany" + index
                        ? "checked"
                        : null
                    }
                  />
                  <label
                    className={styles.labelCompany}
                    htmlFor={"tabCompany" + index}
                    onClick={() => {
                      handleClickCheckTabCompany(`tabCompany${index}`, element);
                    }}
                  >
                    {`${element.name}`}
                  </label>
                </>
              ))
            }
          </div>
          <div
            className={
              styles.derecha /*+
      emsVisible === true ? styles.tablaValues_visible : styles.tablaValues_hidden)*/
            }
          >
            <div className={styles.tablaValues}>
              <label className={styles.tablaLabel}>Nombre : </label>
              <input
                className={styles.tablaInput}
                type="text"
                value={companySelected.name}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
              <label className={styles.tablaLabel}>Sitio Web : </label>
              <input
                className={styles.tablaInput}
                type="text"
                value={companySelected.website}
                onChange={(e) => {
                  setCompanyWebsite(e.target.value);
                }}
              />
              <label className={styles.tablaLabel}>Tipo de Compañia : </label>
              <input
                className={styles.tablaInput}
                type="text"
                value={companySelected.company_type}
                onChange={(e) => {
                  setCompanyType(e.target.value);
                }}
              />
              <label className={styles.tablaLabel}>
                Tamaño de la Compañia :{" "}
              </label>
              <input
                className={styles.tablaInput}
                type="text"
                value={companySelected.company_size}
                onChange={(e) => {
                  setCompanySize(e.target.value);
                }}
              />
            </div>
            <div className={styles.tablaButtons}>
              <button
                className={styles.tablaButtonNuevo}
                onClick={() => handleClickNuevoCompany()}
              >
                NUEVO
              </button>
              <button
                className={styles.tablaButtonVincular}
                onClick={() => handleClickLinkCompany()}
              >
                VINCULAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileAddCompany;
