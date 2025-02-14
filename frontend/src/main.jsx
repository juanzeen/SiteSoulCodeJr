import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./assets/css/index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
