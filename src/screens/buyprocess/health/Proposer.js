import React from "react";

import { Box, Typography, Grid } from "@mui/material";

import InputBox from "../../../components/customStyledComponents/InputBox";
import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete,
} from "../../../components/customStyledComponents/inputs";

export default function Proposer(props) {
  const [proposer, setProposer] = React.useState({
    fullName: "",
    email: "",
    mobile: "",
    emergencyNo: "",
    maritalStatus: "",
    gender: "",
  });

  const handleChange = (e) => {
    setProposer({
      ...proposer,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Typography sx={{ fontSize: ".9rem", lineHeight: "24px" }} gutterBottom>
        Let's get start with proposer details
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
          <InputBox label="Full Name" style={{ margin: 0 }}>
            <Input
              fullWidth
              type="text"
              name="fullName"
              value={proposer.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
            />
          </InputBox>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputBox label="Marital Status" style={{ margin: 0 }}>
              <Autocomplete
                fullWidth
                options={["Married", "Single", "Divorced"]}
                onChange={(e, value) =>
                  setProposer({ ...proposer, maritalStatus: value })
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
                    placeholder="Select Marital Status"
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
            <InputBox label="Gender" style={{ margin: 0 }}>
              <Autocomplete
                fullWidth
                options={["Male", "Female", "Others"]}
                onChange={(e, value) =>
                  setProposer({ ...proposer, gender: value })
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
                    placeholder="Select Gender"
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
        </Grid>
      </Grid>

      <Typography
        sx={{ fontSize: ".9rem", lineHeight: "24px", mt: "1rem" }}
        gutterBottom
      >
        Contact Details
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
          <InputBox label="Email Address" style={{ margin: 0 }}>
            <Input
              fullWidth
              type="email"
              name="email"
              value={proposer.email}
              onChange={handleChange}
              placeholder="johndoe@domain.com"
            />
          </InputBox>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputBox label="Mobile Number" style={{ margin: 0 }}>
              <Input
                fullWidth
                type="tel"
                name="mobile"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={proposer.mobile}
                onChange={handleChange}
                placeholder="+243XXXXXX"
              />
            </InputBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputBox label="Emergency Mobile No" style={{ margin: 0 }}>
              <Input
                fullWidth
                type="tel"
                name="emergencyNo"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={proposer.emergencyNo}
                onChange={handleChange}
                placeholder="+243XXXXXX"
              />
            </InputBox>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
