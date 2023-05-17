import React from "react";
import NavbarSkin from "../Navbar/NavbarSkin";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { Grid, Link, TextField } from "@mui/material";

const AuthorizationSkin = () => {
  const {
    user,
    email,
    password,
    emailError,
    passwordError,
    hasAccount,
    setEmail,
    setPassword,
    setHasAccount,

    handleSignUpSkin,
    handleLoginSkin,
  } = useAuth();

  const navigate = useNavigate();

  return (
    <div>
      <NavbarSkin />
      <div className="divider"></div>
      <div id="autoside">
        {hasAccount ? <h2>LOGIN</h2> : <h2>REGISTER</h2>}

        <TextField
          margin="normal"
          id="email"
          placeholder="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText={emailError}
        />
        <TextField
          margin="normal"
          placeholder="password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText={passwordError}
        />

        {hasAccount ? (
          <button
            className="autoBtn"
            onClick={() => {
              handleLoginSkin();
            }}
          >
            Login
          </button>
        ) : (
          <button
            className="autoBtn"
            onClick={() => {
              handleSignUpSkin();
            }}
          >
            Register
          </button>
        )}

        <Grid container sx={{ display: "flex", width: "30%", marginTop: "5%" }}>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            {hasAccount ? (
              <Link
                href="#"
                variant="body2"
                onClick={() => setHasAccount(!hasAccount)}
              >
                {"Don't have an account? Register Now"}
              </Link>
            ) : (
              <Link
                href="#"
                variant="body2"
                onClick={() => setHasAccount(!hasAccount)}
              >
                {"Already have an account? Login"}
              </Link>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AuthorizationSkin;
