import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { newActivityCreated } from "../store/user/actions";
// import Modal from "@mui/material/Modal";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";

const Form = (props) => {
  const genders = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];
  //   const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [languages, setLanguages] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState(0);

  //   console.log(moment().format("YYYY-MM-DD"));
  //

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();
    // const newProfile = {
    //   nickname,
    //   gender,
    //   description,
    //   languages,
    //   location,
    //   image,
    //   age,
    // };

    // dispatch(newActivityCreated(newProfile));
    setName("");
    setAbout("");
    setLocation("");
    setGender("");
    setImage("");
    setLanguages("");
    setAge(0);
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "tnvu24xd");

    //post request to Cloudinary, remember to change to your own link
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dgaoprtww/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log("file", file); //check if you are getting the url back
    setImage(file.url); //put the url in local state, next step you can send it to the backend
  };

  return (
    <Grid sx={{ width: "100%", padding: "70px 15px" }}>
      {/* addform */}

      <form onSubmit={submit} noValidate autoComplete="off">
        <Grid container spacing={6} sx={{}}>
          <Grid item xs={3}>
            <div>
              <img
                alt="img"
                src={
                  image
                    ? image
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                }
                style={{ maxWidth: 315 }}
              />
              {image ? (
                <div style={{ fontSize: 20 }}>Succesfully uploaded!</div>
              ) : (
                ""
              )}
            </div>
            <TextField
              required
              label="Image"
              type="file"
              variant="outlined"
              fullWidth
              margin="dense"
              onChange={uploadImage}
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField
              required
              label="Name"
              type="text"
              variant="outlined"
              fullWidth
              margin="dense"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></TextField>

            <TextField
              required
              label="Location"
              variant="outlined"
              fullWidth
              margin="dense"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></TextField>
            <TextField
              required
              label="Gender"
              variant="outlined"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              select
              fullWidth
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              label="Age"
              variant="outlined"
              fullWidth
              margin="dense"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></TextField>

            <TextField
              required
              label="Language"
              variant="outlined"
              fullWidth
              margin="dense"
              type="text"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="About"
              multiline
              rows={17}
              variant="outlined"
              fullWidth
              margin="dense"
              type="text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Add Profile!
        </Button>
      </form>
    </Grid>
  );
};
export default Form;
