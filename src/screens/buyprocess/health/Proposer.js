import React from "react";

import { Box, Typography, Grid, Button, Alert } from "@mui/material";

import InputBox from "../../../components/customStyledComponents/InputBox";
import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete,
} from "../../../components/customStyledComponents/inputs";
import { useDispatch, useSelector } from "react-redux";
import {
  HEALTH_BUY_STEP_CHANGE,
  HEALTH_PROPOSER_FIELD_CHANGE,
} from "../../../constants/health.constant";
import {
  useEmailValidation,
  useNameValidation,
  usePhoneValidation,
  useInputValidation,
} from "../../../components/customHooks/validationHooks";
import { scrollToTop } from "../../../utils/scrolling";

export default function Proposer(props) {
  const dispatch = useDispatch();

  // states from redux
  const currentStep = useSelector(
    (state) => state.healthBuyStepper.currentStep
  );
  const { fullName, email, mobile, emergencyNo, maritalStatus, gender } =
    useSelector((state) => state.healthProposer);

  // error handling states
  const [error, setError] = React.useState("");
  const [nameError, checkNameError] = useNameValidation(fullName);
  const [emailError, checkEmailError] = useEmailValidation(email);
  const [mobileError, checkMobileError] = usePhoneValidation(mobile);
  const [emergencyNoError, checkEmergencyNoError] =
    usePhoneValidation(emergencyNo);
  const [maritalStatusError, checkMaritalStatusError] =
    useInputValidation(maritalStatus);
  const [genderError, checkGenderError] = useInputValidation(gender);

  // input field change
  const handleChange = (field, value) => {
    dispatch({
      type: HEALTH_PROPOSER_FIELD_CHANGE,
      payload: { field, value },
    });
  };

  const handleChangeWrapper = (e) => {
    handleChange(e.target.name, e.target.value);
  };

  // step change of stepper
  const stepChange = () => {
    if (
      !nameError &&
      !emailError &&
      !mobileError &&
      !emergencyNoError &&
      !maritalStatusError &&
      !genderError
    ) {
      dispatch({
        type: HEALTH_BUY_STEP_CHANGE,
        payload: currentStep + 1,
      });
    }
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      !fullName ||
      !email ||
      !mobile ||
      !emergencyNo ||
      !maritalStatus ||
      !gender
    ) {
      setError("Please fill all of the fields.");
      scrollToTop();
      return;
    }
    stepChange();
    setError("");
  };

  return (
    <div>
      {error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      ) : null}
      <form onSubmit={handleSubmit}>
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
          Get started with the insurance application process by providing the
          necessary proposer details. Enter accurate information including the
          full name, date of birth, gender, contact number, email address, and
          residential address. Ensure the information is correct for a smooth
          application process.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputBox label="Full Name" style={{ margin: 0 }}>
              <Input
                fullWidth
                type="text"
                name="fullName"
                value={fullName}
                onChange={handleChangeWrapper}
                placeholder="Enter Full Name"
                error={nameError}
                helperText={nameError}
                onBlur={checkNameError}
              />
            </InputBox>
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputBox label="Marital Status" style={{ margin: 0 }}>
                <Autocomplete
                  fullWidth
                  options={["Married", "Single", "Divorced"]}
                  onChange={(e, val) => handleChange("maritalStatus", val)}
                  renderOption={(props, option) => (
                    <Typography
                      {...props}
                      variant="body2"
                      color="text.secondary"
                    >
                      {option}
                    </Typography>
                  )}
                  sx={{ mb: 0.75 }}
                  renderInput={(params) => (
                    <Input
                      {...params}
                      error={maritalStatusError}
                      helperText={maritalStatusError}
                      onBlur={checkMaritalStatusError}
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
                  onChange={(e, val) => handleChange("gender", val)}
                  renderOption={(props, option) => (
                    <Typography
                      {...props}
                      variant="body2"
                      color="text.secondary"
                    >
                      {option}
                    </Typography>
                  )}
                  sx={{ mb: 0.75 }}
                  renderInput={(params) => (
                    <Input
                      {...params}
                      placeholder="Select Gender"
                      error={genderError}
                      helperText={genderError}
                      onBlur={checkGenderError}
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
          Provide your contact details to proceed with the insurance
          application. Enter your full name, phone number, email address, and
          residential address. Double-check the information for accuracy to
          ensure smooth communication and seamless processing of your
          application.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputBox label="Email Address" style={{ margin: 0 }}>
              <Input
                fullWidth
                type="email"
                name="email"
                value={email}
                onChange={handleChangeWrapper}
                placeholder="johndoe@domain.com"
                error={emailError}
                helperText={emailError}
                onBlur={checkEmailError}
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
                  value={mobile}
                  onChange={handleChangeWrapper}
                  placeholder="+243XXXXXX"
                  error={mobileError}
                  helperText={mobileError}
                  onBlur={checkMobileError}
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
                  value={emergencyNo}
                  onChange={handleChangeWrapper}
                  placeholder="+243XXXXXX"
                  error={emergencyNoError}
                  helperText={emergencyNoError}
                  onBlur={checkEmergencyNoError}
                />
              </InputBox>
            </Grid>
          </Grid>
        </Grid>
        <StyledButton type="submit">Continue to Member Section</StyledButton>
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
