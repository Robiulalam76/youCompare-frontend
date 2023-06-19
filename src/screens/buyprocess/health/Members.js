import React from "react";

import { Box, Typography, Grid, Button } from "@mui/material";

// date picker utils from mui
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import InputBox from "../../../components/customStyledComponents/InputBox";
import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete,
} from "../../../components/customStyledComponents/inputs";
import { useDispatch, useSelector } from "react-redux";
import {
  HEALTH_BUY_STEP_CHANGE,
  HEALTH_MEMBERS_FIELD_CHANGE,
} from "../../../constants/health.constant";
import {
  useDateOfBirthValidation,
  useInputValidation,
  useNameValidation,
} from "../../../components/customHooks/validationHooks";
import { scrollToTop } from "../../../utils/scrolling";

export default function Members(props) {
  const currentStep = useSelector(
    (state) => state.healthBuyStepper.currentStep
  );
  const { fullName, dob, occupation, weight, height } = useSelector(
    (state) => state.healthMember
  );

  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch({
      type: HEALTH_MEMBERS_FIELD_CHANGE,
      payload: { field, value },
    });
  };

  const handleChangeWrapper = (e) => {
    handleChange(e.target.name, e.target.value);
  };

  const [error, setError] = React.useState("");
  const [nameError, checkNameError] = useNameValidation(fullName);
  const [dobError, checkDobError] = useDateOfBirthValidation(dob);
  const [occupationError, checkOccupationError] =
    useInputValidation(occupation);
  const [weightError, checkWeightError] = useInputValidation(weight);
  const [heightError, checkHeightError] = useInputValidation(height);

  const nextStep = () => {
    if (
      !nameError ||
      !dobError ||
      !occupationError ||
      !weightError ||
      !heightError
    ) {
      dispatch({
        type: HEALTH_BUY_STEP_CHANGE,
        payload: currentStep + 1,
      });
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!fullName || !dob || !occupation || !weight || !height) {
      setError("Please enter all of the inputs.");
      scrollToTop();
      return;
    }
    nextStep();
    setError("");
  };

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
        Find comprehensive details about the member to be insured. Provide
        accurate information regarding the member's full name, date of birth,
        gender, contact number, email address, and residential address. Ensure
        the accuracy of the details for a smooth insurance application process.
        Contact us for any further assistance or inquiries.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputBox style={{ margin: 0 }} label="Full Name">
              <Input
                fullWidth
                type="text"
                name="fullName"
                value={fullName}
                onChange={handleChangeWrapper}
                placeholder="Enter Full Name"
                error={nameError}
                onBlur={checkNameError}
                helperText={nameError}
              />
            </InputBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputBox label="Occupation" style={{ margin: 0 }}>
              <Autocomplete
                fullWidth
                options={occupations}
                onChange={(e, value) => handleChange("occupation", value)}
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
                    error={occupationError}
                    onBlur={checkOccupationError}
                    helperText={occupationError}
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
                  inputFormat="dd/MM/yyyy"
                  value={dob}
                  onChange={(date) => handleChange("dob", date)}
                  renderInput={(params) => (
                    <Input
                      fullWidth
                      {...params}
                      placeholder="Enter date of birth"
                      error={dobError}
                      onBlur={checkDobError}
                      helperText={dobError}
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
                value={weight}
                onChange={handleChangeWrapper}
                placeholder="Enter Weight in KG"
                error={weightError}
                onBlur={checkWeightError}
                helperText={weightError}
              />
            </InputBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputBox label="Height" style={{ margin: 0 }}>
              <Input
                fullWidth
                type="text"
                name="height"
                value={height}
                onChange={handleChangeWrapper}
                placeholder="Enter Height in Inches"
                error={heightError}
                onBlur={checkHeightError}
                helperText={heightError}
              />
            </InputBox>
          </Grid>
        </Grid>

        <StyledButton type="submit">Next</StyledButton>
      </form>
    </div>
  );
}

const StyledButton = (props) => (
  <Button
    {...props}
    variant="contained"
    sx={{ ...props.sx, mt: 2, textTransform: "none" }}
  />
);
