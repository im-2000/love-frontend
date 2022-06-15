import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import background from "../../image/86890.jpeg";

const UserCard = (props) => {
  const { name, imageUrl, id } = props.person;
  return (
    <Box mb={5} ml={3} mr={3}>
      <Card sx={{ maxWidth: 250 }}>
        <CardContent
          sx={{
            paddingBottom: 0,
            backgroundColor: "black",
          }}
        >
          <Box display="flex" justifyContent="center">
            <Avatar
              alt={name}
              src={imageUrl}
              sx={{ width: 150, height: 150 }}
            />
          </Box>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {name}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Link style={{ textDecoration: "none" }} to={`/profiles/${id}`}>
            <Button
              size="small"
              variant="contained"
              style={{ backgroundColor: "BLACK" }}
            >
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};
export default UserCard;
