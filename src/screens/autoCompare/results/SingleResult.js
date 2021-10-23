import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Typography, Box, Grid, Button, Divider } from '@mui/material'
import { styled } from '@mui/material/styles'
import { CustomButton, UnstyledButton } from '../../../components/customStyledComponents/buttons'
import { SubNavItem } from '../../../components/customStyledComponents/subNavItem'

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { premiumCalculator } from '../../../helpers/premiumCalculator'

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 4,
}))

const Text = (props) =>
  <Typography
    {...props}
    variant="body2">
  </Typography>

export default function SingleResult({ autoquote }) {
  const [showDetails, setShowDetails] = React.useState(false)

  const toggleDetailsShow = () => {
    setShowDetails(!showDetails)
  }
  return (
    <Item sx={{ boxShadow: 3, mt: 2 }}>
      {
        autoquote ?
          <Quote
            autoquote={autoquote}
            toggleDetailsShow={toggleDetailsShow} /> : null
      }
      {
        showDetails ? <PolicyDetails autoquote={autoquote} /> : null
      }
    </Item>
  )
}


/************************************************ */
/** ************* QUOTE SECTION ***************** */
/************************************************ */

const Quote = ({ autoquote, toggleDetailsShow }) => {
  const { premiums, discounts, vatInParcentage } = autoquote
  const { netPremium } = premiumCalculator(premiums, discounts, vatInParcentage)

  return (
    <Grid container xs={12} spacing={1}>
      <Grid item xs={3}>
        <Typography variant="h6">Company Logo</Typography>
      </Grid>
      <Grid item xs={2} justify="center">
        <Text>IDV</Text>
        <Text><strong>{autoquote.idv}</strong></Text>
      </Grid>
      <Grid item xs={3}>
        <Text>Addons</Text>
        <Text><strong>Zero Dep - unavailable</strong></Text>
      </Grid>
      <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{ textTransform: "none" }}
          variant="text"
          onClick={toggleDetailsShow}>
          Policy Details
        </Button>
        <UnstyledButton variant="contained">{netPremium}</UnstyledButton>
      </Grid>
    </Grid>
  )
}

/**************************************************** */
/****************  POLICY DETAILS ******************* */
/**************************************************** */

const PolicyDetails = ({ autoquote }) => {
  const [navItem, setNavitem] = React.useState("coverage")

  return (
    <>
      {/* Details Section : Navigation */}
      <Box sx={{ display: "flex", pt: 4 }}>
        <Box>
          <SubNavItem
            onClick={() => setNavitem("coverage")}
            title="Coverage"
            selected={navItem === 'coverage'} />
        </Box>
        <Box>
          <SubNavItem
            onClick={() => setNavitem('premium')}
            title="Premium Breakup"
            selected={navItem === 'premium'} />
        </Box>
      </Box>
      {
        navItem === 'coverage' ?
          <Coverage coverages={autoquote.coverages} /> :
          <PremuimBreakup
            premiums={autoquote.premiums}
            discounts={autoquote.discounts}
          />
      }
      <br />
      <Button
        href="/auto/buynow"
        size="small"
        variant="contained"
      >
        Proceed
      </Button>
    </>
  )
}

// Display Coverages
const Coverage = ({ coverages }) => {
  return (
    <Box sx={{ display: "flex", pt: 1 }}>
      {Object.keys(coverages).map((keyName, i) => (
        <Box sx={{ pr: 4 }} key={i}>
          <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
            {keyName === 'covered' ? "What's Covered" : "What's not Covered"}
          </Typography>
          {
            coverages[keyName].map((item, i) => (
              <ItemDisplay title={item} key={i} />
            ))
          }
        </Box>
      ))}
    </Box>
  )
}
const ItemDisplay = ({ title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", pt: .5 }}>
      <CircleOutlinedIcon sx={{ fontSize: 12, mr: .5 }} />
      <Typography variant="body2">{title}</Typography>
    </Box>
  )
}
ItemDisplay.propTypes = {
  title: PropTypes.string.isRequired
}



// Display Premiums
const PremuimBreakup = ({ premiums, discounts }) => {
  const vatInParcentage = 15;
  const { packagePremium, vat, netPremium } = premiumCalculator(premiums, discounts, vatInParcentage)
  return (
    <>
      {/* Selected Car Model And Year */}
      <Box sx={{ display: "flex", alignItems: "center", }}>
        <Typography variant="h6">Brand Name</Typography>
        <FiberManualRecordIcon
          sx={{ fontSize: 10, m: 1 }}
        />
        <Typography variant="h6">Model</Typography>
        <FiberManualRecordIcon
          sx={{ fontSize: 10, m: 1 }}
        />
        <Typography variant="h6">2021</Typography>
      </Box>

      {/* Basic Premiums */}
      <Typography variant="body1" gutterBottom><u>Base Premiums</u></Typography>
      {
        premiums.map((premium, i) =>
          <PremiumDisplay title={premium.title} value={premium.value} key={i} />)
      }

      {/* Discounts */}
      <Typography variant="body1" gutterBottom><u>Discounts</u></Typography>
      {
        discounts.map((discount, i) =>
          <PremiumDisplay title={discount.title} value={discount.value} />)
      }

      <Typography variant="body1" gutterBottom><u>Premium Details</u></Typography>
      <PremiumDisplay title="Package Premium" value={packagePremium} />
      <PremiumDisplay title={`Vat ${vatInParcentage}%`} value={vat} />
      {/* Net Premium */}
      <Divider />

      <Box sx={{ display: "flex", justifyContent: "space-between", width: 2 / 4 }}>
        <Typography variant="body1" gutterBottom><strong>Net Premium</strong></Typography>
        <Typography variant="body1" gutterBottom><strong>&#8358; {netPremium}</strong></Typography>
      </Box>
    </>
  )
}

const PremiumDisplay = ({ title, value }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", width: 2 / 4 }}>
      <Typography variant="body2" gutterBottom>{title}</Typography>
      <Typography variant="body2" gutterBottom>&#8358; {value}</Typography>
    </Box>
  )
}