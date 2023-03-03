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

  const [valueText, setValueText] = React.useState("");
  const handleChangeText = (event, newValue) => {
    setValueText(event.target.value);
  };

  const [valueRange, setValueRange] = React.useState([20000, 60000]);
  const handleChangeRange = (event, newValue) => {
    setValueRange(newValue);
  };

  const handleClickBusqueda = () => {
    alert(`click -> text : ${valueText} range : ${valueRange[0]}-${valueRange[1]}`);
  };

  useEffect(() => {
    apiWrapper("job", "GET").then((res) => {
      setJobs(res);
    });
  }, []);

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
            <InputLabel style={{ backgroundColor: "transparent" }}>Salario</InputLabel>
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Salario €"}
                value={valueRange}
                min={0}
                step={1}
                max={200000}
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
        {jobs && jobs.map((e, index) => <ItemJob key={e._id} element={e} index={index} />)}
      </div>
    </>
  );
};

export default ListJobs;
