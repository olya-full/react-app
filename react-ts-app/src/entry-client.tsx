import React from "react";
import ReactDOM from "react-dom/client";
import WrappedApp from "./components/App/App";
import "./main.css";

ReactDOM.hydrateRoot(document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
