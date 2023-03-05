import React, { useState, useEffect } from "react";
import { apiWrapper } from "../../../utils/apiWrapper";
import styles from "./listJobs.module.css";
import ItemJob from "./item/itemJob";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ListJobs = (props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#6B9D6F",
      },
    },
  });

  const [jobs, setJobs] = useState([]);
  const [reload, setReload] = useState(false);

  const [valueText, setValueText] = React.useState("");
  const handleChangeText = (event, newValue) => {
    setValueText(event.target.value);
  };

  const [valueRange, setValueRange] = React.useState([0, 100000]);
  const handleChangeRange = (event, newValue) => {
    setValueRange(newValue);
  };

  const handleClickBusqueda = () => {
    //alert(`text : ${valueText} \rrange : ${valueRange[0]}-${valueRange[1]}`);
    setReload(!reload);
  };

  useEffect(() => {
    apiWrapper("job", "GET").then((res) => {
      const resAux = res.filter(
        (element) =>
          element.salary >= valueRange[0] &&
          element.salary <= valueRange[1] &&
          element.jobPosition.toLowerCase().indexOf(valueText.toLowerCase()) !== -1
      );

      setJobs(resAux);
    });
  }, [reload]);

  return (
    <>
      <div className={styles.busqueda}>
        <div>
          <ThemeProvider theme={theme}>
            <TextField
              id="standard-basic"
              label="Buscar por Nombre de Oferta"
              variant="standard"
              InputProps={{
                className: styles.BusquedaText,
              }}
              InputLabelProps={{
                className: styles.BusquedaText,
              }}
              SelectProps={{
                className: styles.BusquedaText,
              }}
              value={valueText}
              onChange={handleChangeText}
            />
          </ThemeProvider>
        </div>
        <div>
          <ThemeProvider theme={theme}>
            <InputLabel style={{ backgroundColor: "transparent" }}>Salario Anual €</InputLabel>
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Salario Anual €"}
                value={valueRange}
                min={0}
                step={1}
                max={100000}
                onChange={handleChangeRange}
                valueLabelDisplay="auto"
              />
            </Box>
          </ThemeProvider>
        </div>
        <div>
          <button
            className={styles.boton}
            onClick={() => {
              handleClickBusqueda();
            }}
          >
            <SearchIcon />
            BUSQUEDA
          </button>
        </div>
      </div>
      <div className={styles.separador}>&nbsp;</div>
      <div className={styles.container}>
        {jobs &&
          jobs.map((e, index) => (
            <ItemJob
              key={e._id}
              element={e}
              index={index + 1}
              userId={props.userId}
              companyOwner={props.companyOwner}
              reloadPage={handleClickBusqueda}
            />
          ))}
      </div>
    </>
  );
};

export default ListJobs;
