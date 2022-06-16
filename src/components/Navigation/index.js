import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "./img/logo1.png";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? (
    <LoggedIn
    // style={{ marginLeft: "auto" }}
    />
  ) : (
    <LoggedOut
    // style={{ marginLeft: "auto" }}
    />
  );

  return (
    <div className="navigation">
      <Box>
        <AppBar position="static" style={{ backgroundColor: "black" }}>
          <Toolbar>
            <Typography variant="h6" mr={3}>
              <img className="logo" width="50px" src={logo} alt="" />
            </Typography>

            <NavLink
              style={{ color: "orange", textDecoration: "none" }}
              to={"/"}
            >
              <h2> Love is Boolean </h2>
            </NavLink>

            <NavLink
              style={{ color: "white", textDecoration: "none" }}
              to={"/"}
            >
              <Button color="inherit">Home</Button>
            </NavLink>

            {token && (
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to={"/profile"}
              >
                <Button color="inherit">Profile</Button>
              </NavLink>
            )}

            <Box ml="auto" display="flex">
              {loginLogoutControls}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>{" "}
    </div>
  );
}
