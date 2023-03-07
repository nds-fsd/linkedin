import React, { useState } from "react";
import styles from "./generatorJobs.module.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { apiWrapper } from "../../../utils/apiWrapper";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const GeneratorJobs = (props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#6B9D6F",
      },
    },
  });

  const [posicion, setPosicion] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [tamaño, setTamaño] = React.useState("");
  const [salario, setSalario] = React.useState("");
  const [experiencia, setExperiencia] = React.useState("");

  const handleChangeText = (event, newValue) => {
    //console.log(event);
    switch (event.target.id) {
      case "posicion":
        setPosicion(event.target.value);
        break;
      case "descripcion":
        setDescripcion(event.target.value);
        break;
      case "tamaño":
        setTamaño(event.target.value);
        break;
      case "salario":
        setSalario(event.target.value);
        break;
      case "experiencia":
        setExperiencia(event.target.value);
        break;
      default:
        break;
    }
  };

  const [pais, setPais] = React.useState("");
  const handleChangeSelectPais = (event) => {
    setPais(event.target.value);
  };

  const [lugar, setLugar] = React.useState("");
  const handleChangeSelectLugar = (event) => {
    setLugar(event.target.value);
  };

  const [dias, setDias] = React.useState([]);

  const [checkedDias, setCheckedDias] = React.useState({
    lunes: false,
    martes: false,
    miercoles: false,
    jueves: false,
    viernes: false,
    sabado: false,
    domingo: false,
  });
  const { lunes, martes, miercoles, jueves, viernes, sabado, domingo } = checkedDias;

  const handleCheckDias = (event) => {
    //Modificamos el Check del Componente
    setCheckedDias({
      ...checkedDias,
      [event.target.name]: event.target.checked,
    });

    //ajustamos el valor de los checks para la respuesta al Endpoint
    let diasAux = dias;
    if (event.target.checked) {
      diasAux.push(event.target.defaultValue);
    } else {
      diasAux.splice(diasAux.indexOf(event.target.defaultValue), 1);
    }
    setDias(diasAux);
  };

  const resetValues = () => {
    setPosicion("");
    setDescripcion("");
    setTamaño("");
    setSalario("");
    setExperiencia("");
    setPais("");
    setLugar("");
    setCheckedDias({
      lunes: false,
      martes: false,
      miercoles: false,
      jueves: false,
      viernes: false,
      sabado: false,
      domingo: false,
    });
  };

  const handleClickGuardar = () => {
    /*
    alert(
      `click \r posicion: ${posicion} \rdescrip: ${descripcion} \rtamaño: ${tamaño} \rsalario: ${salario} \rexperiencia: ${experiencia} \rpais: ${pais} \rlugar: ${lugar} \rdias: ${dias}`
    );
  */

    const body = {
      companyName: props.companyOwner[0].name,
      jobPosition: posicion,
      countryLocation: pais,
      workLocation: lugar,
      workday: dias.toString(),
      jobDescription: descripcion,
      company_logo_url: "",
      company_size: tamaño,
      salary: salario,
      experience: experiencia,
      company: props.companyOwner[0]._id,
    };

    //console.log(body);

    apiWrapper("job", "POST", body).then((res) => {
      resetValues();
      console.log(res);
    });
  };

  return (
    <div className={styles.basee}>
      <div className={styles.generador}>
        <div className={styles.fila}>
          <ThemeProvider theme={theme}>
            <TextField
              id="posicion"
              className={styles.elemento}
              label="Posicion de Trabajo ..."
              variant="standard"
              InputProps={{ className: styles.elemento }}
              InputLabelProps={{ className: styles.elemento }}
              SelectProps={{ className: styles.elemento }}
              value={posicion}
              onChange={handleChangeText}
            />
          </ThemeProvider>
        </div>
        <div className={styles.fila}>
          <ThemeProvider theme={theme}>
            <InputLabel className={styles.elementoLabel}>Pais</InputLabel>
            <Select
              id="pais"
              value={pais}
              label="pais"
              className={styles.elementoSelect}
              //InputProps={{ className: styles.elementoSelect }}
              //InputLabelProps={{ className: styles.elementoSelect }}
              //SelectProps={{ className: styles.elementoSelect }}
              onChange={handleChangeSelectPais}
            >
              <MenuItem value={"Canada"}>Canada</MenuItem>
              <MenuItem value={"EEUU"}>EEUU</MenuItem>
              <MenuItem value={"France"}>Francia</MenuItem>
              <MenuItem value={"Germany"}>Alemania</MenuItem>
              <MenuItem value={"Italy"}>Italia</MenuItem>
              <MenuItem value={"Mexic"}>Mexico</MenuItem>
              <MenuItem value={"Portugal"}>Portugal</MenuItem>
              <MenuItem value={"Spain"}>España</MenuItem>
            </Select>
          </ThemeProvider>
        </div>
        <div className={styles.fila}>
          <ThemeProvider theme={theme}>
            <InputLabel className={styles.elementoLabel}>Lugar de trabajo</InputLabel>
            <Select
              value={lugar}
              label="Lugar de Trabajo"
              className={styles.elementoSelect}
              onChange={handleChangeSelectLugar}
            >
              <MenuItem value={"Remote"}>Remoto</MenuItem>
              <MenuItem value={"Presential"}>Presencial</MenuItem>
            </Select>
          </ThemeProvider>
        </div>
        <div className={styles.fila}>
          <ThemeProvider theme={theme}>
            <FormControl
              component="fieldset"
              className={styles.elementoCheckBox}
              //InputProps={{ className: styles.elementoCheckBox }}
              //InputLabelProps={{ className: styles.elementoCheckBox }}
              //SelectProps={{ className: styles.elementoCheckBox }}
            >
              <FormLabel component="legend" className={styles.elementoCheck}>
                Dias
              </FormLabel>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  className={styles.elementoCheck}
                  value="lunes"
                  control={
                    <Checkbox
                      name="lunes"
                      checked={lunes}
                      onChange={(e) => {
                        handleCheckDias(e);
                      }}
                    />
                  }
                  label="Lunes"
                  labelPlacement="end"
                />
                <FormControlLabel
                  className={styles.elementoCheck}
                  value="martes"
                  control={
                    <Checkbox
                      name="martes"
                      checked={martes}
                      onChange={(e) => {
                        handleCheckDias(e);
                      }}
                    />
                  }
                  label="Martes"
                  labelPlacement="end"
                />
                <FormControlLabel
                  className={styles.elementoCheck}
                  value="miercoles"
                  control={
                    <Checkbox
                      name="miercoles"
                      checked={miercoles}
                      onChange={(e) => {
                        handleCheckDias(e);
                      }}
                    />
                  }
                  label="Miercoles"
                  labelPlacement="end"
                />
                <FormControlLabel
                  className={styles.elementoCheck}
                  value="jueves"
                  control={
                    <Checkbox
                      name="jueves"
                      checked={jueves}
                      onChange={(e) => {
                        handleCheckDias(e);
                      }}
                    />
                  }
                  label="Jueves"
                  labelPlacement="end"
                />
                <FormControlLabel
                  className={styles.elementoCheck}
                  value="viernes"
                  control={
                    <Checkbox
                      name="viernes"
                      checked={viernes}
                      onChange={(e) => {
                        handleCheckDias(e);
                      }}
                    />
                  }
                  label="Viernes"
                  labelPlacement="end"
                />
                <FormControlLabel
                  className={styles.elementoCheck}
                  value="sabado"
                  control={
                    <Checkbox
                      name="sabado"
                      checked={sabado}
                      onChange={(e) => {
                        handleCheckDias(e);
                      }}
                    />
                  }
                  label="Sabado"
                  labelPlacement="end"
                />
                <FormControlLabel
                  className={styles.elementoCheck}
                  value="domingo"
                  control={
                    <Checkbox
                      name="domingo"
                      checked={domingo}
                      onChange={(e) => {
                        handleCheckDias(e);
                      }}
                    />
                  }
                  label="Domingo"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
          </ThemeProvider>
        </div>
        <div className={styles.fila}>
          <ThemeProvider theme={theme}>
            <TextField
              id="descripcion"
              className={styles.elemento}
              InputProps={{ className: styles.elemento }}
              InputLabelProps={{ className: styles.elemento }}
              SelectProps={{ className: styles.elemento }}
              label="Descripcion de la Oferta"
              multiline
              rows={4}
              variant="standard"
              value={descripcion}
              onChange={handleChangeText}
            />
          </ThemeProvider>
        </div>
        <div className={styles.fila}>
          <ThemeProvider theme={theme}>
            <TextField
              id="tamaño"
              className={styles.elemento}
              InputProps={{ className: styles.elemento }}
              InputLabelProps={{ className: styles.elemento }}
              SelectProps={{ className: styles.elemento }}
              label="Tamaño de la Empresa"
              variant="standard"
              value={tamaño}
              onChange={handleChangeText}
            />
            <TextField
              id="salario"
              className={styles.elemento}
              InputProps={{ className: styles.elemento }}
              InputLabelProps={{ className: styles.elemento }}
              SelectProps={{ className: styles.elemento }}
              label="Salario"
              variant="standard"
              value={salario}
              onChange={handleChangeText}
            />
          </ThemeProvider>
        </div>
        <div className={styles.fila}>
          {" "}
          <ThemeProvider theme={theme}>
            <TextField
              id="experiencia"
              className={styles.elemento}
              InputProps={{ className: styles.elemento }}
              InputLabelProps={{ className: styles.elemento }}
              SelectProps={{ className: styles.elemento }}
              label="Experiencia"
              multiline
              rows={4}
              variant="standard"
              value={experiencia}
              onChange={handleChangeText}
            />
          </ThemeProvider>
        </div>
        <div className={styles.filaBoton}>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              onClick={() => {
                handleClickGuardar();
              }}
            >
              GUARDAR OFERTA
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default GeneratorJobs;
