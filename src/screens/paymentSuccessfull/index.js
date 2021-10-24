import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import { Paper } from './utils'

import styles from './styles.module.css'
import MinimalLayout from '../../components/Layout/MinimalLayout'


// Some utilities components
const Title = (props) =>
  <Typography
    {...props}
    sx={{
      ...props.sx,
      fontWeight: "medium",
      textTransform: "uppercase",
      color: "text.secondary"
    }} />

const FieldValueDisplay = ({ field, value }) => {
  console.log(field)
  return (
    <div>
      <Typography 
        sx={{ color: "text.disabled", fontWeight: "normal", lineHeight: "25px" }}>
        {field}
      </Typography>
      <Typography sx={{ fontWeight: "normal", lineHeight: "27px" }}>
        {value}
      </Typography>
    </div>
  )
}


// Defalut return
export default function PaymentSuccessfull() {

  const paymentDetails = [
    { field: "Paid Using", value: "Debit Card" },
    { field: "Amount", value: "5000", },
    { field: "Transaction ID", value: "PD28197799" },
    { field: "Date", value: "25 OCT, 2021" }
  ]

  const policyDetails = [
    { field: "Valid From", value: "31 Nov 2021" },
    { field: "Valid Till", value: "25 Dec 2022" },
    { field: "Policy Holder Name", value: "John Doe" },
    { field: "Insured Value", value: "6500000" }
  ]

  const overview = [
    { field: "Car Number", value: "XD347873HJ7" },
    { field: "Make/Model", value: "Mercedes 190" },
    { field: "Fuel Type", value: "Petrol" },
    { field: "Registration Year", value: "2019" },
    { field: "Insured Declared Value", value: "₦ 17,346" }
  ]

  const policyHolder = [
    { field: "Full Name", value: "John Doe" },
    { field: "Email", value: "john@gmail.com" },
    { field: "Phone", value: "+243 3434 456432" },
    { field: "Pincode", value: "17099" }
  ]

  return (
    <MinimalLayout>
      <div className={styles.container}>
        <Paper>
          <PaymentDetails paymentDetails={paymentDetails} />
        </Paper>

        <Paper sx={{ mt: 3 }}>
          <PolicyDetails policyDetails={policyDetails} />
        </Paper>

        <Paper sx={{ mt: 3 }}>
          <Overview overview={overview} />
        </Paper>

        <Paper sx={{ mt: 3 }}>
          <PolicyHolderDetails policyHolder={policyHolder} />
        </Paper>

      </div>
    </MinimalLayout>
  )
}

/** ******************** FIRST SECTION: PAYMENT DETAILS ******************* */

const PaymentDetails = ({ paymentDetails }) => {
  return (
    <React.Fragment>

      <div className={styles.flexBetween}>
        <Title>Payment Details</Title>
        <Button variant="round" color="secondary" size="small">
          Payment Successfull
        </Button>
      </div>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        {
          paymentDetails.map((elem, i) => (
            <FieldValueDisplay
              field={elem.field}
              value={elem.value}
              key={i} />
          ))
        }
      </Box>
    </React.Fragment>
  )
}

/** ***************** SECOND-SECTION: POLICY DETAILS ***************************** */

const ExpireButton = ({ text }) =>
  <Button
    variant="round"
    size="small"
    sx={{
      color: "pink.main",
      bgcolor: "pink.light",
      cursor: "auto",
      border: "none",
      "&:hover": {
        bgcolor: "pink.light"
      }
    }}>
    {text}
  </Button>

const PolicyDetails = ({ policyDetails }) => {
  return (
    <React.Fragment>

      <div className={styles.flexBetween}>
        <Box></Box>
        <Box>
          <ExpireButton text="Expires 25 Nov'22" />
        </Box>
      </div>

      <div className={styles.flexBetween}>
        <Box className={styles.flexBetween} sx={{ pt: 1 }}>
          <IconButton color="primary">
            <FileDownloadOutlinedIcon />
          </IconButton>
          <Typography sx={{ fontWeight: "medium", lineHeight: "25px", color: "primary.main" }}>
            Download Policy
          </Typography>
        </Box>
        <IconButton color="primary">
          <ModeEditOutlineOutlinedIcon />
        </IconButton>
      </div>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        {
          policyDetails.map((elem, i) => (
            <FieldValueDisplay
              field={elem.field}
              value={elem.value}
              key={i} />
          ))
        }
      </Box>
    </React.Fragment>
  )
}


/** ******************** THIRD SECTION: OVERVIEW ***************************** */

const Overview = ({ overview }) => {
  return (
    <React.Fragment>
      <Title>Overview</Title>
      {
        overview.map((elem, i) => (
          <Box sx={{ display: "inline-block", minWidth: "200px", mt: 1 }}>
            <FieldValueDisplay
              field={elem.field}
              value={elem.value}
              key={i} />
          </Box>
        ))
      }
    </React.Fragment>
  )
}

/*********************** FOURTH SECTION: POLICY HOLDER DETAILS *************** */

const PolicyHolderDetails = ({ policyHolder }) => {
  return (
    <React.Fragment>
      <Title>Policy Holder Details</Title>
      {
        policyHolder.map((elem, i) => (
          <Box sx={{ display: "inline-block", minWidth: "200px", mt: 1 }}>
            <FieldValueDisplay
              field={elem.field}
              value={elem.value}
              key={i} />
          </Box>
        ))
      }
    </React.Fragment>
  )
}