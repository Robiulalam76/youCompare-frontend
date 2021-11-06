import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

export default function Formstepper({ steps, currentStep }) {

  // scroll to top when step changes
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentStep]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      {
        steps.map((step, i) => {
          if (i === 0) {
            return (
              <Typography
                key={i}
                sx={{
                  fontWeight: 600,
                  fontSize: ".95rem",
                  color: i > currentStep ? "text.disabled" : "text.primary",
                }}>
                {step}
              </Typography>)
          } else {
            return <React.Fragment key={i}>
              <Box sx={{
                height: "1px",
                backgroundColor: i > currentStep ? "text.disabled" : "text.primary",
                width: 40,
              }} />
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: ".95rem",
                  color: i > currentStep ? "text.disabled" : "text.primary",
                }}>
                {step}
              </Typography>
            </React.Fragment>
          }
        })
      }
    </Box>
  )
}