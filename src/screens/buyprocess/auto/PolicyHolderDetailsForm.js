import React from "react";

// mui components
import { Box, InputAdornment, Typography, Button, Alert } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Popover from "@mui/material/Popover";

// date picker utils from mui
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

// customized components
import { textfieldStyle } from "./utils";
import InputBox from "../../../components/customStyledComponents/InputBox";
// import { useForm } from "../../../components/customHooks/useForm";
// import Calender from "../../../components/Calender";
import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete,
} from "../../../components/customStyledComponents/inputs";

import { State, City } from "country-state-city";
import {
  useEmailValidation,
  useInputValidation,
  useNameValidation,
  usePhoneValidation,
  useDateOfBirthValidation,
} from "../../../components/customHooks/validationHooks";
import { useSelector, useDispatch } from "react-redux";
import {
  AUTO_BUY_STEP_CHANGE,
  AUTO_POLICY_HOLDER_FIELD_CHANGE,
} from "../../../constants/autoCompare.constant";

import { scrollToTop } from "../../../utils/scrolling";

export default function PolicyHolderDetailsForm() {
  const {
    fullName,
    email,
    phone,
    dob,
    maritalStatus,
    address,
    state,
    city,
    pincode,
  } = useSelector((state) => state.autoPolicyHolder);
  const [error, setError] = React.useState("");

  const currentStep = useSelector((state) => state.autoBuyStepper.currentStep);

  // Error Handling
  const [nameError, checkNameError] = useNameValidation(fullName);
  const [emailError, checkEmailError] = useEmailValidation(email);
  const [phoneError, checkPhoneError] = usePhoneValidation(phone);
  const [dobError, checkDobError] = useDateOfBirthValidation(dob);
  const [maritalStatusError, checkMaritalStatusError] =
    useInputValidation(maritalStatus);
  const [addressError, checkAddressError] = useInputValidation(address);
  const [stateError, checkStateError] = useInputValidation(state);
  const [cityError, checkCityError] = useInputValidation(city);
  const [pinError, checkPincodeError] = useInputValidation(pincode);

  const disableNextButton =
    !fullName ||
    !email ||
    !phone ||
    !dob ||
    !maritalStatus ||
    !address ||
    !state ||
    !city ||
    !pincode;

  const stepChange = () => {
    if (
      !nameError &&
      !emailError &&
      !phoneError &&
      !dobError &&
      !maritalStatusError &&
      !addressError &&
      !stateError &&
      !cityError &&
      !pinError
    ) {
      dispatch({
        type: AUTO_BUY_STEP_CHANGE,
        payload: currentStep + 1,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (disableNextButton) {
      setError("Please provide all required information.");
      scrollToTop();
      return;
    }
    stepChange();

    setError("");
  };

  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch({
      type: AUTO_POLICY_HOLDER_FIELD_CHANGE,
      payload: { field, value },
    });
  };

  const handleChangeWrapper = (e) => {
    handleChange(e.target.name, e.target.value);
  };

  const handleStateSelection = (value) => {
    let isoCode = value ? value.isoCode : "";
    let stateName = value ? value.name : "";
    setStateIsoCode(isoCode);
    handleChange("state", stateName);
  };

  // states are 36 states of Nigeria
  const [states, setStates] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  const [stateIsoCode, setStateIsoCode] = React.useState("");
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    const _states = State.getStatesOfCountry("NG").map((state) => {
      if (state.name.slice(-5) === "State")
        state.name = state.name.slice(0, -6);
      return { name: state.name, isoCode: state.isoCode };
    });
    setStates(_states);
  }, []);

  React.useEffect(() => {
    if (!stateIsoCode) return;
    const _cities = City.getCitiesOfState("NG", stateIsoCode).map(
      (city) => city.name
    );
    setCities(_cities);
  }, [stateIsoCode]);

  return (
    <React.Fragment>
      {error ? (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      ) : null}
      <form onSubmit={handleSubmit}>
        <InputBox label="Full Name">
          <Input
            fullWidth
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleChangeWrapper}
            error={nameError}
            onBlur={checkNameError}
            placeholder="Enter Full Name"
            helperText={nameError}
          />
        </InputBox>
        <InputBox label="Email ID">
          <Input
            fullWidth
            type="email"
            name="email"
            value={email}
            onChange={handleChangeWrapper}
            placeholder="Enter Email ID"
            onBlur={checkEmailError}
            error={emailError}
            helperText={emailError}
          />
        </InputBox>
        <InputBox label="Mobile Number">
          <Input
            fullWidth
            type="number"
            inputMode="tel"
            name="phone"
            value={phone}
            onChange={handleChangeWrapper}
            placeholder="Mobile Number"
            onBlur={checkPhoneError}
            error={phoneError}
            helperText={phoneError}
            inputProps={{
              sx: textfieldStyle,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography variant="body2">+234</Typography>
                </InputAdornment>
              ),
            }}
          />
        </InputBox>

        {/** DATE OF BIRTH AND MARITAL STATUS */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {/** Date of Birth */}
          <InputBox label="Date of Birth" style={{ width: "48%" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                inputFormat="dd/MM/yyyy"
                value={dob}
                name="dob"
                disableFuture
                onChange={(newVal) => {
                  handleChange("dob", newVal);
                }}
                renderInput={(params) => (
                  <Input
                    {...params}
                    placeholder="Date of Birth"
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

          {/* **** marital status ***** */}
          <InputBox label="Marital Status" style={{ width: "48%" }}>
            <Autocomplete
              fullWidth
              options={["Married", "Single", "Divorced"]}
              onChange={(e, value) => handleChange("maritalStatus", value)}
              renderOption={(props, option) => (
                <Typography {...props} variant="body2" color="text.secondary">
                  {option}
                </Typography>
              )}
              sx={{ mb: 0.75 }}
              renderInput={(params) => (
                <Input
                  {...params}
                  placeholder="Select Option"
                  error={maritalStatusError}
                  helperText={maritalStatusError}
                  onBlur={checkMaritalStatusError}
                  inputProps={{
                    ...params.inputProps,
                    style: { padding: ".75rem 1rem" },
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </InputBox>
        </Box>

        {/* ******************* ADDRESS ***************** */}
        <InputBox label="Address">
          <Input
            fullWidth
            type="text"
            name="address"
            value={address}
            onChange={handleChangeWrapper}
            placeholder="Enter Address"
            error={addressError}
            helperText={addressError}
            onBlur={checkAddressError}
          />
        </InputBox>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {/* ######################## STATE ################## */}
          <InputBox label="State" style={{ width: "48%" }}>
            <Autocomplete
              fullWidth
              options={states}
              onChange={(e, value) => handleStateSelection(value)}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Typography {...props} variant="body2" color="text.secondary">
                  {option.name}
                </Typography>
              )}
              renderInput={(params) => (
                <Input
                  {...params}
                  placeholder="Select State"
                  error={stateError}
                  onBlur={checkStateError}
                  helperText={stateError}
                  inputProps={{
                    ...params.inputProps,
                    style: { padding: ".75rem 1rem" },
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </InputBox>

          {/* ######################## CITY ################## */}
          <InputBox label="City" style={{ width: "48%" }}>
            <Autocomplete
              fullWidth
              options={cities}
              disableClearable
              autoHighlight
              onChange={(e, value) => handleChange("city", value)}
              getOptionLabel={(option) => option}
              renderOption={(props, option) => (
                <Typography {...props} variant="body2" color="text.secondary">
                  {option}
                </Typography>
              )}
              renderInput={(params) => (
                <Input
                  {...params}
                  placeholder="Select City"
                  error={cityError}
                  onBlur={checkCityError}
                  helperText={cityError}
                  inputProps={{
                    ...params.inputProps,
                    style: { padding: ".75rem 1rem" },
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </InputBox>
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <InputBox
            label="Pincode"
            style={{ marginRight: "16px", width: "50%" }}
          >
            <Input
              fullWidth
              type="text"
              name="pincode"
              value={pincode}
              onChange={handleChangeWrapper}
              placeholder="Enter Pincode"
              error={pinError}
              onBlur={checkPincodeError}
              helperText={pinError}
            />
          </InputBox>
          <InputBox label="Driver's License Image" style={{ width: "50%" }}>
            <Input
              fullWidth
              placeholder="Upload"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FileUploadOutlinedIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </InputBox>
        </Box>

        {currentStep == 2 ? null : (
          <StyledButton type="submit">Next</StyledButton>
        )}
      </form>
    </React.Fragment>
  );
}

const StyledButton = (props) => (
  <Button
    {...props}
    variant="contained"
    style={{ ...props.style, height: "42px" }}
    sx={{ mt: 2 }}
  />
);
