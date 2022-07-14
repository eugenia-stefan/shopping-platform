import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Components/Auth";
import Registration from "./Components/Registration";
import Management from "./Components/Management";
import Details from "./Components/Details";
import Inventory from "./Components/Inventory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-in" element={<Auth />} />
      <Route path="/sign-up" element={<Registration />} />
      <Route path="/shop-manager" element={<Management />} />
      <Route path="/shop-details" element={<Details />} />
      <Route path="/shop-inventory" element={<Inventory />} />
    </Routes>
  </BrowserRouter>
);
