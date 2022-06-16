import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectToken } from "../../store/user/selectors";
import { selectPeople } from "../../store/people/selector";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

export default function SavedProfiles() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log("selectors", user);
  const token = useSelector(selectToken);
  const profile = useSelector(selectPeople);

  /*useEffect(() => {
    dispatch(fetchAllAreas());
  }, [dispatch]);*/

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" sx={{ m: 3 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
      </Breadcrumbs>
      <Typography variant="h4" sx={{ fontSize: "2rem" }}>
        Favorites
      </Typography>
      {user.fav
        ? user.fav.map((fav) => {
            return (
              <div>
                <Grid
                  item
                  xs={12}
                  md={6}
                  p={2}
                  sx={{ display: "flex", m: 1.5, width: 1000 }}
                  variant="outlined"
                  style={{ margin: "auto" }}
                >
                  <CardActionArea component="a">
                    <Card sx={{ display: "flex" }}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: 200,
                          height: 250,
                          display: { sm: "block" },
                          m: 3,
                        }}
                        image={fav.imageUrl}
                        alt="img"
                      />
                      <CardContent
                        sx={{ justifyContent: "flex-end", textAlign: "left" }}
                      >
                        <Typography
                          component="h2"
                          variant="h5"
                          sx={{ mb: 1, fontWeight: "bold", color: "orange" }}
                        >
                          {fav.name}
                        </Typography>
                        <Typography
                          component="h4"
                          variant="h6"
                          sx={{ mb: 1, fontWeight: "medium" }}
                          color="inherit"
                        >
                          {fav.age}, {fav.gender}
                        </Typography>
                        <h6 style={{ opacity: 0.7 }}>
                          <strong>Location:</strong> {fav.location}
                        </h6>
                        <p>
                          <strong style={{ opacity: 0.7 }}>Language: </strong>
                          {fav.language}
                        </p>
                        <p style={{ color: "orange" }}>
                          <strong>About me: </strong>
                        </p>
                        <p>{fav.about}</p>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
              </div>
            );
          })
        : "You have not any favorites yet"}
    </div>
  );
}
