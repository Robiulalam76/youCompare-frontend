import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Divider, Paper } from '@mui/material';
import MinimalLayout from '../../components/Layout/MinimalLayout';
import PolicyHolderDetailsForm from './PolicyHolderDetailsForm';

export default function AutoBuyNow() {
  return (
    <MinimalLayout>
      <Box>
        <Typography variant="h6">
          <strong>Comprehensive</strong>
        </Typography>
        <Paper sx={{ maxWidth: 420, p: 4 }} elevation={20}>
          <FormStepper />
          <PolicyHolderDetailsForm />
        </Paper>
      </Box>
    </MinimalLayout>
  );
}


const FormStepper = () => {
  const steps = ['Your Details', 'Car Details', 'Buy Now']
  const [selected, setSelected] = React.useState(1)

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      {
        steps.map((step, i) => {
          if (i === 0) {
            return (
              <Typography
                variant="body2"
                sx={{
                  color: i > selected ? "text.disabled" : "text.primary"
                }}>
                <strong>{step}</strong>
              </Typography>)
          } else {
            return <>
              <Box sx={{
                height: "1px",
                backgroundColor: i > selected ? "text.disabled" : "text.primary",
                width: 40,
                mx: 1.5
              }} />
              <Typography
                variant="body2"
                sx={{
                  color: i > selected ? "text.disabled" : "text.primary"
                }}>
                <strong>{step}</strong>
              </Typography>
            </>
          }
        })
      }
    </Box>
  )
}