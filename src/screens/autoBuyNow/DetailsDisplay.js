import React from 'react'
import { Typography, Box, Divider, Button } from '@mui/material'
import { Paper } from './utils'
export default function DetailsDisplay({ setCurrentStep }) {
  return (
    <div>
      {/** Policy Holder Details */}
      <Paper>
        <Box sx={{ py: 2 }}>
          <Typography variant="h5">Policy Holder Details</Typography>
          <Divider sx={{ my: 1 }} />
          {
            [
              { title: "Full Name", value: "John Doe" },
              { title: "Email ID", value: "john@gmail.com" },
              { title: "Mobile", value: "+234 XXXXXX" },
              { title: "Date of Birth", value: "12 April 1998" },
              { title: "Marital Status", value: "Single" },
              { title: "Address", value: "Street No 12, Bazar Road" },
              { title: "City", value: "Abuja" },
              { title: "State/Country", value: "Nigeria" }
            ].map((elem, i) => (
              <ItemDisplay title={elem.title} value={elem.value} />
            ))
          }
          <Box style={{ display: "flex", justifyContent: "space-between", paddingTop: "4px" }}>
            <Typography variant="body1">Driver's License:</Typography>
            <input />
          </Box>
          <br />
          <Button variant="contained"
            onClick={() => setCurrentStep(0)}>Update</Button>
        </Box>
      </Paper>

      {/** Vehicle Details */}
      <Paper sx={{ mt: 3 }}>
        <Box sx={{ py: 2 }}>
          <Typography variant="h5">Vehicle Details</Typography>
          <Divider sx={{ my: 1 }} />
          {
            [
              { title: "Brand Name", value: "Honda" },
              { title: "Model", value: "M300" },
              { title: "Launch Year", value: "2020" },
              { title: "Car No", value: "TH8798JK" },
              { title: "Chassis No", value: "3984792837" },
              { title: "IDV", value: "Nira 456000" },
              { title: "Registration Date", value: "12 April 2021" },
              { title: "Existing Policy Expires Date", value: "12 June 2022" },
              { title: "Ownership Change is Last 12 months", value: "No" },
              { title: "Owned by", value: "Company" }
            ].map((elem, i) => (
              <ItemDisplay title={elem.title} value={elem.value} />
            ))
          }
          <br />
          <Button variant="contained"
            onClick={() => setCurrentStep(1)}>Update</Button>
        </Box>
      </Paper>
    </div>
  )
}

const ItemDisplay = ({ title, value }) => {
  return (
    <Box style={{ display: "flex", justifyContent: "space-between", paddingTop: "4px" }}>
      <Typography variant="body2" color="text.secondary" gutterBottom>{title} :</Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>{value}</Typography>
    </Box>
  )
}