import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Paper } from './utils'
import { Title, Subtitle } from '../../components/customStyledComponents/texts';

// components
import MinimalLayout from '../../components/Layout/MinimalLayout';
import PolicyHolderDetailsForm from './PolicyHolderDetailsForm';
import CarDetailsForm from './CarDetailsForm';
import PlanDetails from './PlanDetails';
import DetailsDisplay from './DetailsDisplay';
import Formstepper from '../../components/Formstepper';

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
              <Box sx={{ width: 500 }} >
                <Paper>
                  <Formstepper
                    currentStep={currentStep}
                    steps={steps} />
                  {
                    currentStep === 0 ?
                      <>
                        <PolicyHolderDetailsForm />
                        <Button
                          variant="contained"
                          style={{ height: "42px" }}
                          onClick={() => handleStepChange('stepUp')}
                          sx={{ mt: 2 }}>Next</Button>
                      </> :
                      currentStep === 1 ?
                        <>
                          <CarDetailsForm />
                          <Button
                            variant="contained"
                            style={{ height: "42px" }}
                            onClick={() => handleStepChange('stepUp')}
                            sx={{ mt: 2 }}>Next</Button>
                        </> : null
                  }
                </Paper>
              </Box> :
              <Box sx={{ width: 500 }}>
                <Paper sx={{ mb: 3 }}>
                  <Formstepper
                    currentStep={currentStep}
                    steps={steps} />
                </Paper>
                <DetailsDisplay setCurrentStep={setCurrentStep} />
              </Box>
          }
        </Box>

        {/* Plan Details Section */}

        <Box sx={{ mx: 4, mb: 6, mt: 4 }}>
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
        </Box>
      </Box>
    </MinimalLayout >
  );
}