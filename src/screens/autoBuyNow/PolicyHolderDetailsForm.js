import {
  Box, InputAdornment, Button, Typography,
  Autocomplete, TextField, InputBase, IconButton
} from '@mui/material'
import React from 'react'
import { useForm } from '../../components/customHooks/useForm'
import Calender from '../../components/Calender'

import TodayIcon from '@mui/icons-material/Today';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Popover from '@mui/material/Popover';
import { SelectInput, InputBox } from './utils';
import { CustomInput as Input } from './utils'

import { Country, State, City } from 'country-state-city';
import { ArrowDownward } from '@mui/icons-material';

import { State as StateAutoComplete } from './State';

const inputStyle = {
  outline: "none",
  height: "52px",
  boxShadow: "0px 4px 8px #2c27380a",
  border: "1px solid #dbe2ea",
  borderRadius: "6px",
  padding: "0 16px",
  fontSize: "16px",
  lineHeight: "25px"
}

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
      <br />
      <InputBase placeholder="My Text Field" />
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
          inputmode="tel"
          name="mobile"
          value={policyHolder.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          InputProps={{
            startAdornment:
              <InputAdornment position="start">
                <Typography sx={{ fontSize: 13 }}> +234  </Typography>
              </InputAdornment>
          }}
        />
      </InputBox>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/** Date of Birth */}
        <InputBox label="Date of Birth" style={{ marginRight: "16px", width: "50%" }}>
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

        {/* ################  MARITAL STATUS ##################### */}
        <InputBox label="Marital Status" style={{ width: "50%" }}>
          <Autocomplete
            options={['Married', 'Single', 'Diverced']}
            disableClearable
            onChange={(e, value) => setMaritalStatus(value)}
            renderOption={(props, option) => (
              <Typography
                {...props}
                variant="body2"
                color="text.secondary">
                {option}
              </Typography>
            )}
            renderInput={(params) => (
              <TextField {...params}
                placeholder="Select Gender"
                className="custom-input"
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

      <Box sx={{ display: "flex", alignItems: "center" }}>

        {/* ######################## STATE ################## */}
        <InputBox label="State" style={{ width: "50%", marginRight: "16px" }}>
          <Autocomplete
            options={states}
            disableClearable
            onChange={(e, value) => setSelectedState(value)}
            getOptionLabel={option => option.name}
            renderOption={(props, option) => (
              <Typography
                {...props}>
                {option.name}
              </Typography>
            )}
            renderInput={(params) => (
              <TextField {...params}
                placeholder="Select State"
                className="custom-input"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }} />
            )} />
        </InputBox>

        {/* ######################## CITY ################## */}
        <InputBox label="City" style={{ width: "50%" }}>
          <Autocomplete
            options={cities}
            disableClearable
            autoHighlight
            onChange={(e, value) => setSelectedCity(value)}
            getOptionLabel={option => option}
            renderOption={(props, option) => (
              <Typography
                {...props}>
                {option}
              </Typography>
            )}
            renderInput={(params) => (
              <TextField {...params}
                placeholder="Select City"
                className="custom-input"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
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
        onClick={() => handleStepChange('stepUp')}
        sx={{ mt: 2 }}>Next</Button>
    </div>
  )
}