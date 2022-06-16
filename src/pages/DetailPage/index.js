import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../store/user/actions";
import { fetchProfileById } from "../../store/profile/actions";
import { selectUser } from "../../store/user/selectors";
import {
  getLoading,
  selectProfileDetails,
} from "../../store/profile/selectors";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { Paper, Card, Grid, CardContent, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { selectToken } from "../../store/user/selectors";
import { useNavigate } from "react-router-dom";

export default function ProfileDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectProfileDetails);
  const user = useSelector(selectUser);

  const token = useSelector(selectToken);
  const navigate = useNavigate();

  if (token === null) {
    navigate("/");
  }

  console.log("user", user);

  //const { userId } = user?.id;

  console.log("details??", details);
  useEffect(() => {
    dispatch(fetchProfileById(id));
  }, [dispatch, id]);

  return (
    <Box className="detailsPage">
      <Breadcrumbs aria-label="breadcrumb" sx={{ m: 3 }}>
        <Link underline="hover" color="white" href="/">
          Home
        </Link>
        <Typography color="white">{details?.name}</Typography>
      </Breadcrumbs>
      <div>
        <Paper
          xs={12}
          md={6}
          p={2}
          sx={{ mx: "auto", width: 1000, flexWrap: "wrap" }}
        >
          {!details || details === null ? (
            "Loading"
          ) : (
            <div>
              <Card
                sx={{
                  width: 1000,
                  display: "flex",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <Grid>
                  <CardMedia
                    component="img"
                    sx={{ width: 400, display: { sm: "block" }, m: 3 }}
                    image={details.imageUrl}
                    alt="img"
                  />
                </Grid>
                <CardContent
                  sx={{ justifyContent: "flex-end", textAlign: "left" }}
                >
                  <Typography
                    component="h2"
                    variant="h5"
                    sx={{ mb: 1, fontWeight: "bold", color: "orange" }}
                  >
                    {details.name}
                  </Typography>
                  <Typography
                    component="h4"
                    variant="h6"
                    sx={{ mb: 1, fontWeight: "medium" }}
                    color="inherit"
                  >
                    {details.age}, {details.gender}
                  </Typography>
                  <h6 style={{ opacity: 0.7 }}>
                    <strong>Location:</strong> {details.location}
                  </h6>
                  <p>
                    <strong style={{ opacity: 0.7 }}>Language: </strong>
                    {details.language}
                  </p>
                  <p style={{ color: "orange" }}>
                    <strong>About me: </strong>
                  </p>
                  <p>{details.about}</p>
                  <p>
                    {" "}
                    <a href={details.githubUrl}> GitHub</a>
                  </p>

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      display: { sm: "block" },
                      m: 3,
                      backgroundColor: "violet",
                    }}
                  >
                    Send a Message
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      display: { sm: "block" },
                      m: 3,
                      backgroundColor: "violet",
                    }}
                    onClick={() => dispatch(setFavorites(details.id))}
                  >
                    {user?.fav?.some((u) => u.id === details.id)
                      ? "FALSE"
                      : "TRUE"}{" "}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </Paper>
      </div>
    </Box>
  );
}
