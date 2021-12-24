import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Grid } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

import {
  CustomTextField as Input,
} from "../../customStyledComponents/inputs";
import InputBox from "../../customStyledComponents/InputBox";
import { MobileDatePicker } from "@mui/lab";
import { InputAdornment, } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { TRAVEL_FIELD_CHANGE } from "../../../constants/travel.constant";

export default function TripDatePicker() {
  const dispatch = useDispatch();
  const travelQuery = useSelector((state) => state.travelQuery);
  const { tripStartDate, tripEndDate } = travelQuery;

  const handleChange = (field, value) => {

    dispatch({
      type: TRAVEL_FIELD_CHANGE,
      payload: { field, value },
    });
  };

  return (
    <>
      <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            disablePast
            clearable
            inputFormat="MM/dd/yyyy"
            value={tripStartDate}
            onChange={(newVal) => handleChange("tripStartDate", newVal)}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <InputBox label="Journey Start">
                <Input
                  fullWidth
                  ref={inputRef}
                  {...inputProps}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EventIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {InputProps?.endAdornment}
              </InputBox>
            )}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            disablePast
            minDate={tripStartDate}
            inputFormat="MM/dd/yyyy"
            value={tripEndDate}
            onChange={(newVal) => handleChange("tripEndDate", newVal)}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <InputBox label="Journey End">
                <Input
                  fullWidth
                  ref={inputRef}
                  {...inputProps}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EventIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {InputProps?.endAdornment}
              </InputBox>
            )}
          />
        </LocalizationProvider>
      </Grid>
    </>
  );
}
