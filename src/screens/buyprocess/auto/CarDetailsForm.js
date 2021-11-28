import React from "react";
import { useForm } from "../../../components/customHooks/useForm";
import { Box, Typography, Button, Grid, Alert } from "@mui/material";
import { SelectInput } from "./utils";
import InputBox from "../../../components/customStyledComponents/InputBox";
import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete,
  inputPropStyle,
} from "../../../components/customStyledComponents/inputs";

// date picker utils from mui
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  AUTO_BUY_STEP_CHANGE,
  UPDATE_VEHICLE_DETAILS,
} from "../../../constants/autoCompare.constant";

import {
  useDateValidation,
  useInputValidation,
} from "../../../components/customHooks/validationHooks";
import { scrollToTop } from "../../../utils/scrolling";

export default function CarDetailsForm({}) {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.autoBuyStepper.currentStep);
  const { brand, model, year, carNo } = useSelector(
    (state) => state.autoQuery
  );

  const {
    chassisNo,
    ownershipChanged,
    externalKit,
    owner,
    carRegDate,
    policyExpireDate,
    idv
  } = useSelector((state) => state.vehicleDetails);

  const [error, setError] = React.useState("");

  const [chassisError, checkChassisError] = useInputValidation(chassisNo);
  const [carRegDateError, checkCarRegDateError] = useDateValidation(carRegDate);
  const [policyExpireDateError, checkPolicyExpireDateError] =
    useDateValidation(policyExpireDate);

  const handleChange = (field, value) => {
    dispatch({
      type: UPDATE_VEHICLE_DETAILS,
      payload: { field, value },
    });
  };

  const stepChange = () => {
    if (
      !chassisError &&
      !carRegDateError &&
      !policyExpireDateError &&
      ownershipChanged &&
      externalKit &&
      owner
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
    if (
      !chassisNo ||
      !ownershipChanged ||
      !externalKit ||
      !owner ||
      !carRegDate ||
      !policyExpireDate
    ) {
      setError("Please provide all necessary data.");
      scrollToTop();
      return;
    }
    stepChange();
  };

  // const [chassisNo, setChassisNo] = React.useState("");
  // const [ownershipChanged, setOwnershipChanged] = React.useState("No");
  // const [externalKit, setExternalKit] = React.useState("No");
  // const [owner, setOwner] = React.useState("individual");
  // const [carRegDate, handleCarRegDate] = useForm({
  //   date: "",
  //   month: "",
  //   year: "",
  // });
  // const [policyExpireDate, handlePolicyExpireDate] =

  return (
    <React.Fragment>
      {error ? (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      ) : null}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputBox label="Brand">
              <Input fullWidth value={brand} />
            </InputBox>
          </Grid>

          <Grid item xs={6}>
            <InputBox label="Model">
              <Input fullWidth value={model} />
            </InputBox>
          </Grid>

          <Grid item xs={6}>
            <InputBox label="Year">
              <Input fullWidth value={year} />
            </InputBox>
          </Grid>

          <Grid item xs={6}>
            <InputBox label="Car Number">
              <Input fullWidth value={carNo} />
            </InputBox>
          </Grid>

          <Grid item xs={6}>
            <InputBox label="Chassis No">
              <Input
                fullWidth
                value={chassisNo}
                onChange={(e) => handleChange("chassisNo", e.target.value)}
                error={chassisError}
                helperText={chassisError}
                onBlur={checkChassisError}
              />
            </InputBox>
          </Grid>

          <Grid item xs={6}>
            <InputBox label="IDV">
              <Input fullWidth value={idv} />
            </InputBox>
          </Grid>

          <Grid item xs={12}>
            <InputBox label="Existing Third Party Policy Expires Date">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  inputFormat="dd/MM/yyyy"
                  value={policyExpireDate}
                  onChange={(newVal) => {
                    handleChange("policyExpireDate", newVal);
                  }}
                  renderInput={(params) => (
                    <Input
                      {...params}
                      fullWidth
                      placeholder="Policy expires date"
                      error={policyExpireDateError}
                      onKeyUp={checkPolicyExpireDateError}
                      helperText={policyExpireDateError}
                      inputProps={{
                        ...params.inputProps,
                        style: inputPropStyle,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </InputBox>
          </Grid>

          <Grid item xs={12}>
            <InputBox label="Car Registration Date">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  inputFormat="dd/MM/yyyy"
                  value={carRegDate}
                  onChange={(newVal) => {
                    handleChange("carRegDate", newVal);
                  }}
                  renderInput={(params) => (
                    <Input
                      {...params}
                      fullWidth
                      placeholder="Car Registration Date"
                      error={carRegDateError}
                      onBlur={checkCarRegDateError}
                      helperText={carRegDateError}
                      inputProps={{
                        ...params.inputProps,
                        style: inputPropStyle,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </InputBox>
          </Grid>

          <Grid item xs={12}>
            <InputBox label="Did Car's ownership change in the last 12 months?">
              <Box className={styles.questionContainer}>
                <input
                  type="radio"
                  checked={ownershipChanged === "Yes"}
                  onChange={(e) =>
                    handleChange("ownershipChanged", e.target.value)
                  }
                  value="Yes"
                  style={{ cursor: "pointer" }}
                />
                <RadioButtonLabel>Yes</RadioButtonLabel>
                <input
                  type="radio"
                  checked={ownershipChanged === "No"}
                  onChange={(e) =>
                    handleChange("ownershipChanged", e.target.value)
                  }
                  value="No"
                  style={{ cursor: "pointer", marginLeft: "16px" }}
                />
                <RadioButtonLabel>No</RadioButtonLabel>
              </Box>
            </InputBox>
          </Grid>

          <Grid item xs={12}>
            <InputBox label="Does this car has an external CNG/LPG kit?">
              <Box className={styles.questionContainer}>
                <input
                  type="radio"
                  checked={externalKit === "Yes"}
                  onChange={(e) => handleChange("externalKit", e.target.value)}
                  value="Yes"
                  style={{ cursor: "pointer" }}
                />
                <RadioButtonLabel>Yes</RadioButtonLabel>
                <input
                  type="radio"
                  checked={externalKit === "No"}
                  onChange={(e) => handleChange("externalKit", e.target.value)}
                  value="No"
                  style={{ cursor: "pointer", marginLeft: "16px" }}
                />
                <RadioButtonLabel>No</RadioButtonLabel>
              </Box>
            </InputBox>
          </Grid>

          <Grid item xs={12}>
            <InputBox label="Car is owned by">
              <Box className={styles.questionContainer}>
                <input
                  type="radio"
                  checked={owner === "individual"}
                  onChange={(e) => handleChange("owner", e.target.value)}
                  value="individual"
                  style={{ cursor: "pointer" }}
                />
                <RadioButtonLabel>Individual</RadioButtonLabel>
                <input
                  type="radio"
                  checked={owner === "commercial"}
                  onChange={(e) => handleChange("owner", e.target.value)}
                  value="commercial"
                  style={{ cursor: "pointer", marginLeft: "16px" }}
                />
                <RadioButtonLabel>Company</RadioButtonLabel>
              </Box>
            </InputBox>
          </Grid>
        </Grid>
        {currentStep == 2 ? null : (
          <StyledButton type="submit">Next</StyledButton>
        )}
      </form>
    </React.Fragment>
  );
}

const RadioButtonLabel = (props) => (
  <Typography
    {...props}
    sx={{ ml: 0.5 }}
    variant="body2"
    color="text.secondary"
  ></Typography>
);

const StyledButton = (props) => (
  <Button
    {...props}
    variant="contained"
    style={{ ...props.style, height: "42px" }}
    sx={{ mt: 2 }}
  />
);
