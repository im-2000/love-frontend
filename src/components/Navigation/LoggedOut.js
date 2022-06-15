import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function LoggedOut() {
  return (
    <>
      <NavLink style={{ color: "white", textDecoration: "none" }} to="/login">
        <Button variant="outlined" color="inherit">
          Login
        </Button>
      </NavLink>
    </>
  );
}
