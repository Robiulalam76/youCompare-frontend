import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Hidden from "@mui/material/Hidden";

import { Title } from "../../../components/customStyledComponents/texts";

// components
import MinimalLayout from "../../../components/Layout/MinimalLayout";
import PolicyHolderDetailsForm from "./PolicyHolderDetailsForm";
import CarDetailsForm from "./CarDetailsForm";
import PlanDetails from "./PlanDetails";
// import DetailsDisplay from "./DetailsDisplay";
import Formstepper from "../../../components/Formstepper";

import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 63px #F0F0F0",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2, 3),
  marginBottom: "2rem",
  [theme.breakpoints.only("sm")]: {
    padding: theme.spacing(3, 4),
    width: "450px",
  },
  [theme.breakpoints.only("md")]: {
    padding: theme.spacing(3, 4),
    width: "420px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(3, 4),
    width: "500px",
  },
}));
const StyledButton = (props) => (
  <Button
    {...props}
    variant="contained"
    style={{ ...props.style, height: "42px" }}
    sx={{ mt: 2 }}
  />
);

const StepperLayout = (props) => {
  return (
    <StyledBox>
      <Formstepper currentStep={props.currentStep} steps={props.steps} />
      {props.children || null}
    </StyledBox>
  );
};

export default function AutoBuyNow() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const steps = ["Your Details", "Car Details", "Buy Now"];

  // const handleStepChange = (action) => {
  //   if (currentStep > steps.length - 2) return;
  //   if (action === "stepUp") setCurrentStep(currentStep + 1);
  // };

  const handleNext = () => {
    if (currentStep === 2) return;
    setCurrentStep(currentStep + 1);
  };

  const renderComponents = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepperLayout currentStep={currentStep} steps={steps}>
            <PolicyHolderDetailsForm />
            <StyledButton onClick={handleNext}>Next</StyledButton>
          </StepperLayout>
        );
      case 1:
        return (
          <StepperLayout currentStep={currentStep} steps={steps}>
            <CarDetailsForm />
            <StyledButton onClick={handleNext}>Next</StyledButton>
          </StepperLayout>
        );
      case 2:
        return (
          <div style={{ margin: "0 auto" }}>
            <StyledBox>
              <Formstepper currentStep={currentStep} steps={steps} />
            </StyledBox>
            <PolicyHolder />
            <CarDetails />
          </div>
        );
      default:
        return;
    }
  };

  return (
    <MinimalLayout>
      <Grid container spacing={2}>
        <Grid item container xs={12} md={6} sx={{ width: 1 }}>
          <div style={{ margin: "0 auto" }}>
            <Title>Comprehensive</Title>
            {renderComponents()}
            <Hidden mdUp>
              <Title>Plan Details</Title>
              <StyledBox>
                <PlanDetails currentStep={currentStep} />
              </StyledBox>
            </Hidden>
          </div>
        </Grid>

        {/* Plan Details Section */}
        <Hidden mdDown>
          <Grid item xs={12} md={6} sx={{ width: 1 }}>
            <Title>Plan Details</Title>
            <StyledBox>
              <PlanDetails currentStep={currentStep} />
            </StyledBox>
          </Grid>
        </Hidden>
      </Grid>
    </MinimalLayout>
  );
}

const CarDetails = () => {
  const [showVehicleForm, setShowVehicleForm] = React.useState(false);
  return (
    <StyledBox>
      <Typography variant="h5">Vehicle Details</Typography>
      <br />
      {showVehicleForm ? (
        <CarDetailsForm />
      ) : (
        <React.Fragment>
          {[
            { title: "Brand Name", value: "Honda" },
            { title: "Model", value: "M300" },
            { title: "Launch Year", value: "2020" },
            { title: "Car No", value: "TH8798JK" },
            { title: "Chassis No", value: "3984792837" },
            { title: "IDV", value: "Nira 456000" },
            { title: "Registration Date", value: "12 April 2021" },
            { title: "Existing Policy Expires Date", value: "12 June 2022" },
            { title: "Ownership Change is Last 12 months", value: "No" },
            { title: "Owned by", value: "Company" },
          ].map((elem, i) => (
            <ItemDisplay title={elem.title} value={elem.value} />
          ))}
        </React.Fragment>
      )}
      <br />
      {showVehicleForm ? (
        <StyledButton onClick={() => setShowVehicleForm(false)}>
          Confirm
        </StyledButton>
      ) : (
        <StyledButton onClick={() => setShowVehicleForm(true)}>
          Update
        </StyledButton>
      )}
      <br />
    </StyledBox>
  );
};

const PolicyHolder = () => {
  const [showHolderForm, setShowHolderForm] = React.useState(false);

  return (
    <StyledBox>
      <Typography variant="h5">Policy Holder Details</Typography>
      <br />
      {showHolderForm ? (
        <PolicyHolderDetailsForm />
      ) : (
        <React.Fragment>
          {[
            { title: "Full Name", value: "John Doe" },
            { title: "Email ID", value: "john@gmail.com" },
            { title: "Mobile", value: "+234 XXXXXX" },
            { title: "Date of Birth", value: "12 April 1998" },
            { title: "Marital Status", value: "Single" },
            { title: "Address", value: "Street No 12, Bazar Road" },
            { title: "City", value: "Abuja" },
            { title: "State/Country", value: "Nigeria" },
          ].map((elem, i) => (
            <ItemDisplay title={elem.title} value={elem.value} />
          ))}
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "4px",
            }}
          >
            <Typography variant="body1">Driver's License:</Typography>
            <input />
          </Box>
        </React.Fragment>
      )}
      <br />
      {showHolderForm ? (
        <StyledButton onClick={() => setShowHolderForm(false)}>
          Confirm
        </StyledButton>
      ) : (
        <StyledButton onClick={() => setShowHolderForm(true)}>
          Update
        </StyledButton>
      )}
      <br />
    </StyledBox>
  );
};

/* ################# DETAILS DISPLAY ###################### */
const ItemDisplay = ({ title, value }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "4px",
      }}
    >
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {title} :
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {value}
      </Typography>
    </Box>
  );
};
