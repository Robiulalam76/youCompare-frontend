import React from "react";
import { Box, Button, Grid, Typography, Hidden } from "@mui/material";
import { Title } from "../../../components/customStyledComponents/texts";

// components
import MinimalLayout from "../../../components/Layout/MinimalLayout";
import PolicyHolderDetailsForm from "./PolicyHolderDetailsForm";
import CarDetailsForm from "./CarDetailsForm";
import PlanDetails from "./PlanDetails";
// import DetailsDisplay from "./DetailsDisplay";
import Formstepper from "../../../components/Formstepper";
import { StyledBox, StyledButton } from "./styledComponents";
import { useSelector } from "react-redux";

const StepperLayout = (props) => {
  return (
    <StyledBox>
      <Formstepper currentStep={props.currentStep} steps={props.steps} />
      {props.children || null}
    </StyledBox>
  );
};

const formatDate = (date) => {
  let arr = new Date(date).toDateString().slice(4).split(" ");
  return arr[1] + " " + arr[0] + " " + arr[2];
};

export default function AutoBuyNow() {
  const currentStep = useSelector((state) => state.autoBuyStepper.currentStep);
  const steps = ["Your Details", "Car Details", "Buy Now"];

  // const handleStepChange = (action) => {
  //   if (currentStep > steps.length - 2) return;
  //   if (action === "stepUp") setCurrentStep(currentStep + 1);
  // };

  const renderComponents = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepperLayout currentStep={currentStep} steps={steps}>
            <PolicyHolderDetailsForm />
          </StepperLayout>
        );
      case 1:
        return (
          <StepperLayout currentStep={currentStep} steps={steps}>
            <CarDetailsForm />
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
  const { carNo, model, brand, year } = useSelector((state) => state.autoQuery);
  const {
    idv,
    carRegDate,
    policyExpireDate,
    ownershipChanged,
    owner,
    chassisNo,
  } = useSelector((state) => state.vehicleDetails);
  return (
    <StyledBox>
      <Typography variant="h5">Vehicle Details</Typography>
      <br />
      {showVehicleForm ? (
        <CarDetailsForm />
      ) : (
        <React.Fragment>
          {[
            { title: "Brand Name", value: brand },
            { title: "Model", value: model },
            { title: "Launch Year", value: year },
            { title: "Car No", value: carNo },
            { title: "Chassis No", value: chassisNo },
            { title: "IDV", value: `Nira ${idv}` },
            {
              title: "Registration Date",
              value: formatDate(carRegDate),
            },
            {
              title: "Existing Policy Expires Date",
              value: formatDate(policyExpireDate),
            },
            {
              title: "Ownership Change is Last 12 months",
              value: ownershipChanged,
            },
            { title: "Owned by", value: owner },
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
  return (
    <StyledBox>
      <Typography variant="h5">Policy Holder Details</Typography>
      <br />
      {showHolderForm ? (
        <PolicyHolderDetailsForm />
      ) : (
        <React.Fragment>
          {[
            { title: "Full Name", value: fullName },
            { title: "Email ID", value: email },
            { title: "Mobile", value: phone },
            {
              title: "Date of Birth",
              value: formatDate(dob),
            },
            { title: "Marital Status", value: maritalStatus },
            { title: "Address", value: address },
            { title: "City", value: city },
            { title: "State/Country", value: state },
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
            <Typography variant="body2" color="text.secondary">
              Driver's License:
            </Typography>
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
