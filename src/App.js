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
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#202025",
      light: "#47474d",
      dark: "#000000",
    },
    secondary: {
      main: "#f50056",
      light: "#ff5982",
      dark: "#bb002e"
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#fff"
    },
    background: {
      default: "#232121",
    },
  },
});

const App = () => {


  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#ffffff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Appbar_component></Appbar_component>
        {/* <Stepper_Component></Stepper_Component> */}
        <div className="container">
          <Accordion_component></Accordion_component>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
