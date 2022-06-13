import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

const UserCard = () => {
  return (
    <Box mb={5} ml={3} mr={3}>
      <Card sx={{ maxWidth: 250 }}>
        <CardContent sx={{ paddingBottom: 0 }}>
          <Box display="flex" justifyContent="center">
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              sx={{ width: 150, height: 150 }}
            />
          </Box>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Ross Geller
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small" variant="contained">
            Details
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default UserCard;
