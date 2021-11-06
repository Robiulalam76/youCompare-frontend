import React from 'react'
import { Stack, Box, Typography, InputAdornment, Button, Grid, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// custom styled components
import { Title } from '../../../components/customStyledComponents/texts'
import { CustomCheckbox } from '../../../components/customStyledComponents/checkbox';

const Item = styled(Box)(({ theme }) => ({
  border: `1px solid #eeeeee`,
  padding: theme.spacing(1.5),
  borderRadius: 4,
}))


const Text = (props) =>
  <Typography
    {...props}
    color="text.secondary"
    variant="body2">
  </Typography>

const DotIcon = () =>
  <FiberManualRecordIcon
    sx={{ fontSize: 8, m: .5 }}
  />

const Filter = () => {
  const [car, setCar] = React.useState({
    brand: "Honda", model: "190", year: 2021
  })
  const [idvRange, setIdvrange] = React.useState("Recommended")
  const [typeOfInsurance, setTypeOfInsurance] = React.useState("Comprehensive")
  const [addons, setAddons] = React.useState([
    { id: 1, title: "Zero Depreciation", checked: false },
    { id: 2, title: "24/7 Roadside Assistance", checked: false },
    { id: 3, title: "Engine Protection Cover", checked: false },
    { id: 4, title: "Key and Lock Replacement", checked: false },
    { id: 5, title: "Daily Allowance", checked: false }
  ])
  const handleAddonChange = (id) => {
    setAddons([
      ...addons.map(addon => {
        if (addon.id === id) {
          return {
            ...addon, checked: !addon.checked
          }
        }
        return addon
      })
    ])
  }
  return (
    <div>
      <Title>Filters</Title>
      <Stack spacing={2}>

        {/** Car Model, Year */}
        <Item>
          <Text sx={{ mb: .5 }}>Model</Text>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            color: "text.secondary"
          }}>
            <Text>{car.brand}</Text>
            <DotIcon />
            <Text>{car.model}</Text>
            <DotIcon />
            <Text>{car.year}</Text>
          </Box>
        </Item>

        {/** IDV and Value */}
        <Item>
          <Text sx={{ mb: 1 }}>IDV</Text>

          {['Recommended', 'Lowest', 'Maximum', 'Choose Your'].map((val, i) => (
            <Button
              key={i}
              value={val}
              variant="round"
              size="small"
              color={idvRange === val ? "primary" : "text"}
              sx={{ fontSize: "12px", py: .5, mr: 1, mb: 1 }}
              onClick={(e) => setIdvrange(e.target.value)}>
              {val}
            </Button>
          ))}


          <Text sx={{ mt: 2, mb: 1 }}>Value</Text>
          <TextField
            type="number"
            placeholder="E.g. 85000"
            fullWidth
            size="small"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <Typography variant="body2">
                    <strong>&#8358;</strong>
                  </Typography>
                </InputAdornment>
            }}
          />
        </Item>

        {/* Type of Insurance */}
        <Item>
          <Text sx={{ mb: 1 }}>Type of Insurance</Text>
          {['Comprehensive', 'Third Party'].map((val, i) => (
            <Button
              value={val}
              variant="round"
              size="small"
              color={typeOfInsurance === val ? "primary" : "text"}
              sx={{ fontSize: "12px", py: .5, mr: 1 }}
              onClick={(e) => setTypeOfInsurance(e.target.value)}>
              {val}
            </Button>
          ))}
        </Item>
        {/* Addons Selection */}
        <Item>
          <Text>Select Addons & Accessories</Text>
          {
            addons.map((addon, i) => (
              <Box key={i}
                sx={{ display: "flex", alignItems: "center" }}>
                <CustomCheckbox
                  size="small"
                  checked={addon.checked}
                  onChange={() => handleAddonChange(addon.id)} />
                <Text sx={{ color: "text.hover", fontWeight: "normal" }}>{addon.title}</Text>
              </Box>
            ))
          }
        </Item>
      </Stack>
    </div>
  )
}

export default Filter