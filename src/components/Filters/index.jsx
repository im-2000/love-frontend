import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Filters = (props) => {
  const { applyFilters, clearFilters } = props;
  const [filtersVal, setFiltersVal] = useState({
    city: "",
    age: "",
    gender: "",
    language: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFiltersVal({ ...filtersVal, [name]: value });
  };

  return (
    <Stack direction="row" spacing={2} mb={5}>
      <FormControl sx={{ width: 200, backgroundColor: "WHITE" }} size="small">
        <InputLabel>City</InputLabel>
        <Select
          name="city"
          value={filtersVal.city}
          label="City"
          onChange={handleChange}
        >
          <MenuItem value="Amsterdam">Amsterdam</MenuItem>
          <MenuItem value="Rotterdam">Rotterdam</MenuItem>
          <MenuItem value="Utrecht">Utrecht</MenuItem>
          <MenuItem value="Haarlem">Haarlem</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200, backgroundColor: "WHITE" }} size="small">
        <InputLabel>Age</InputLabel>
        <Select
          name="age"
          value={filtersVal.age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="20-30">20-30</MenuItem>
          <MenuItem value="30-40">30-40</MenuItem>
          <MenuItem value="40-50">40-50</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200, backgroundColor: "WHITE" }} size="small">
        <InputLabel>Gender</InputLabel>
        <Select
          name="gender"
          value={filtersVal.gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200, backgroundColor: "WHITE" }} size="small">
        <InputLabel>Language</InputLabel>
        <Select
          name="language"
          value={filtersVal.language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="JavaScript">JavaScript</MenuItem>
          <MenuItem value="Python">Python</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={() => {
          applyFilters(filtersVal);
        }}
        size="small"
        variant="contained"
        style={{ backgroundColor: "black" }}
      >
        Apply
      </Button>
      <Button
        onClick={() => {
          clearFilters(setFiltersVal);
        }}
        size="small"
        variant="contained"
        style={{ backgroundColor: "black" }}
      >
        Clear
      </Button>
    </Stack>
  );
};
export default Filters;
