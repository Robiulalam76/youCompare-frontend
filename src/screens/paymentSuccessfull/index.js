import React from 'react'

// material ui
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Paper } from './utils'
import styles from './styles.module.css'
// components
import MinimalLayout from '../../components/Layout/MinimalLayout'
import { RedButton } from '../../components/customStyledComponents/buttons'


// Some utilities components
const Title = (props) => {
  return (
    <Typography
      {...props}
      sx={{
        ...props.sx,
        fontSize: "14px",
        fontWeight: "medium",
        textTransform: "uppercase",
        color: "text.secondary"
      }} />
  )
}

const FieldValueDisplay = ({ field, value }) => {

  return (
    <div>
      <Typography
        sx={{
          fontSize: ".9rem",
          color: "text.disabled",
          fontWeight: "normal",
          lineHeight: "25px"
        }}>
        {field}
      </Typography>

      <Typography sx={{
        fontSize: ".9rem",
        fontWeight: "normal",
        lineHeight: "27px"
      }}>
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
          <PaymentDetails
            paymentDetails={paymentDetails} />
        </Paper>

        <Paper sx={{ mt: 2 }}>
          <PolicyDetails policyDetails={policyDetails} />
        </Paper>

        <Paper sx={{ mt: 2 }}>
          <Overview overview={overview} />
        </Paper>

        <Paper sx={{ mt: 2 }}>
          <PolicyHolderDetails policyHolder={policyHolder} />
        </Paper>

      </div>
    </MinimalLayout>
  )
}

/** ******************** FIRST SECTION: PAYMENT DETAILS ******************* */

const PaymentDetails = ({ paymentDetails, smallScreen }) => {


  return (
    <React.Fragment>

      <div className={styles.flexBetween}>
        <Title>Payment Details</Title>
        <Button variant="round" color="secondary" size="small">
          Payment Successfull
        </Button>
      </div>

      <Grid container spacing={1} sx={{ mt: 1 }}>
        {
          paymentDetails.map((elem, i) => (
            <Grid item xs={6} sm={4} md={3} key={i}>
              <FieldValueDisplay
                field={elem.field}
                value={elem.value} />
            </Grid>
          ))
        }
      </Grid>
    </React.Fragment>
  )
}

/** ***************** SECOND-SECTION: POLICY DETAILS ***************************** */

const PolicyDetails = ({ policyDetails }) => {
  return (
    <React.Fragment>

      <div className={styles.flexBetween}>
        <Box></Box>
        <Box>
          <RedButton>Expires 25 Nov'22</RedButton>
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

      <Grid container spacing={1} sx={{ mt: 1 }}>
        {
          policyDetails.map((elem, i) => (
            <Grid item xs={6} sm={4} md={3} key={i}>
              <FieldValueDisplay
                field={elem.field}
                value={elem.value} />
            </Grid>
          ))
        }
      </Grid>
    </React.Fragment>
  )
}


/** ******************** THIRD SECTION: OVERVIEW ***************************** */

const Overview = ({ overview }) => {
  return (
    <React.Fragment>
      <Title>Overview</Title>
      <Grid container spacing={1} sx={{ mt: 1 }}>
        {
          overview.map((elem, i) => (
            <Grid item xs={6} sm={4} key={i}>
              <FieldValueDisplay
                field={elem.field}
                value={elem.value} />
            </Grid>
          ))
        }
      </Grid>
    </React.Fragment >
  )
}

/*********************** FOURTH SECTION: POLICY HOLDER DETAILS *************** */

const PolicyHolderDetails = ({ policyHolder }) => {
  return (
    <React.Fragment>
      <Title>Policy Holder Details</Title>
      <Grid container spacing={1} sx={{ mt: 1 }}>
        {
          policyHolder.map((elem, i) => (
            <Grid item xs={6} sm={4}
              key={i}>
              <FieldValueDisplay
                field={elem.field}
                value={elem.value} />
            </Grid>
          ))
        }
      </Grid>
    </React.Fragment>
  )
}