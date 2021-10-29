import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography, Divider, Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import { Link } from 'react-router-dom';

import { Title, Subtitle, Paper } from './utils';

import styles from './styles.module.css'

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
  const [showDetails, setShowDetails] = React.useState(true)

  return (
    <div>

      {/* Logo */}
      <Box sx={{ display: 'flex', alignItems: "center", mb: 2 }}>
        <div className={styles.logo}></div>
        <Box sx={{ ml: 1 }}>
          <Typography variant="h4">Insurer Company Name</Typography>
          <Typography variant="subtitle2" >Subtitle Text</Typography>
        </Box>
      </Box>

      {/* Inurance Type and IDV */}
      <Box className={styles.flexBetween}>
        <Typography variant="body1" sx={{ lineHeight: "54px" }}>
          Comprehensive
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: "54px" }}>
          <span className={styles.idv}>IDV</span>
          {" " + idv}
        </Typography>
      </Box>
      <Divider />
      <Box className={styles.flexBetween}>
        <Typography sx={{ lineHeight: "54px" }}>
          Plan features + 2 addons
        </Typography>
        <KeyboardArrowDownIcon
          style={{
            transform: showDetails ? "rotate(180deg)" : "rotate(0deg)",
            cursor: "pointer"
          }}
          onClick={() => setShowDetails(!showDetails)} />
      </Box>
      {
        showDetails ?
          <>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: "30px" }}>
                Important Plan Benifites
              </Typography>
              {
                ['Self Inspection', 'Self Video Claim', 'Zero Deprecation Claim']
                  .map((elem, i) => <ItemDisplay title={elem} key={i} />)
              }
            </Box>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600, mt: 1, lineHeight: "30px" }}>
                Addons Included
              </Typography>
              {
                ['Zero Depreciation', 'Engine Protection Cover']
                  .map((elem, i) => <AddonsDisplay title={elem} key={i} />)
              }
            </Box>
            <Divider sx={{ my: 2 }} />
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
      <PremiumDisplay title="Vat" value="350" />
      <Divider sx={{ my: 1 }} />
      <PremiumDisplay title="Total" value="4500" />
      {
        currentStep > 1 ?
          <Link to="/auto/payment-success">
            <Button
              variant="contained" fullWidth>
              Buy Now
            </Button>
          </Link> : null
      }
    </div>
  )
}

const AddonsDisplay = ({ title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", pt: .5 }}>
      <CircleOutlinedIcon sx={{ fontSize: 12, mr: .5, color: "#1482D2" }} />
      <Typography
        variant="body2" sx={{ fontWeight: "normal", lineHeight: "20px" }}
      >{title}</Typography>
    </Box>
  )
}

const ItemDisplay = ({ title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", pt: .5 }}>
      <CircleOutlinedIcon sx={{ fontSize: 12, mr: .5, color: "#1482D2" }} />
      <Typography
        variant="body2" sx={{ fontWeight: "normal", lineHeight: "20px" }}
      >{title}</Typography>
    </Box>
  )
}
ItemDisplay.propTypes = {
  title: PropTypes.string.isRequired
}

const PremiumDisplay = ({ title, value }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", width: 1 }}>
      <Typography
        variant="body2"
        sx={{ fontWeight: "medium", color: "text.secondary" }}
        gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" gutterBottom>&#8358; {value}</Typography>
    </Box>
  )
}