import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// bootstrap
import "bootstrap/dist/css/bootstrap.css";
// theme
import "./theme/custom.scss";

// ----------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
