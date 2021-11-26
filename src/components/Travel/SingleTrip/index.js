import React from "react";
import { Alert, Box } from "@mui/material";
import StepperHelper from "../../StepperHelper";

import { useDispatch, useSelector } from "react-redux";

import { scrollToTop, scrollToError } from "../../../utils/scrolling";
import { Redirect } from "react-router";

import TravelCover from "../../Forms/Travel/TravelCover";
import TripDetail from "../../Forms/Travel/TripDetail";

export default function SingleTrip({ multi }) {
  const steps = ["Cover", "Trip Details", "Compare"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState("");
  const travelQuery = useSelector((state) => state.travelQuery);
  const { fullName, email, phone } = useSelector((state) => state.searcher);

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1);
    setError("");
  };

  const handleNext = () => {
    if (activeStep === 0) {
      // form step one validation
      let validated = travelQuery.travellers.reduce(
        (a, t) =>
          a * Boolean(t.age) * Boolean(t.gender) * Boolean(t.preCondition),
        1
      );
      if (!validated) {
        setError("All fields are required.");
        scrollToError();
        return;
      }
    } else if (activeStep === 1) {
      // form step 2 validation
      if (
        !fullName ||
        !email ||
        !phone ||
        !travelQuery.location ||
        !travelQuery.tripStartDate ||
        !travelQuery.tripEndDate ||
        !travelQuery.destination ||
        !travelQuery.transport
      ) {
        console.log(travelQuery);
        setError("All fields are required.");
        scrollToError();
        return;
      }
    }
    setActiveStep((activeStep) => activeStep + 1);
    setError("");
  };

  React.useEffect(() => {
    scrollToTop();
  }, [activeStep]);

  return (
    <div>
      <StepperHelper
        steps={steps}
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
      >
        <div>
          {error ? (
            <Alert severity="error" sx={{ mt: 2, mb: 1 }}>
              {error}
            </Alert>
          ) : null}
        </div>

        <Box sx={{ mt: 2 }}>
          {activeStep === 0 ? (
            <TravelCover />
          ) : activeStep === 1 ? (
            <TripDetail multi={multi} />
          ) : (
            <Redirect to="/travel/compare" />
          )}
        </Box>
      </StepperHelper>
    </div>
  );
}
