import React from "react";
import { Grid, Button, Input, Autocomplete, Typography } from "@mui/material";
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
    <Grid container style={{ marginTop: "4%" }}>
      {/* Model Selection */}
      <Grid item style={{ textAlignLast: "left" }}>
        <Grid container style={{ display: "" }}>
          <Grid md={4} style={{ padding: "0% 1%" }}>
            <InputBox label="Full Name">
              <TextField
                placeholder="John Doe"
                type="text"
                size="small"
                name="brand"
                //   value={brand}
                //   onChange={handleChange}
              />
            </InputBox>
          </Grid>
          <Grid md={4} style={{ padding: "0% 3%" }}>
            <InputBox label="Email ID">
              <TextField
                placeholder="john@domain.com"
                type="text"
                size="small"
                name="brand"
              />
            </InputBox>
          </Grid>
          <Grid md={4} style={{ padding: "0% 1%" }}>
            <InputBox label="Mobile">
              <TextField
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
      </Grid>

      {/* Year Selection */}

      <Grid item container style={{ display: "" }}>
        <Grid md={4} style={{ padding: "0% 1%" }}>
          <InputBox label="Age">
            <TextField
              placeholder="Age "
              type="text"
              size="small"
              name="brand"
            />
          </InputBox>
        </Grid>
        <Grid md={4} style={{ padding: "3% 3%" }}>
          {/* <InputBox label="Marital Status"> */}

          <label for="html">Full Name </label>

          <Autocomplete
            options={["Married", "Single", "Diverced"]}
            // autoSelect={true}
            // onChange={(e, value) => setMaritalStatus(value)}
            renderOption={(props, option) => (
              <Typography {...props} variant="body2" color="text.secondary">
                {option}
              </Typography>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                placeholder="Select Gender"
                inputProps={{
                  ...params.inputProps,
                  style: { padding: "0.2rem 1rem" },
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
          {/* </InputBox> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Insurance;
