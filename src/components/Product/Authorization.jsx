import React from "react";
import Navbar from "../Navbar/Navbar";
import { Button } from "@mui/material";
import "./Authorization.css";
const Authorization = () => {
  return (
    <div>
      <Navbar />
      <div id="autoside">
        <h2>LOGIN</h2>
        <input className="autoinp" type="text" placeholder="email" />
        <input className="autoinp" type="password" placeholder="password" />
        <button className="autoBtn">Login</button>
      </div>
    </div>
  );
};

export default Authorization;
