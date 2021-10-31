import React from "react";
import { Grid, Button, Input, Autocomplete, Typography } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";
import InputBox from "../../customStyledComponents/InputBox";
// import { FIELD_CHANGE } from "../../constants/autoCompare.constant";

function Cover() {
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
      <form style={{ textAlignLast: "left", marginBottom: "6%" }}>
        <br />
        <Grid container style={{ display: "" }}>
          <Grid md={5}>
            <label for="html">Gender</label>
            <br /> <br />
            {["Male", "Female"].map((elem, i) => (
              <Button
                style={{ margin: "0px 5px" }}
                key={i}
                variant="round"
                color={elem === model ? "primary" : "text"}
                name="model"
                value={elem}
                onClick={() =>
                  dispatch({
                    type: FIELD_CHANGE,
                    payload: { field: "model", value: elem },
                  })
                }
              >
                {elem}
              </Button>
            ))}
          </Grid>
          <Grid md={7}>
            <label for="html">How many people are Travelling</label>
            <br /> <br />
            {["One", "Couple", "Family", "Group"].map((elem, i) => (
              <Button
                style={{ margin: "0px 5px" }}
                key={i}
                variant="round"
                color={elem === model ? "primary" : "text"}
                name="model"
                value={elem}
                onClick={() =>
                  dispatch({
                    type: FIELD_CHANGE,
                    payload: { field: "model", value: elem },
                  })
                }
              >
                {elem}
              </Button>
            ))}
          </Grid>
        </Grid>
      </form>
      <form style={{ textAlignLast: "left", marginBottom: "6%" }}>
        <br />
        <Grid container style={{ display: "" }}>
          <Grid md={4} style={{ padding: "0% 3%" }}>
            <label for="html">Full Name </label>
            <br />
            <br />
            <TextField
              placeholder="John Doe"
              type="text"
              size="small"
              name="brand"
              //   value={brand}
              //   onChange={handleChange}
            />
          </Grid>
          <Grid md={4} style={{ padding: "0% 3%" }}>
            <InputBox label="Marital Status" style={{ width: "100%" }}>
              <Autocomplete
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
                    placeholder="Select Gender"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </InputBox>
          </Grid>
          <Grid md={4} style={{ padding: "0% 3%" }}>
            <InputBox label="Marital Status" style={{ width: "100%" }}>
              <Autocomplete
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
                    placeholder="Select Gender"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </InputBox>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Cover;
