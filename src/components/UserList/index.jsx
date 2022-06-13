import { Box, Grid, Pagination } from "@mui/material";
import { useState } from "react";
import UserCard from "./UserCard";

const UserList = ({ people }) => {
  // const [page, setPage] = useState(1);

  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  return (
    <>
      <Box display="flex" flexWrap="wrap">
        <Grid container spacing={{ xs: 2 }}>
          {people &&
            people.map((person) => (
              <Grid item xs={3} key={person.id}>
                <UserCard person={person} />
              </Grid>
            ))}
        </Grid>
      </Box>
      {/* <Box display="flex" justifyContent="flex-end">
        <Pagination count={10} page={page} onChange={handleChange} />
      </Box> */}
    </>
  );
};
export default UserList;
