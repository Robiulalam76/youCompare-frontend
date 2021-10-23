import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography, Divider, Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import { Title, Subtitle, Paper } from './utils';

export default function PlanDetails({ currentStep }) {
  const idv = 5000;
  const discounts = [
    { id: 1, title: 'No Claim Bonus', value: 240 },
    { id: 2, title: 'Other Discounts', value: 900 }
  ]
  const premiums = [
    {
      id: 1,
      title: "Basic Own Damage Premium",
      value: 1200
    },
    {
      id: 2,
      title: "Third Party Premium",
      value: 2000
    }
  ]
  const [showDetails, setShowDetails] = React.useState(false)

  return (
    <Paper>

      {/* Logo */}
      <Box>
        <Typography variant="h5">Company Logo</Typography>
      </Box>

      {/* Inurance Type and IDV */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Comprehensive</Typography>
        <Typography>IDV &#8358; {idv}</Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Plan features + 2 addons</Typography>
        <KeyboardArrowDownIcon
          style={{
            transform: showDetails ? "rotate(180deg)" : "rotate(0deg)",
            cursor: "pointer"
          }}
          onClick={() => setShowDetails(!showDetails)} />
      </Box>
      <br />
      {
        showDetails ?
          <>
            <Box>
              <Typography><strong>Important Plan Benifites</strong></Typography>
              {
                ['Self Inspection', 'Self Video Claim', 'Zero Deprecation Claim']
                  .map((elem, i) => <ItemDisplay title={elem} key={i} />)
              }
            </Box>
            <Box>
              <Typography><strong>Addons Included</strong></Typography>
              {
                ['Zero Depreciation', 'Engine Protection Cover']
                  .map((elem, i) => <Typography variant="body2" key={i}>{elem}</Typography>)
              }
            </Box>
            <Divider />
            <br />
          </> : null
      }
      {
        premiums.map((premium, i) =>
          <PremiumDisplay
            title={premium.title}
            value={premium.value}
            key={i} />)
      }
      <br />
      {
        discounts.map((discount, i) =>
          <PremiumDisplay
            title={discount.title}
            value={discount.value}
            key={discount.title} />)
      }
      <br />
      <PremiumDisplay title="Vat" value="350" />
      {
        currentStep > 1 ?
          <Button variant="contained" fullWidth>
            Buy Now
          </Button> : null
      }
    </Paper>
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

const PremiumDisplay = ({ title, value }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", width: 1 }}>
      <Typography variant="body2" gutterBottom>{title}</Typography>
      <Typography variant="body2" gutterBottom>&#8358; {value}</Typography>
    </Box>
  )
}