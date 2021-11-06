import React from "react";
import {
  Grid,
  Button,
  Input,
  Autocomplete,
  Typography,
  Stack,
} from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";
import InputBox from "../../customStyledComponents/InputBox";
// import { FIELD_CHANGE } from "../../constants/autoCompare.constant";

function Insurance() {
  const dispatch = useDispatch();
  const autoQuery = useSelector((state) => state.autoQuery);
  const { brand, model, year } = autoQuery;

  // Default model & year selection during initial rendering
  // Value should come from local storage(if exist)
  React.useEffect(() => {
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "model", value: "190" },
    });
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "year", value: "2021" },
    });
  }, []);

  // form field change (controlled input)
  const handleChange = (e) => {
    dispatch({
      type: FIELD_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div style={{ marginTop: "4%" }}>
      {/* Model Selection */}
      <Grid container spacing={2}>
        <Grid item container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            {/* <label for="html">Full Name </label> */}
            <InputBox label="Full Name ">
              <TextField
                fullWidth
                placeholder="John Doe"
                type="text"
                size="small"
                name="brand"
                //   value={brand}
                //   onChange={handleChange}
              />
            </InputBox>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            {/* <label for="html">Email ID</label> */}
            <InputBox label="Email ID">
              <TextField
                fullWidth
                placeholder="john@domain.com"
                type="text"
                size="small"
                name="brand"
                //   value={brand}
                //   onChange={handleChange}
              />
            </InputBox>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            {/* <label for="html">Mobile</label> */}
            <InputBox label="Mobile">
              <TextField
                fullWidth
                type="text"
                size="small"
                name="brand"
                placeholder="94092300293"
                //   value={brand}
                //   onChange={handleChange}
              />
            </InputBox>
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            {/* <label for="html">Age</label> */}
            <InputBox label="Age">
              <TextField
                fullWidth
                type="text"
                size="small"
                name="brand"
                placeholder="Age"
                //   value={brand}
                //   onChange={handleChange}
              />
            </InputBox>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            {/* <label for="html">Gender</label> */}
            <InputBox label="Gender">
              {/* <div> */}
              <Autocomplete
                fullWidth
                options={["Married", "Single", "Diverced"]}
                // onChange={(e, value) => setMaritalStatus(value)}
                renderOption={(props, option) => (
                  <Typography {...props} variant="body2" color="text.secondary">
                    {option}
                  </Typography>
                )}
                // sx={{ mb: 0.75 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    fullWidth
                    placeholder="Select Gender"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
              {/* </div> */}
            </InputBox>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Insurance;
