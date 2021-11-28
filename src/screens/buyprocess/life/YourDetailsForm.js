import React from "react";

import { Box, Typography, Button, Alert } from "@mui/material";
import { styled } from "@mui/system";
import InputBox from "../../../components/customStyledComponents/InputBox";

import { Link } from "react-router-dom";

import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete,
} from "../../../components/customStyledComponents/inputs";
import {
  useEmailValidation,
  useInputValidation,
  useNameValidation,
} from "../../../components/customHooks/validationHooks";
import { scrollToTop } from "../../../utils/scrolling";

const FlexedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginTop: theme.spacing(2),
}));

export default function YourDetailsForm(props) {
  const [yourDetails, setYourDetails] = React.useState({
    fullName: "",
    email: "",
    income: "",
    occupation: "",
    education: "",
    state: "",
    city: "",
    nationality: "",
    pan: "",
  });

  const [error, setError] = React.useState("");
  const [nameError, checkNameError] = useNameValidation(yourDetails.fullName);
  const [emailError, checkEmailError] = useEmailValidation(yourDetails.email);
  const [incomeError, checkIncomeError] = useInputValidation(
    yourDetails.income
  );
  const [occupationError, checkOccupationError] = useInputValidation(
    yourDetails.occupation
  );
  const [educationError, checkEducationError] = useInputValidation(
    yourDetails.education
  );
  const [stateError, checkStateError] = useInputValidation(yourDetails.state);
  const [cityError, checkCityError] = useInputValidation(yourDetails.city);
  const [nationalityError, checkNationalityError] = useInputValidation(
    yourDetails.nationality
  );
  const [panError, checkPanError] = useInputValidation(yourDetails.pan);

  const handleChange = (e) => {
    setYourDetails({
      ...yourDetails,
      [e.target.name]: e.target.value,
    });
  };

  const stepChange = () => {
    if (
      !nameError ||
      !emailError ||
      !incomeError ||
      !occupationError ||
      !educationError ||
      !stateError ||
      !cityError ||
      !nationalityError ||
      !panError
    ) {
      console.log("Redirect to Payment Gateway");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      !yourDetails.fullName ||
      !yourDetails.email ||
      !yourDetails.income ||
      !yourDetails.occupation ||
      !yourDetails.education ||
      !yourDetails.state ||
      !yourDetails.city ||
      !yourDetails.nationality ||
      !yourDetails.pan
    ) {
      setError("Please fill all of the fields.");
      scrollToTop();
      return;
    }
    stepChange();
    setError("");
    // redirect to payment gateway
  };

  return (
    <>
      {error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      ) : null}
      <form onSubmit={handleSubmit}>
        <InputBox label="Full Name as per your PAN Card">
          <Input
            fullWidth
            value={yourDetails.fullName}
            name="fullName"
            onChange={handleChange}
            placeholder="Enter Full Name"
            error={nameError}
            helperText={nameError}
            onBlur={checkNameError}
          />
        </InputBox>

        <InputBox label="Email ID">
          <Input
            fullWidth
            value={yourDetails.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter your email ID"
            error={emailError}
            helperText={emailError}
            onBlur={checkEmailError}
          />
        </InputBox>

        <InputBox label="Annual Income">
          <Input
            fullWidth
            value={yourDetails.income}
            name="income"
            onChange={handleChange}
            placeholder="Enter your annual income"
            error={incomeError}
            helperText={incomeError}
            onBlur={checkIncomeError}
          />
        </InputBox>

        <InputBox label="Occupation">
          <Input
            fullWidth
            value={yourDetails.occupation}
            name="occupation"
            onChange={handleChange}
            placeholder="Enter your occupation"
            error={occupationError}
            helperText={occupationError}
            onBlur={checkOccupationError}
          />
        </InputBox>

        <InputBox label="Education">
          <Input
            fullWidth
            value={yourDetails.education}
            name="education"
            onChange={handleChange}
            placeholder=""
            error={educationError}
            helperText={educationError}
            onBlur={checkEducationError}
          />
        </InputBox>

        <FlexedBox>
          <InputBox label="State" sx={{ width: "48%" }}>
            <Input
              fullWidth
              value={yourDetails.state}
              name="state"
              onChange={handleChange}
              placeholder="Enter Your State Name"
              error={stateError}
              helperText={stateError}
              onBlur={checkStateError}
            />
          </InputBox>

          <InputBox label="City" sx={{ width: "48%" }}>
            <Input
              fullWidth
              value={yourDetails.city}
              name="city"
              onChange={handleChange}
              placeholder="Enter Your City Name"
              error={cityError}
              helperText={cityError}
              onBlur={checkCityError}
            />
          </InputBox>
        </FlexedBox>

        <FlexedBox>
          <InputBox label="Nationality" sx={{ width: "48%" }}>
            <Input
              fullWidth
              type="text"
              value={yourDetails.nationality}
              name="nationality"
              onChange={handleChange}
              placeholder="Enter your nationality"
              error={nationalityError}
              helperText={nationalityError}
              onBlur={checkNationalityError}
            />
          </InputBox>
          <InputBox label="PAN Number" sx={{ width: "48%" }}>
            <Input
              fullWidth
              type="number"
              value={yourDetails.pan}
              name="pan"
              onChange={handleChange}
              error={panError}
              helperText={panError}
              onBlur={checkPanError}
            />
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

        <Button
          variant="contained"
          sx={{ textTransform: "none", mt: 3 }}
          type="submit"
        >
          Proceed
        </Button>
      </form>
    </>
  );
}
