import * as React from 'react';
import Box from '@mui/material/Box';

import { Title, Subtitle, Paper } from './utils'

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
  return (
    <MinimalLayout>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mx: 4, mb: 6, mt: 4 }}>
          <Title>Comprehensive</Title>
          {
            currentStep < 2 ?
              <Paper sx={{
                px: 4.5, pt: 2, pb: 4,
                maxWidth: 500
              }}>
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
                <Paper sx={{ p: 4 }}>
                  <FormStepper
                    currentStep={currentStep}
                    steps={steps} />
                </Paper>
                <DetailsDisplay setCurrentStep={setCurrentStep} />
              </>
          }
        </Box>

        {/* Plan Details Section */}

        {/*<Box sx={{ mx: 4, mb: 6, mt: 4 }}>
          <Title>Plan Details</Title>
          <Box
            sx={{ p: 5 }}
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 0px 63px #F0F0F0",
              borderRadius: "15px",
              minWidth: 450
            }}>
            <PlanDetails currentStep={currentStep} />
          </Box>
          </Box>*/}
      </Box>
    </MinimalLayout >
  );
}


const FormStepper = ({ steps, currentStep }) => {

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      {
        steps.map((step, i) => {
          if (i === 0) {
            return (
              <Subtitle
                key={i}
                sx={{
                  color: i > currentStep ? "text.disabled" : "text.primary",
                }}>
                {step}
              </Subtitle>)
          } else {
            return <React.Fragment key={i}>
              <Box sx={{
                height: "1px",
                backgroundColor: i > currentStep ? "text.disabled" : "text.primary",
                width: 40,
              }} />
              <Subtitle
                sx={{
                  color: i > currentStep ? "text.disabled" : "text.primary",
                }}>
                {step}
              </Subtitle>
            </React.Fragment>
          }
        })
      }
    </Box>
  )
}