import React, { useState, useEffect } from "react";
import styles from "./ProfileBar.module.css";
import { Avatar, Button } from "@mui/material";
import { apiWrapper } from "../../utils/apiWrapper";
import { ToastContainer, toast } from "react-toastify";
import { tokenDecoder } from "../../utils/tokenDecoder";
import ProfileAddCompany from "./addCompany/ProfileAddCompany";
import CompanyAdd from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

export const ProfileBar = (props) => {
  const userId = props.idUser;
  const userIdToken = tokenDecoder();

  const [mode, setMode] = useState("read");

  const [actualizar, setActualizar] = useState(true);
  const [ownerCompany, setOwnerCompany] = useState({});

  const [data, setData] = useState({});

  const [puesto, setPuesto] = useState("");
  const [empresaActual, setEmpresaActual] = useState("");
  const [sector, setSector] = useState("");
  const [ubicacionPais, setUbicacionPais] = useState("");
  const [ubicacionCodigoPostal, setUbicacionCodigoPostal] = useState("");
  const [ubicacionCiudad, setUbicacionCiudad] = useState("");
  const [educacionInstitucion, setEducacionInstitucion] = useState("");
  const [educacionTitulacion, setEducacionTitulacion] = useState("");
  const [educacionDisciplina, setEducacionDisciplina] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoTelefono, setTipoTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState();
  const [web, setWeb] = useState("");

  const [reload, setReload] = useState(false);

  const reloadPage = () => {
    setReload(!reload);
  };

  //-------------------------------------------------------------------------------------------
  //DATOS DEL PERFIL --------------------------------------------------------------------------
  useEffect(() => {
    if (actualizar) {
      apiWrapper("user/" + userId).then((response) => {
        //console.log("dentro " + JSON.stringify(response));
        setData(response);
        setPuesto(response.puesto);
        setEmpresaActual(response.empresa_actual);
        setSector(response.sector);

        setUbicacionPais(response.ubicacion_pais);
        setUbicacionCodigoPostal(response.ubicacion_Codigo_postal);
        setUbicacionCiudad(response.ubicacion_Ciudad);

        setEducacionInstitucion(response.educacion_institucion);
        setEducacionTitulacion(response.educacion_titulacion);
        setEducacionDisciplina(response.educacion_disciplina);

        setTelefono(response.telefono);
        setTipoTelefono(response.tipo_telefono);
        setFechaNacimiento(new Date(response.fecha_nacimiento).toISOString().split("T")[0]);
        setWeb(response.web);
      });
      setActualizar(!actualizar);
    }

    apiWrapper("company/owner/" + userId, "GET").then((response) => {
      if (JSON.stringify(response) !== undefined) {
        if (response) {
          const resAux = response.map((element) => {
            return element;
          });
          setOwnerCompany(resAux);
        }
      }
      //console.log("OWNER ----" + JSON.stringify(response));
      //console.log("OWNER ----" + ownerCompany.length);
    });
  }, [userId, reload]);

  const fullName = data.nombre + " " + data.apellido;
  const avatar = data.avatar;
  const anonimAvatar =
    "https://res.cloudinary.com/dkxlwv844/image/upload/v1676019494/Avatars%20Joblink/AvatarMaker_5_eaymit.png";

  const handleClick = () => {
    const body = {
      puesto: puesto,
      empresa_actual: empresaActual,
      sector: sector,

      ubicacion_pais: ubicacionPais,
      ubicacion_Codigo_postal: ubicacionCodigoPostal,
      ubicacion_Ciudad: ubicacionCiudad,

      educacion_institucion: educacionInstitucion,
      educacion_titulacion: educacionTitulacion,
      educacion_disciplina: educacionDisciplina,

      telefono: telefono,
      tipo_telefono: tipoTelefono,
      fecha_nacimiento: fechaNacimiento,
      web: web,
    };

    //alert("body=" + JSON.stringify(body));
    apiWrapper("user/" + userId, "PATCH", body).then((response) => {
      //alert("updated Profile -> " + response);
      setActualizar(true);
      toast.success("Se ha actualizado el Perfil", {
        autoClose: 3000,
      });
    });
    //setActualizar(true);
  };

  const handleChange = (setObjectChanged, value) => {
    setObjectChanged(value);
  };

  //-------------------------------------------------------------------------------------------
  //DATOS DE LA EMPRESA -----------------------------------------------------------------------
  const [claseAñadirEmpresa, setClaseAñadirEmpresa] = useState(`${styles.sidebar__detail}`);
  const handleClickEmpresa = () => {
    setClaseAñadirEmpresa(`${styles.sidebar__detail_ampliado}`);
  };
  useEffect(() => {}, [claseAñadirEmpresa]);

  const [checkTab, setCheckTab] = useState("tab3");
  const handleClickCheckTab = (value) => {
    setCheckTab(value);
  };

  const handleClickDeleteLinkCompany = () => {
    const res = apiWrapper("company/" + ownerCompany[0]._id, "PATCH", { owner: null });
    //alert("handleClickDeleteLinkCompany" + ownerCompany[0]._id);
    reloadPage();
  };

  //-------------------------------------------------------------------------------------------
  //useEffect Inicio --------------------------------------------------------------------------

  useEffect(() => {
    //console.log("userId : " + userId);
    //console.log("userIdToken : " + userIdToken);
    if (userId === userIdToken) {
      setMode("write");
    }
  }, []);

  //Para comprobar que el MODO ha cambiado
  /*
  useEffect(() => {
    console.log("mode : " + mode);
  }, [mode]);
  */
  //-------------------------------------------------------------------------------------------
  //Inicio HTML -------------------------------------------------------------------------------

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <img src="img/pexels-gradienta-6985001.jpg" alt="" />
        <Avatar
          className={styles.sidebar__avatar}
          src={data.avatar ? avatar : anonimAvatar}
          alt=""
        />
        <h2>
          {fullName}
          <CreateIcon
            className={
              mode === "write"
                ? styles.iconEditName + " " + styles.element_visible
                : styles.element_hidden
            }
          />
        </h2>
      </div>

      <div className={styles.sidebar__stats_dark}>
        <div className={styles.enLinea}>
          <div className={styles.sidebar__stat}>
            <p>Followers</p>
            <p className={styles.sidebar__statNumber}>{data?.followers?.length}</p>
          </div>
          <div className={styles.sidebar__stat}>
            <p>Followings</p>
            <p className={styles.sidebar__statNumber}>{data?.following?.length}</p>
          </div>
        </div>
      </div>
      <div className={styles.sidebar__stats}>
        <div className={styles.values}>
          <span>Fecha Nacimiento</span>
          <input
            type="date"
            disabled={mode === "write" ? null : "disabled"}
            value={fechaNacimiento}
            onChange={(e) => {
              handleChange(setFechaNacimiento, e.target.value);
            }}
          />
        </div>
        <div className={styles.values}>
          <span>Tipo Telefono</span>
          <select
            value={tipoTelefono}
            disabled={mode === "write" ? null : "disabled"}
            onChange={(e) => {
              handleChange(setTipoTelefono, e.target.value);
            }}
          >
            <option></option>
            <option>Trabajo</option>
            <option>Movil</option>
          </select>
          <span>Telefono</span>
          <input
            type="text"
            disabled={mode === "write" ? null : "disabled"}
            required="required"
            pattern="/[0-9]*"
            maxLength="9"
            value={telefono}
            onChange={(e) => {
              handleChange(setTelefono, e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.values}>
          <span>Web</span>
          <input
            type="text"
            disabled={mode === "write" ? null : "disabled"}
            value={web}
            onChange={(e) => {
              handleChange(setWeb, e.target.value);
            }}
          />
        </div>
        <div className={styles.values}>
          <span className={styles.espacio}>&nbsp;</span>
        </div>

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
            Educacion
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
            Ubicacion
          </label>

          <input
            className={styles.tab}
            id={styles["tab3"]}
            type="radio"
            name="tabs"
            checked={checkTab === "tab3" ? "checked" : null}
          />
          <label
            className={styles.label}
            htmlFor="tab3"
            onClick={() => {
              handleClickCheckTab("tab3");
            }}
          >
            Trabajo Actual
          </label>

          {/*CONTENT (TAB) 1 -------------------------------------------------------------------------------------------*/}
          <section id={styles["content1"]} className={styles.section}>
            <div>
              <div className={styles.values}>
                <span>Institucion</span>
                <input
                  type="text"
                  disabled={mode === "write" ? null : "disabled"}
                  placeholder="Universidad, .."
                  value={educacionInstitucion}
                  onChange={(e) => {
                    handleChange(setEducacionInstitucion, e.target.value);
                  }}
                />
              </div>
              <div className={styles.values}>
                <span>Titulacion</span>
                <input
                  type="text"
                  disabled={mode === "write" ? null : "disabled"}
                  value={educacionTitulacion}
                  onChange={(e) => {
                    handleChange(setEducacionTitulacion, e.target.value);
                  }}
                />
              </div>
              <div className={styles.values}>
                <span>Disciplina</span>
                <input
                  type="text"
                  disabled={mode === "write" ? null : "disabled"}
                  placeholder="Empresariales, ..."
                  value={educacionDisciplina}
                  onChange={(e) => {
                    handleChange(setEducacionDisciplina, e.target.value);
                  }}
                />
              </div>
            </div>
          </section>

          {/*CONTENT (TAB) 2 -------------------------------------------------------------------------------------------*/}
          <section id={styles["content2"]} className={styles.section}>
            <div>
              <div className={styles.values}>
                <span>Pais</span>
                <input
                  type="text"
                  disabled={mode === "write" ? null : "disabled"}
                  value={ubicacionPais}
                  onChange={(e) => {
                    handleChange(setUbicacionPais, e.target.value);
                  }}
                />
              </div>
              <div className={styles.values}>
                <span>Codigo Postal</span>
                <input
                  type="text"
                  disabled={mode === "write" ? null : "disabled"}
                  value={ubicacionCodigoPostal}
                  onChange={(e) => {
                    handleChange(setUbicacionCodigoPostal, e.target.value);
                  }}
                />
              </div>
              <div className={styles.values}>
                <span>Ciudad</span>
                <input
                  type="text"
                  disabled={mode === "write" ? null : "disabled"}
                  value={ubicacionCiudad}
                  onChange={(e) => {
                    handleChange(setUbicacionCiudad, e.target.value);
                  }}
                />
              </div>
            </div>
          </section>

          {/*CONTENT (TAB) 3 -------------------------------------------------------------------------------------------*/}
          <section id={styles["content3"]} className={styles.section}>
            <div>
              <div className={styles.values}>
                <span>Nombre de la Empresa</span>
                <input
                  type="text"
                  disabled={mode === "write" ? null : "disabled"}
                  value={empresaActual}
                  onChange={(e) => {
                    handleChange(setEmpresaActual, e.target.value);
                  }}
                />
              </div>
              <div className={styles.values}>
                <span>Puesto de Trabajo</span>
                <input
                  type="text"
                  disabled={mode === "write" ? null : "disabled"}
                  value={puesto}
                  onChange={(e) => {
                    handleChange(setPuesto, e.target.value);
                  }}
                />
              </div>
              <div className={styles.values}>
                <span>Sector</span>
                <select
                  value={sector}
                  disabled={mode === "write" ? null : "disabled"}
                  onChange={(e) => {
                    handleChange(setSector, e.target.value);
                  }}
                >
                  <option></option>
                  <option>Alimentacion</option>
                  <option>Tecnologia</option>
                  <option>Marketing</option>
                  <option>Restauracion</option>
                  <option>Artes Escenicas</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.values}>
          <span className={styles.espacio}>&nbsp;</span>
          <Button
            className={mode === "write" ? styles.element_visible : styles.element_hidden}
            onClick={() => {
              handleClick();
            }}
          >
            Actualizar
          </Button>
        </div>
      </div>
      {/*<div className={styles.sidebar__detail}>*/}
      <div className={claseAñadirEmpresa}>
        <div className={styles.detailCabecera}>
          <div className={styles.textoEmpresa}>
            Propietario de la Empresa : {ownerCompany.length > 0 ? ownerCompany[0].name : ""}
          </div>
          <div className={styles.botonesEmpresa}>
            <button
              className={
                styles.companyAdd +
                " " +
                (mode === "write"
                  ? ownerCompany.length > 0
                    ? styles.element_hidden
                    : styles.element_visible
                  : styles.element_hidden)
              }
              onClick={() => {
                handleClickEmpresa();
              }}
            >
              <CompanyAdd className={styles.companyAdd_icon}></CompanyAdd>
              Añadir Empresa
            </button>
            <DeleteIcon
              className={
                styles.companyAdd_icon +
                " " +
                (mode === "write"
                  ? ownerCompany.length > 0
                    ? styles.element_visible
                    : styles.element_hidden
                  : styles.element_hidden)
              }
              onClick={() => {
                handleClickDeleteLinkCompany();
              }}
            />
          </div>
        </div>

        {ownerCompany.length > 0 ? (
          <></>
        ) : (
          <ProfileAddCompany userId={userId} reloadPage={reloadPage} />
        )}
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ProfileBar;
