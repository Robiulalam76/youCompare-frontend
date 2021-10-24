import {
  Box, InputAdornment, Button, Typography,
  Autocomplete, TextField,
} from '@mui/material'
import React from 'react'
import { useForm } from '../../components/customHooks/useForm'
import Calender from '../../components/Calender'

import TodayIcon from '@mui/icons-material/Today';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import Popover from '@mui/material/Popover';
import { InputBox } from './utils';
import { CustomInput as Input, textfieldStyle } from './utils'

import { State, City } from 'country-state-city';

export default function PolicyHolderDetailsForm({ handleStepChange }) {
  const [policyHolder, handleChange] = useForm({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    pincode: "",
  })
  const [dob, setDob] = React.useState("")
  const [maritalStatus, setMaritalStatus] = React.useState("")

  const [calenderElem, setCalenderElem] = React.useState(null)
  const calenderRef = React.useRef(null)

  // states are 36 states of Nigeria
  const [states, setStates] = React.useState([])
  const [cities, setCities] = React.useState([])

  const [selectedState, setSelectedState] = React.useState({ name: "", isoCode: "" })
  const [selectedCity, setSelectedCity] = React.useState("")

  React.useEffect(() => {
    const _states = State.getStatesOfCountry('NG').map(state => {
      if (state.name.slice(-5) === 'State')
        state.name = state.name.slice(0, -6)
      return { name: state.name, isoCode: state.isoCode }
    })
    setStates(_states)
  }, [])

  React.useEffect(() => {
    if (!selectedState.isoCode) return;
    const _cities = City.getCitiesOfState('NG', selectedState.isoCode)
      .map(city => city.name)

    setCities(_cities)
  }, [selectedState])

  return (
    <div>
      <InputBox label="Full Name">
        <Input
          type="text"
          name="fullName"
          value={policyHolder.fullName}
          onChange={handleChange}
          placeholder="Enter Full Name"
        />
      </InputBox>
      <InputBox label="Email ID">
        <Input
          type="email"
          name="email"
          value={policyHolder.email}
          onChange={handleChange}
          placeholder="Enter Email ID"
        />
      </InputBox>
      <InputBox label="Mobile Number">
        <TextField
          type="number"
          inputMode="tel"
          name="mobile"
          value={policyHolder.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          inputProps={{
            sx: textfieldStyle
          }}
          InputProps={{
            startAdornment:
              <InputAdornment position="start">
                <Typography variant="body2">+234</Typography>
              </InputAdornment>
          }}
        />
      </InputBox>
      {/** DATE OF BIRTH AND MARITAL STATUS */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/** Date of Birth */}
        <InputBox label="Date of Birth" style={{ width: "48%" }}>
          <Input
            type="text"
            fullWidth
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="mm/dd/yyyy"
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <TodayIcon
                    fontSize="small"
                    sx={{ cursor: "pointer" }}
                    onClick={(e) => setCalenderElem(e.currentTarget)} />
                </InputAdornment>
            }}
          />
          <Popover
            open={Boolean(calenderElem)}
            anchorEl={calenderElem}
            onClose={(e) => setCalenderElem(null)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Box>
              <Calender getDate={(e) => console.log(e)} />
            </Box>
          </Popover>
        </InputBox>

        {/* **** marital status ***** */}
        <InputBox label="Marital Status" style={{ width: "48%" }}>
          <Autocomplete
            options={['Married', 'Single', 'Diverced']}
            onChange={(e, value) => setMaritalStatus(value)}
            renderOption={(props, option) => (
              <Typography
                {...props}
                variant="body2"
                color="text.secondary">
                {option}
              </Typography>
            )}
            sx={{ mb: .75 }}
            renderInput={(params) => (
              <TextField {...params}
                placeholder="Select Gender"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }} />
            )} />
        </InputBox>
      </Box>

      {/* ******************* ADDRESS ***************** */}
      <InputBox label="Address">
        <Input
          type="text"
          name="address"
          value={policyHolder.address}
          onChange={handleChange}
          placeholder="Enter Address"
        />
      </InputBox>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* ######################## STATE ################## */}
        <InputBox label="State" style={{ width: "48%" }}>
          <Autocomplete
            options={states}
            onChange={(e, value) => setSelectedState(value)}
            getOptionLabel={option => option.name}
            renderOption={(props, option) => (
              <Typography
                {...props} variant="body2"
                color="text.secondary">
                {option.name}
              </Typography>
            )}
            renderInput={(params) => (
              <TextField {...params}
                placeholder="Select State"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }} />
            )} />
        </InputBox>

        {/* ######################## CITY ################## */}
        <InputBox label="City" style={{ width: "48%" }}>
          <Autocomplete
            options={cities}
            disableClearable
            autoHighlight
            onChange={(e, value) => setSelectedCity(value)}
            getOptionLabel={option => option}
            renderOption={(props, option) => (
              <Typography
                {...props} variant="body2"
                color="text.secondary">
                {option}
              </Typography>
            )}
            renderInput={(params) => (
              <TextField {...params}
                placeholder="Select City"
                inputProps={{
                  ...params.inputProps
                }} />
            )} />
        </InputBox>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputBox label="Pincode" style={{ marginRight: "16px", width: "50%" }}>
          <Input
            type="text"
            name="pincode"
            value={policyHolder.pincode}
            onChange={handleChange}
            placeholder="Enter Pincode"
          />
        </InputBox>
        <InputBox label="Driver's License Image" style={{ width: "50%" }}>
          <Input
            placeholder="Upload"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <FileUploadOutlinedIcon
                    fontSize="small" />
                </InputAdornment>,
            }}
          />
        </InputBox>
      </Box>
      <Button
        variant="contained"
        style={{ height: "42px" }}
        onClick={() => handleStepChange('stepUp')}
        sx={{ mt: 2 }}>Next</Button>
    </div>
  )
}