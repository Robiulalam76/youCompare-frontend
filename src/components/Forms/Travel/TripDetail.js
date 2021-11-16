import React from "react";
import PropTypes from "prop-types";

import { Grid, Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete,
  inputPropStyle,
} from "../../customStyledComponents/inputs";
import InputBox from "../../customStyledComponents/InputBox";

import TripDatePicker from "./TripDatePicker";

import { useSelector, useDispatch } from "react-redux";
import { TRAVEL_FIELD_CHANGE } from "../../../constants/travel.constant";
import { CustomTextField as TextField } from "../../customStyledComponents/inputs";

import { states } from "../../../Data/state.js";
import { countries } from "../../../Data/countries.js";

export default function TripDetail({ multi }) {
  const dispatch = useDispatch();
  const travelQuery = useSelector((state) => state.travelQuery);
  const [locations, setLocations] = React.useState(states);
  const { location, destination, transport, fullName, email, phone } =
    travelQuery;

  console.log(locations);
  // form field change (controlled input)

  const handleChange = (e) => {
    dispatch({
      type: TRAVEL_FIELD_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleLocationChange = (e, value) => {
    if (!value) return;
    dispatch({
      type: TRAVEL_FIELD_CHANGE,
      payload: { field: "location", value: value.name },
    });
  };

  React.useEffect(() => {
    if (destination === "Local") {
      setLocations(states);
    } else {
      setLocations(countries);
    }
  }, [destination]);

  return (
    <div style={{ marginTop: "4%" }}>
      <Grid container spacing={2} sx={{ mb: "2%" }}>
        <Grid item sm={6} xs={12}>
          <InputBox label="Destination">
            <div>
              {["Local", "International"].map((elem, i) => (
                <Button
                  sx={{ mr: 1, fontSize: ".8rem", py: 0.5, my: 0.5 }}
                  key={i}
                  variant="round"
                  color={elem === destination ? "primary" : "text"}
                  name="destination"
                  value={elem}
                  onClick={handleChange}
                >
                  {elem}
                </Button>
              ))}
            </div>
          </InputBox>
        </Grid>
        <Grid item md={6} xs={12}>
          <InputBox label="Mode of Transport">
            <div style={{ textAlign: "left" }}>
              {["Car", "Airplane", "Train", "Bus"].map((elem, i) => (
                <Button
                  sx={{ mr: 1, fontSize: ".8rem", py: 0.5, my: 0.5 }}
                  key={i}
                  variant="round"
                  color={elem === transport ? "primary" : "text"}
                  name="transport"
                  value={elem}
                  onClick={handleChange}
                >
                  {elem}
                </Button>
              ))}
            </div>
          </InputBox>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: "2%" }}>
        <Grid item lg={multi ? 8 : 4} md={6} sm={6} xs={12}>
          <InputBox label="Location">
            <Autocomplete
              options={locations}
              fullWidth
              multiple={multi}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Typography {...props} variant="body2" color="text.secondary">
                  {option.name}
                </Typography>
              )}
              onChange={handleLocationChange}
              renderInput={(params) => (
                <Input
                  {...params}
                  placeholder="Select Location"
                  inputProps={{
                    ...params.inputProps,
                    style: { ...inputPropStyle },
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </InputBox>
        </Grid>

        <Grid item container xs={12} lg={8} spacing={2}>
          <TripDatePicker />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: "2%" }}>
        <Grid item xs={12} sm={6} lg={4}>
          <InputBox label="Full Name">
            <Input
              fullWidth
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
            />
          </InputBox>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <InputBox label="Email">
            <Input
              fullWidth
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter Email Address"
            />
          </InputBox>
        </Grid>
        <Grid item sm={6} xs={12} lg={4}>
          <InputBox label="Mobile">
            <Input
              fullWidth
              type="number"
              name="phone"
              value={phone}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
            />
          </InputBox>
        </Grid>
      </Grid>
    </div>
  );
}

TripDetail.propsTypes = {
  multi: PropTypes.bool.isRequired,
};
