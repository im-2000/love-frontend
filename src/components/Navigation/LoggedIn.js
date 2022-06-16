import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <>
      <Typography style={{ padding: ".5rem 1rem" }}>{user?.email}</Typography>
      <Button
        variant="outlined"
        color="inherit"
        onClick={() => {
          navigate("/");
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </>
  );
}
