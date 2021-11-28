import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";

import { Title } from "../../../components/customStyledComponents/texts";

// components
import MinimalLayout from "../../../components/Layout/MinimalLayout";
import Formstepper from "../../../components/Formstepper";
import Proposer from "./Proposer";
import Members from "./Members";
import Proposal from "./Proposal";
import ReviewAndPay from "./ReviewAndPay";

import { styled } from "@mui/material/styles";
import PlanDetails from "./PlanDetails";
import { useSelector } from "react-redux";

const StyledBox = styled(Box)(({ theme }) => ({
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 63px #F0F0F0",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2, 3),
  marginBottom: "3rem",
  padding: theme.spacing(3, 4),
  width: "100%",
  [theme.breakpoints.only("xs")]: {
    padding: theme.spacing(3),
  },
}));

const StyledButton = (props) => (
  <Button
    {...props}
    variant="contained"
    sx={{ ...props.sx, mt: 2, textTransform: "none" }}
  />
);

export default function HealthBuyNow() {
  const currentStep = useSelector(
    (state) => state.healthBuyStepper.currentStep
  );
  const steps = ["Proposer", "Members", "Review & Pay", "Proposal"];

  // const handleStepChange = (action) => {
  //   if (currentStep > steps.length - 2) return;
  //   if (action === "stepUp") setCurrentStep(currentStep + 1);
  // };

  // const handleStepUp = () => {
  //   if (currentStep > steps.length - 2) return;
  //   setCurrentStep(currentStep + 1);
  // };

  console.log(currentStep);

  const renderSteppedForm = (step) => {
    switch (step) {
      case 0:
        return <Proposer />;
      case 1:
        return <Members />;
      case 2:
        return <ReviewAndPay />;
      case 3:
        return <Proposal />;
      default:
        return;
    }
  };

  const renderButton = (step) => {
    switch (step) {
      case 0:
        return <StyledButton>Continue to Member Section</StyledButton>;
      case 1:
        return <StyledButton>Continue to Pay</StyledButton>;
      case 2:
        return <StyledButton>Next</StyledButton>;
      case 3:
        return <StyledButton>Next</StyledButton>;
      default:
        return;
    }
  };

  return (
    <MinimalLayout>
      <Grid container spacing={4}>
        <Grid item container xs={12} md={8} sx={{ width: 1 }}>
          <Title>Insurance Type/ Plan Name</Title>
          <StyledBox>
            <Formstepper currentStep={currentStep} steps={steps} />
            <br />
            {renderSteppedForm(currentStep)}
          </StyledBox>

          {/** Plan Details on Mobile Screen */}
          <Hidden mdUp>
            <Title>Plan Details</Title>
            <StyledBox>Plan Details on Mobile Screen</StyledBox>
          </Hidden>
        </Grid>

        {/* Plan Details Section on Large Screen */}
        <Hidden mdDown>
          <Grid item xs={12} md={4} sx={{ width: 1 }}>
            <Title>Plan Details</Title>
            <StyledBox>
              <PlanDetails />
              {currentStep === 1 ? (
                <StyledButton fullWidth>Proceed To Payment</StyledButton>
              ) : null}
            </StyledBox>
          </Grid>
        </Hidden>
      </Grid>
    </MinimalLayout>
  );
}
