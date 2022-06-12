import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MultipleSelectCompareYear({ alldatas }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const allYears = [];

  for (let i = 2022; i > 1949; i--) {
    allYears.push(i);
  }

  console.log(allYears);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {allYears.map((i) => (
            <MenuItem value={i}>{i}</MenuItem>
          ))}
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
