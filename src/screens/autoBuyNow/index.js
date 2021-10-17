import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Divider, Paper } from '@mui/material';

// components
import MinimalLayout from '../../components/Layout/MinimalLayout';
import PolicyHolderDetailsForm from './PolicyHolderDetailsForm';
import CarDetailsForm from './CarDetailsForm';
import PlanDetails from './PlanDetails';
import DetailsDisplay from './DetailsDisplay';

export default function AutoBuyNow() {
  const [currentStep, setCurrentStep] = React.useState(0)
  const steps = ['Your Details', 'Car Details', 'Buy Now']

  const handleStepChange = (action) => {
    if (currentStep > steps.length - 2) return;
    if (action === 'stepUp') setCurrentStep(currentStep + 1)
  }
  console.log(currentStep)
  return (
    <MinimalLayout>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mx: 4 }}>
          <Typography variant="h6">
            <strong>Comprehensive</strong>
          </Typography>
          {
            currentStep < 2 ?
              <Paper sx={{ maxWidth: 420, p: 4 }} elevation={24}>
                <FormStepper
                  currentStep={currentStep}
                  steps={steps} />
                {
                  currentStep === 0 ?
                    <PolicyHolderDetailsForm
                      handleStepChange={handleStepChange} /> :
                    currentStep === 1 ?
                      <CarDetailsForm handleStepChange={handleStepChange} /> : null
                }
              </Paper> :
              <>
                <Paper sx={{ maxWidth: 420, p: 4, }} elevation={24}>
                  <FormStepper
                    currentStep={currentStep}
                    steps={steps} />
                </Paper>
                <DetailsDisplay setCurrentStep={setCurrentStep} />
              </>
          }
        </Box>

        {/* Plan Details Section */}
        <Box sx={{ mx: 4 }}>
          <Typography variant="h6">
            <strong>Plan Details</strong>
          </Typography>
          <Paper sx={{ minWidth: 420, p: 4 }} elevation={24}>
            <PlanDetails currentStep={currentStep} />
          </Paper>
        </Box>
      </Box>
    </MinimalLayout>
  );
}


const FormStepper = ({ steps, currentStep }) => {

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      {
        steps.map((step, i) => {
          if (i === 0) {
            return (
              <Typography
                variant="body2"
                key={i}
                sx={{
                  color: i > currentStep ? "text.disabled" : "text.primary"
                }}>
                <strong>{step}</strong>
              </Typography>)
          } else {
            return <React.Fragment key={i}>
              <Box sx={{
                height: "1px",
                backgroundColor: i > currentStep ? "text.disabled" : "text.primary",
                width: 40,
                mx: 1.5
              }} />
              <Typography
                variant="body2"
                sx={{
                  color: i > currentStep ? "text.disabled" : "text.primary"
                }}>
                <strong>{step}</strong>
              </Typography>
            </React.Fragment>
          }
        })
      }
    </Box>
  )
}