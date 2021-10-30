import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Autocomplete from '@mui/material/Autocomplete';
// import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Title } from '../../../../components/customStyledComponents/texts'
import CusotmSwitch from '../../../../components/customStyledComponents/customSwitch'
import { CustomCheckbox } from '../../../../components/customStyledComponents/checkbox';

import { styled } from '@mui/system';

const BorderedDiv = styled(Box)(({ theme }) => ({
  borderColor: "#eeeeee",
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "10px",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2)
}))
const TextNormal = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: ".9rem"
}))

export default function Filters() {

  const [insurers, setInsurers] = React.useState([
    { id: 1, name: "Insurer One", checked: true },
    { id: 2, name: "Insurer Two", checked: false },
    { id: 3, name: "Insurer Three", checked: true },
    { id: 4, name: "Insurer Four", checked: false },
    { id: 5, name: "Insurer Five", checked: false }
  ])

  const handleInsurers = (e, id) => {

    const updatedInsurers = insurers.map(elem => elem.id == id ? { ...elem, checked: e.target.checked } : elem)
    console.log(updatedInsurers)
    setInsurers(updatedInsurers)
  }

  return (
    <div>
      <Title>Filters</Title>

      <BorderedDiv>
        <Typography color="text.hover">Pay</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextNormal sx={{ mr: 1 }}>Monthly</TextNormal>
          <CusotmSwitch height={26} padding={2} />
          <TextNormal sx={{ ml: 1 }}>Yearly</TextNormal>
        </Box>
      </BorderedDiv>

      <BorderedDiv>
        <Typography color="text.hover">Insurer</Typography>
        <FormGroup>
          {
            insurers.map(insurer => (
              <FormControlLabel
                control={<CustomCheckbox
                  disableRipple
                  size="small"
                  onChange={(e) => handleInsurers(e, insurer.id)}
                  checked={insurer.checked}
                  key={insurer.id} />}
                sx={{ m: 0 }}
                label={<TextNormal
                  sx={{ color: insurer.checked ? "text.primary" : "text.hover" }}>
                  {insurer.name}
                </TextNormal>} />
            ))
          }
        </FormGroup>
      </BorderedDiv>

      <BorderedDiv>
        <Typography color="text.hover">Life Cover</Typography>
        <Autocomplete
          options={['N 3400', 'N 6000', 'N 9000']}
          autoSelect={true}
          renderOption={(props, option) => (
            <Typography
              {...props}
              variant="body2"
              color="text.secondary">
              {option}
            </Typography>
          )}
          sx={{ my: .75 }}
          renderInput={(params) => (
            <TextField {...params}
              size="small"
              placeholder="Select Option"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }} />
          )} />
      </BorderedDiv>

      <BorderedDiv>
        <Typography color="text.hover">Cover Till Age</Typography>
        <Autocomplete
          options={['60 Y', '50 Y', '40Y']}
          autoSelect={true}
          renderOption={(props, option) => (
            <Typography
              {...props}
              variant="body2"
              color="text.secondary">
              {option}
            </Typography>
          )}
          sx={{ my: .75 }}
          renderInput={(params) => (
            <TextField {...params}
              size="small"
              placeholder="Select Option"
              inputProps={{
                ...params.inputProps,
                sx: { fontSize: ".9rem" },
                autoComplete: 'new-password', // disable autocomplete and autofill
              }} />
          )} />
      </BorderedDiv>
    </div>
  )
}