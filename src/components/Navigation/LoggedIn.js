import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { Button, Typography } from "@mui/material";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Typography style={{ padding: ".5rem 1rem" }}>{user?.email}</Typography>
      <Button
        variant="outlined"
        color="inherit"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
}
