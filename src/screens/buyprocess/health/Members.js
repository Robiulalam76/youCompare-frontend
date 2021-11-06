import React from "react";

import { Box, Typography, Grid } from "@mui/material";

// date picker utils from mui
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import InputBox from "../../../components/customStyledComponents/InputBox";
import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete,
} from "../../../components/customStyledComponents/inputs";

export default function Members(props) {
  const [member, setMember] = React.useState({
    fullName: "",
    dob: "",
    occupation: "",
    weight: "",
    height: "",
  });

  const handleChange = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (d) => {
    setMember({
      ...member,
      dob: d,
    });
  };

  const occupations = [
    "Aeronautical Engineer",
    "Project Manager",
    "Petroleum Engineer",
    "Sailor",
    "Pilot",
    "Investment Bankers",
    "Dentist",
    "Software Developer",
    "Accountant",
  ];
  return (
    <div>
      <Typography sx={{ fontSize: ".9rem", lineHeight: "24px" }} gutterBottom>
        Details about the member to be insured
      </Typography>
      <Typography
        sx={{
          fontSize: ".85rem",
          color: "text.secondary",
          lineHeight: "24px",
          fontWeight: "normal",
          mb: "1rem",
        }}
        gutterBottom
      >
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputBox style={{ margin: 0 }} label="Full Name">
            <Input
              fullWidth
              type="text"
              name="fullName"
              value={member.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
            />
          </InputBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputBox label="Occupation" style={{ margin: 0 }}>
            <Autocomplete
              fullWidth
              options={occupations}
              onChange={(e, value) =>
                setMember({ ...member, occupation: value })
              }
              renderOption={(props, option) => (
                <Typography {...props} variant="body2" color="text.secondary">
                  {option}
                </Typography>
              )}
              sx={{ mb: 0.75 }}
              renderInput={(params) => (
                <Input
                  {...params}
                  placeholder="Select Occupation"
                  inputProps={{
                    ...params.inputProps,
                    style: { padding: ".75rem 1rem" },
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </InputBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputBox
            label="Date of Birth"
            style={{ margin: 0, width: "inherit" }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                value={member.dob}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <Input
                    fullWidth
                    {...params}
                    placeholder="Enter date of birth"
                    inputProps={{
                      ...params.inputProps,
                      style: { padding: ".75rem 1rem" },
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </InputBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputBox label="Weight" style={{ margin: 0 }}>
            <Input
              fullWidth
              type="text"
              name="weight"
              value={member.weight}
              onChange={handleChange}
              placeholder="Enter Weight in KG"
            />
          </InputBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputBox label="Height" style={{ margin: 0 }}>
            <Input
              fullWidth
              type="text"
              name="height"
              value={member.height}
              onChange={handleChange}
              placeholder="Enter Height in Inches"
            />
          </InputBox>
        </Grid>
      </Grid>
    </div>
  );
}
