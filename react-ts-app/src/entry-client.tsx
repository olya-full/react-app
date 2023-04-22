import React from "react";
import ReactDOM from "react-dom/client";
import WrappedApp from "./components/App/App";
import "./main.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <WrappedApp />
    </BrowserRouter>
  </React.StrictMode>
);
