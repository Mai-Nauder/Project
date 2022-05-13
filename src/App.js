import "./index.css";

import "./CSS/bootstrap_original.css";
import {
  createTheme,
  Paper,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Appbar_component from "./Components/AppBar_Component";
import Accordion_component from "./Components/Accordion_Component";
import Stepper_Component from "./Components/Stepper_Component";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#03a9f4",
      light: "#00838f",
      dark: "#0d47a1",
    },
    secondary: {
      main: "#76ff03",
    },
    background: {
      default: "#232121",
    },
  },
});

const App = () => {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <Appbar_component></Appbar_component>branch test
          </div>
        </ThemeProvider>
      </div>
      <Stepper_Component></Stepper_Component>
      <Accordion_component></Accordion_component>
    </div>
  );
};

export default App;
