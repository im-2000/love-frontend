import Box from "@mui/material/Box";
import Filters from "../../components/Filters/index";
import UserList from "../../components/UserList/index";

const HomePage = () => {
  return (
    <Box p={5}>
      <Filters />
      <UserList />
    </Box>
  );
};
export default HomePage;
