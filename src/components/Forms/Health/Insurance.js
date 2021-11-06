import React from "react";
import { Grid, Button, Typography, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";
import InputBox from "../../customStyledComponents/InputBox";
import {
  CustomAutocomplete as Autocomplete,
  CustomTextField as Input,
} from "../../../components/customStyledComponents/inputs";
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
<<<<<<< HEAD
              <Input
=======
              <TextField
                fullWidth
>>>>>>> 75aa0c326f6c879dcc2cd619a607f786ddbca41d
                placeholder="John Doe"
                type="text"
                name="brand"
                //   value={brand}
                //   onChange={handleChange}
              />
            </InputBox>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            {/* <label for="html">Email ID</label> */}
            <InputBox label="Email ID">
<<<<<<< HEAD
              <Input
=======
              <TextField
                fullWidth
>>>>>>> 75aa0c326f6c879dcc2cd619a607f786ddbca41d
                placeholder="john@domain.com"
                type="text"
                name="brand"
                //   value={brand}
                //   onChange={handleChange}
              />
            </InputBox>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            {/* <label for="html">Mobile</label> */}
            <InputBox label="Mobile">
<<<<<<< HEAD
              <Input
=======
              <TextField
                fullWidth
>>>>>>> 75aa0c326f6c879dcc2cd619a607f786ddbca41d
                type="text"
                name="brand"
                placeholder="94092300293"
                //   value={brand}
                //   onChange={handleChange}
              />
            </InputBox>
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
<<<<<<< HEAD
          <Grid item xs={12} sm={6} md={4}>
=======
          <Grid item md={4} sm={6} xs={12}>
>>>>>>> 75aa0c326f6c879dcc2cd619a607f786ddbca41d
            {/* <label for="html">Age</label> */}
            <InputBox label="Age">
              <Input
                fullWidth
                type="text"
                name="brand"
                placeholder="Age"
                //   value={brand}
                //   onChange={handleChange}
              />
            </InputBox>
          </Grid>
<<<<<<< HEAD
          <Grid item xs={12} sm={6} md={4}>
=======
          <Grid item md={4} sm={6} xs={12}>
>>>>>>> 75aa0c326f6c879dcc2cd619a607f786ddbca41d
            {/* <label for="html">Gender</label> */}
            <InputBox label="Gender">
              {/* <div> */}
              <Autocomplete
                fullWidth
                options={["Male", "Female", "Others"]}
                // onChange={(e, value) => setMaritalStatus(value)}
                renderOption={(props, option) => (
                  <Typography {...props} variant="body2" color="text.secondary">
                    {option}
                  </Typography>
                )}
                // sx={{ mb: 0.75 }}
                renderInput={(params) => (
                  <Input
                    {...params}
<<<<<<< HEAD
=======
                    size="small"
                    fullWidth
>>>>>>> 75aa0c326f6c879dcc2cd619a607f786ddbca41d
                    placeholder="Select Gender"
                    inputProps={{
                      ...params.inputProps,
                      style: { padding: ".75rem 1rem" },
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
