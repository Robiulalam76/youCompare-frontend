import React from 'react'
import { Stack, Box, Typography, InputAdornment, InputLabel, Checkbox } from '@mui/material'
import { styled } from '@mui/material/styles'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// custom styled components
import { CustomButton } from '../../components/customStyledComponents/buttons';
import { CustomInput } from '../../components/customStyledComponents/inputs';
import { CustomCheckbox } from '../../components/customStyledComponents/checkbox';

const Item = styled(Box)(({ theme }) => ({
  border: `1px solid lightgray`,
  padding: theme.spacing(1.5),
  borderRadius: 4,
}))

const Text = (props) =>
  <Typography
    {...props}
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
    <>
      <Typography variant="h6">Filters</Typography>
      <Stack spacing={2}>

        {/** Car Model, Year */}
        <Item>
          <Text>Model</Text>
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
          <Text>IDV</Text>
          {['Recommended', 'Lowest', 'Maximum', 'Choose Your'].map((val, i) => (
            <CustomButton
              value={val}
              variant={idvRange === val ? "contained" : "outlined"}
              onClick={(e) => setIdvrange(e.target.value)}>
              {val}
            </CustomButton>
          ))}

          <Text sx={{ mt: 1.5 }}>Value</Text>
          <CustomInput
            type="number"
            placeholder="E.g. 85000"
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
          <Text>Type of Insurance</Text>
          {['Comprehensive', 'Third Party'].map((val, i) => (
            <CustomButton
              key={i}
              value={val}
              variant={typeOfInsurance === val ? "contained" : "outlined"}
              onClick={(e) => setTypeOfInsurance(e.target.value)}>
              {val}
            </CustomButton>
          ))}
        </Item>
        {/* Addons Selection */}
        <Item>
          <Text>Select Addons & Accessories</Text>
          {
            addons.map((addon, i) => (
              <Box key={addon.id}
                sx={{ display: "flex", alignItems: "center" }}>
                <CustomCheckbox
                  size="small"
                  checked={addon.checked}
                  onChange={() => handleAddonChange(addon.id)} />
                <Text sx={{ color: "text.secondary" }}>{addon.title}</Text>
              </Box>
            ))
          }
        </Item>
      </Stack>
    </>
  )
}

export default Filter