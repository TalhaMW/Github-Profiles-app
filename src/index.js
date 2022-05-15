import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/user-context";
import { AlertProvider } from "./context/alert/alertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <AlertProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlertProvider>
  </UserContextProvider>
);
