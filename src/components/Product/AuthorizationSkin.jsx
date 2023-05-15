import React from "react";
import "./Authorization.css";
import NavbarSkin from "../Navbar/NavbarSkin";
const AuthorizationSkin = () => {
  return (
    <div>
      <NavbarSkin />
      <div id="autosideSkin">
        <h2>LOGIN</h2>
        <input className="autoinp" type="text" placeholder="email" />
        <input className="autoinp" type="password" placeholder="password" />
        <button className="autoBtnSkin">Login</button>
      </div>
    </div>
  );
};

export default AuthorizationSkin;
