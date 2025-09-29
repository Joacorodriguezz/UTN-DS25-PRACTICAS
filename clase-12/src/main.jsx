import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";
import "./styles/global.css";
import { UsuarioProvider } from "./context/UsuarioContext.jsx";

const theme = createTheme();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsuarioProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </UsuarioProvider>
  </React.StrictMode>
);
