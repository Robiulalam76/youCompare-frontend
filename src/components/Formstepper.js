import React from 'react'
import { Box } from '@mui/system'
import { Subtitle } from './customStyledComponents/texts'

export default function Formstepper({ steps, currentStep }) {
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