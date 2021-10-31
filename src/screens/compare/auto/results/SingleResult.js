import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Typography, Box, Grid, Button, Divider, ButtonBase } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles'

import { CustomButton, UnstyledButton } from '../../../../components/customStyledComponents/buttons'
import { SubNavItem } from '../../../../components/customStyledComponents/subNavItem'

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { premiumCalculator } from '../../../../helpers/premiumCalculator'

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "8px",
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 63px #F0F0F0"
}))

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.only('xs')]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}))

const GrayText = (props) =>
  <Typography
    {...props}
    color="text.secondary"
    style={{ fontWeight: "medium" }}
    variant="body2">
  </Typography>

const Text = (props) =>
  <Typography
    {...props}
    variant="body1">
  </Typography>

const LargeText = (props) =>
  <Typography
    {...props}
    style={{
      fontSize: "20px",
      fontWeight: "normal",
    }}
  />

const PremiumTitle = (props) =>
  <Typography {...props}
    color="text.secondary"
    variant="body1"
    gutterBottom
    sx={{
      fontWeight: "medium",
      textTransform: "uppercase",
      pt: 1.5
    }} />

export default function SingleResult({ autoquote }) {
  const [showDetails, setShowDetails] = React.useState(false)

  const toggleDetailsShow = () => {
    setShowDetails(!showDetails)
  }
  return (
    <Item sx={{ mt: 3 }}>
      {
        autoquote ?
          <Quote
            autoquote={autoquote}
            toggleDetailsShow={toggleDetailsShow}
            showDetails={showDetails} /> : null
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

const Quote = ({ autoquote, toggleDetailsShow, showDetails }) => {
  const { premiums, discounts, vatInParcentage } = autoquote
  const { netPremium } = premiumCalculator(premiums, discounts, vatInParcentage)

  return (
    <Grid container spacing={1}>

      <StyledGrid item xs={12} sm={6} md={3}>
        <Typography variant="h6">Company Logo</Typography>
      </StyledGrid>

      <StyledGrid item xs={12} sm={6} md={3}>
        <GrayText>IDV</GrayText>
        <Text>{autoquote.idv}</Text>
      </StyledGrid>

      <StyledGrid item xs={12} sm={6} md={3}>
        <GrayText>Addons</GrayText>
        <Text>Zero Dep - unavailable</Text>
      </StyledGrid>

      <StyledGrid item xs={12} sm={6} md={3}>
        <ButtonBase
          disableRipple
          sx={{ mr: 1, py: .25, color: "primary.main" }}
          onClick={toggleDetailsShow}>
          <ArrowDownwardIcon
            style={{
              padding: "4px",
              transform: showDetails ? "rotate(180deg)" : "rotate(0deg"
            }} />
          Policy Details
        </ButtonBase>
        <UnstyledButton variant="contained">{netPremium}</UnstyledButton>
      </StyledGrid>
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
        variant="contained"
      >
        Proceed
      </Button>
    </>
  )
}

// Display Coverages

const CoverageBox = styled('div')(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  [theme.breakpoints.only('xs')]: {
    flexDirection: "column"
  }
}))

const Coverage = ({ coverages }) => {

  return (
    <CoverageBox>
      {Object.keys(coverages).map((keyName, i) => (
        <Box sx={{ pr: 4, py: 1 }} key={i}>
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ textTransform: "uppercase", lineHeight: "25px" }}>
            {keyName === 'covered' ? "What's Covered" : "What's not Covered"}
          </Typography>
          {
            coverages[keyName].map((item, i) => (
              <ItemDisplay title={item} key={i} />
            ))
          }
        </Box>
      ))}
    </CoverageBox>
  )
}

// helper to display item
const ItemDisplay = ({ title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", pt: .5 }}>
      <CircleOutlinedIcon sx={{ fontSize: 12, mr: .5, color: "primary.main" }} />
      <Typography variant="body2" sx={{ fontWeight: "normal", lineHeight: "27px" }}>
        {title}
      </Typography>
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
      <Grid container>
        <Grid item xs={12} sm={8} md={6}>

          {/* Selected Car Model And Year */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <LargeText>Brand Name</LargeText>
            <FiberManualRecordIcon
              sx={{ fontSize: 10, m: 1 }}
            />
            <LargeText>Model</LargeText>
            <FiberManualRecordIcon
              sx={{ fontSize: 10, m: 1 }}
            />
            <LargeText>2021</LargeText>
          </div>

          {/* Basic Premiums */}
          <Box>
            <PremiumTitle>Base premium</PremiumTitle>
            {
              premiums.map((premium, i) =>
                <PremiumDisplay title={premium.title} value={premium.value} key={i} />)
            }

            {/* Discounts */}
            <PremiumTitle>Discounts</PremiumTitle>
            {
              discounts.map((discount, i) =>
                <PremiumDisplay title={discount.title} value={discount.value} />)
            }

            <PremiumTitle>Premium Details</PremiumTitle>
            <PremiumDisplay title="Package Premium" value={packagePremium} />
            <PremiumDisplay title={`Vat ${vatInParcentage}%`} value={vat} />
          </Box>
          {/* Net Premium */}
          <Divider />

          <Box sx={{ display: "flex", justifyContent: "space-between", width: 1 }}>
            <Typography variant="body1" gutterBottom><strong>Net Premium</strong></Typography>
            <Typography variant="body1" gutterBottom><strong>&#8358; {netPremium}</strong></Typography>
          </Box>

        </Grid>
      </Grid>
    </>
  )
}

const PremiumDisplay = ({ title, value }) => {
  const fontStyle = { lineHeight: "27px", fontWeight: "normal" }
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", width: 1 }}>
      <Typography variant="body2" gutterBottom style={fontStyle}>{title}</Typography>
      <Typography variant="body2" gutterBottom style={fontStyle}>&#8358; {value}</Typography>
    </Box>
  )
}