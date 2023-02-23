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
    const res = apiWrapper("company/" + companySelected._id, "PATCH", { owner: props.userId });
    props.reloadPage();
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
                    checked={checkTabCompany === "tabCompany" + index ? "checked" : null}
                  />
                  <label
                    className={styles.labelCompany}
                    htmlFor={"tabCompany" + index}
                    onClick={() => {
                      handleClickCheckTabCompany(`tabCompany${index}`, element);
                    }}
                  >
                    {`${element.name} ( ${element._id} )`}
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
              <input className={styles.tablaInput} type="text" value={companySelected.name} />
              <label className={styles.tablaLabel}>Sitio Web : </label>
              <input className={styles.tablaInput} type="text" value={companySelected.website} />
              <label className={styles.tablaLabel}>Tipo de Compañia : </label>
              <input
                className={styles.tablaInput}
                type="text"
                value={companySelected.company_type}
              />
              <label className={styles.tablaLabel}>Tamaño de la Compañia : </label>
              <input
                className={styles.tablaInput}
                type="text"
                value={companySelected.company_size}
              />
            </div>
            <div className={styles.tablaButtons}>
              {/*<button className={styles.tablaButtonNuevo}>NUEVO</button>*/}
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
