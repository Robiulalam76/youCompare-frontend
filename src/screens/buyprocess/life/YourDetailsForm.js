import React from "react";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import InputBox from "../../../components/customStyledComponents/InputBox";

import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete,
} from "../../../components/customStyledComponents/inputs";

const FlexedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(2),
}));

export default function YourDetailsForm(props) {
  return (
    <form>
      <InputBox label="Full Name as per your PAN Card">
        <Input fullWidth />
      </InputBox>

      <InputBox label="Email ID">
        <Input fullWidth />
      </InputBox>

      <InputBox label="Annual Income">
        <Input fullWidth />
      </InputBox>

      <InputBox label="Occupation">
        <Input fullWidth />
      </InputBox>

      <InputBox label="Education">
        <Input fullWidth />
      </InputBox>

      <FlexedBox>
        <InputBox label="State" sx={{ width: "48%" }}>
          <Input fullWidth />
        </InputBox>

        <InputBox label="City" sx={{ width: "48%" }}>
          <Input fullWidth />
        </InputBox>
      </FlexedBox>

      <FlexedBox>
        <InputBox label="Nationality" sx={{ width: "48%" }}>
          <Input fullWidth type="text" />
        </InputBox>
        <InputBox label="PAN Number" sx={{ width: "48%" }}>
          <Input fullWidth type="number" />
          {/* <Autocomplete
            options={['Married', 'Single', 'Diverced']}

            renderOption={(props, option) => (
              <Typography
                {...props}
                variant="body2"
                color="text.secondary">
                {option}
              </Typography>
            )}
            renderInput={(params) => (
              <Input {...params}
                placeholder="Select Gender"
                inputProps={{
                  ...params.inputProps,
                  style: { padding: ".75rem 1rem" },
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }} />
            )} /> */}
        </InputBox>
      </FlexedBox>
    </form>
  );
}
