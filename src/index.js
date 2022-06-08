import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { Landing } from "./pages";
import { Footer, Header } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Landing />
    <Footer />
  </React.StrictMode>
);
