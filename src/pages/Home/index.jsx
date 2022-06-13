import Box from "@mui/material/Box";
import Filters from "../../components/Filters";
import UserList from "../../components/UserList";

const HomePage = () => {
  return (
    <Box p={5}>
      <Filters />
      <UserList />
    </Box>
  );
};
export default HomePage;
