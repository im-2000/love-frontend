import React from "react";
import NavbarItem from "./NavbarItem";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

export default function Favorites() {
  return (
    <>
      <NavLink
        style={{ color: "white", textDecoration: "none" }}
        to="/favorites"
      >
        <Button variant="outlined" color="inherit">
          My Favorites
        </Button>
      </NavLink>
    </>
  );
}
