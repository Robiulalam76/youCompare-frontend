import * as React from 'react';
import Box from '@mui/material/Box';

import { Title } from '../../../components/customStyledComponents/texts';

// components
import MinimalLayout from '../../../components/Layout/MinimalLayout';
import YourDetailsForm from './YourDetailsForm';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 63px #F0F0F0",
  borderRadius: "15px",
  maxWidth: 450,
  padding: theme.spacing(3, 4)
}))

export default function LifeBuyNow() {

  return (
    <MinimalLayout>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mx: 4, mb: 6, mt: 4 }}>
          <Title>Your Details</Title>
          <StyledBox>
            <YourDetailsForm />
          </StyledBox>
        </Box>

        {/* Plan Details Section */}

        <Box sx={{ mx: 4, mb: 6, mt: 4 }}>
          <Title>Plan Details</Title>
          <StyledBox
            sx={{ p: 5 }}>

          </StyledBox>
        </Box>
      </Box>
    </MinimalLayout >
  );
}