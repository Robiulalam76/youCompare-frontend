import React from "react";
import { Grid, Button, Input, Autocomplete, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";
import { CustomTextField as TextField } from "../../../components/customStyledComponents/inputs";

function Insurance() {
  const dispatch = useDispatch();
  const autoQuery = useSelector((state) => state.autoQuery);
  const { model } = autoQuery;

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
      <form style={{ textAlignLast: "left", marginBottom: "2%" }}>
        <Grid container spacing={2}>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}

            // style={{ padding: "0% 3%" }}
          >
            <label className="label" for="html">
              Destination
            </label>
            <div>
              {["Local", "International"].map((elem, i) => (
                <Button
                  sx={{ mr: 1, fontSize: ".8rem", py: 0.5, my: 0.5 }}
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
            </div>
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            // style={{ padding: "0% 3%" }}
          >
            <label for="html">Mode of Transport</label>
            <div style={{ textAlign: "left" }}>
              {["Car", "Airplane", "Train", "Bus"].map((elem, i) => (
                <Button
                  sx={{ mr: 1, fontSize: ".8rem", py: 0.5, my: 0.5 }}
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
            </div>
          </Grid>
        </Grid>
      </form>
      {/* Year Selection */}
      <Grid container spacing={3}>
        <Grid item container>
          <Grid lg={6} md={6} sm={6} xs={12}>
            <div style={{ margin: "2%" }}>
              <label className="label" for="html">
                Location
              </label>
              <Autocomplete
                options={["Dhaka", "Mirpur", "Savar", "Gazipur", , "Banani"]}
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
                    placeholder="Select Location"
                    inputProps={{
                      ...params.inputProps,
                      style: { padding: "0.2rem 1rem" },
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </div>
          </Grid>
          <Grid lg={6} md={6} sm={6} xs={12}>
            <div style={{ margin: "2%" }}>
              <label className="label" for="html">
                Trip Date
              </label>
              <div>
                <TextField
                  fullWidth
                  placeholder="Trip Date"
                  type="text"
                  size="small"
                  name="brand"
                  //   value={brand}
                  //   onChange={handleChange}
                />
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid md={4} sm={4} xs={12}>
            <div style={{ margin: "3%" }}>
              <label className="label" for="html">
                Full Name
              </label>
              <div>
                <TextField
                  fullWidth
                  placeholder="John Doe"
                  type="text"
                  size="small"
                  name="brand"
                  //   value={brand}
                  //   onChange={handleChange}
                />
              </div>
            </div>
          </Grid>
          <Grid md={4} sm={4} xs={12}>
            <div style={{ margin: "3%" }}>
              <label className="label" for="html">
                Email ID
              </label>
              <div>
                <TextField
                  fullWidth
                  placeholder="john@domain.com"
                  type="text"
                  size="small"
                  name="brand"
                  //   value={brand}
                  //   onChange={handleChange}
                />
              </div>
            </div>
          </Grid>
          <Grid md={4} sm={4} xs={12}>
            <div style={{ margin: "3%" }}>
              <label className="label" for="html">
                Mobile
              </label>
              <div>
                <TextField
                  fullWidth
                  placeholder="94092300293"
                  type="text"
                  size="small"
                  name="brand"
                  //   value={brand}
                  //   onChange={handleChange}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Insurance;
