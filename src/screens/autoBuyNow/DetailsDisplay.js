import React from 'react'
import { Typography, Box, Divider, Button } from '@mui/material'
import { Paper } from './utils'

export default function DetailsDisplay({ setCurrentStep }) {
  return (
    <div>
      <Paper sx={{ maxWidth: 420, p: 4, mt: 3 }} elevation={24}>
        <Typography variant="h6">Policy Holder Details</Typography>
        <Divider />
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
          <Typography variant="body2"><strong>Driver's License:</strong></Typography>
          <input />
        </Box>
        <br />
        <Button variant="contained" size="small"
          onClick={() => setCurrentStep(0)}>Update</Button>
      </Paper>

      <Paper sx={{ maxWidth: 420, p: 4, mt: 3 }} elevation={24}>
        <Typography variant="h6">Vehicle Details</Typography>
        <Divider />
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
        <Box style={{ display: "flex", justifyContent: "space-between", paddingTop: "4px" }}>
          <Typography variant="body2"><strong>Driver's License:</strong></Typography>
          <input />
        </Box>
        <br />
        <Button variant="contained" size="small"
          onClick={() => setCurrentStep(1)}>Update</Button>
      </Paper>
    </div>
  )
}

const ItemDisplay = ({ title, value }) => {
  return (
    <Box style={{ display: "flex", justifyContent: "space-between", paddingTop: "4px" }}>
      <Typography variant="body2">{title} :</Typography>
      <Typography variant="body2">{value}</Typography>
    </Box>
  )
}