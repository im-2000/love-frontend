import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Filters = () => {
  const [filtersVal, setFiltersVal] = useState({
    city: "",
    age: "",
    gender: "",
    hobby: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFiltersVal({ ...filtersVal, [name]: value });
  };

  return (
    <Stack direction="row" spacing={2} mb={5}>
      <FormControl sx={{ width: 200 }} size="small">
        <InputLabel>City</InputLabel>
        <Select
          name="city"
          value={filtersVal.city}
          label="City"
          onChange={handleChange}
        >
          <MenuItem value={1}>Amsterdam</MenuItem>
          <MenuItem value={2}>Rotterdam</MenuItem>
          <MenuItem value={3}>Breda</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200 }} size="small">
        <InputLabel>Age</InputLabel>
        <Select
          name="age"
          value={filtersVal.age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>20-30</MenuItem>
          <MenuItem value={2}>30-40</MenuItem>
          <MenuItem value={3}>40-50</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200 }} size="small">
        <InputLabel>Gender</InputLabel>
        <Select
          name="gender"
          value={filtersVal.gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={1}>Male</MenuItem>
          <MenuItem value={2}>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200 }} size="small">
        <InputLabel>Hobby</InputLabel>
        <Select
          name="hobby"
          value={filtersVal.hobby}
          label="Hobby"
          onChange={handleChange}
        >
          <MenuItem value={1}>Coding</MenuItem>
          <MenuItem value={2}>Dance</MenuItem>
          <MenuItem value={3}>Music</MenuItem>
        </Select>
      </FormControl>
      <Button size="small" variant="contained">
        Apply
      </Button>
      <Button size="small" variant="outlined">
        Clear
      </Button>
    </Stack>
  );
};
export default Filters;
