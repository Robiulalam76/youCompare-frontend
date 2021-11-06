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
  marginBottom: "3rem",
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

export default function AutoBuyNow() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const steps = ["Your Details", "Car Details", "Buy Now"];
  const [showHolderForm, setShowHolderForm] = React.useState(false);
  const [showVehicleForm, setShowVehicleForm] = React.useState(false);

  const handleStepChange = (action) => {
    if (currentStep > steps.length - 2) return;
    if (action === "stepUp") setCurrentStep(currentStep + 1);
  };

  return (
    <MinimalLayout>
      <Grid container spacing={2}>
        <Grid item container xs={12} md={6} sx={{ width: 1 }}>
          <div style={{ margin: "0 auto" }}>
            <Title>Comprehensive</Title>
            {currentStep < 2 ? (
              <StyledBox>
                <Formstepper currentStep={currentStep} steps={steps} />
                {currentStep === 0 ? (
                  <>
                    <PolicyHolderDetailsForm />
                    <Button
                      variant="contained"
                      style={{ height: "42px" }}
                      onClick={() => handleStepChange("stepUp")}
                      sx={{ mt: 2 }}
                    >
                      Next
                    </Button>
                  </>
                ) : currentStep === 1 ? (
                  <>
                    <CarDetailsForm />
                    <Button
                      variant="contained"
                      style={{ height: "42px" }}
                      onClick={() => handleStepChange("stepUp")}
                      sx={{ mt: 2 }}
                    >
                      Next
                    </Button>
                  </>
                ) : null}
              </StyledBox>
            ) : (
              <div style={{ margin: "0 auto" }}>
                <StyledBox>
                  <Formstepper currentStep={currentStep} steps={steps} />
                </StyledBox>

                <StyledBox>
                  {showHolderForm ? (
                    <>
                      <Typography variant="h5">
                        Policy Holder Details
                      </Typography>
                      <PolicyHolderDetailsForm />
                    </>
                  ) : (
                    <PolicyHolderDisplay />
                  )}
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => setShowHolderForm(true)}
                  >
                    Update
                  </Button>
                </StyledBox>

                {/** Vehicle Details */}
                <StyledBox>
                  {showVehicleForm ? (
                    <>
                      <Typography variant="h5">Vehicle Details</Typography>
                      <CarDetailsForm />
                    </>
                  ) : (
                    <CarDetailsDisplay />
                  )}
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => setShowVehicleForm(true)}
                  >
                    Update
                  </Button>
                </StyledBox>

                <Hidden mdUp>
                  <Title>Plan Details</Title>
                  <StyledBox>
                    <PlanDetails currentStep={currentStep} />
                  </StyledBox>
                </Hidden>
              </div>
            )}
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

const PolicyHolderDisplay = () => {
  return (
    <>
      <Typography variant="h5">Policy Holder Details</Typography>
      <Divider sx={{ my: 1 }} />
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
      <br />
    </>
  );
};

const CarDetailsDisplay = () => {
  return (
    <>
      <Typography variant="h5">Vehicle Details</Typography>
      <Divider sx={{ my: 1 }} />
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
      <br />
    </>
  );
};
