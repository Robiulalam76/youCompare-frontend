import React from 'react'

// mui components
import {
  Box, InputAdornment, Typography, TextField,
} from '@mui/material'
import TodayIcon from '@mui/icons-material/Today';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Popover from '@mui/material/Popover';

// date picker utils from mui
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

// customized components
import { textfieldStyle } from './utils'
import InputBox from '../../../components/customStyledComponents/InputBox'
import { useForm } from '../../../components/customHooks/useForm'
import Calender from '../../../components/Calender'
import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete
} from '../../../components/customStyledComponents/inputs'

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

  const [date, setDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (d) => {
    setDate(d);
  };

  React.useEffect(() => {
    const _states = State.getStatesOfCountry('NG').map(state => {
      if (state.name.slice(-5) === 'State')
        state.name = state.name.slice(0, -6)
      return { name: state.name, isoCode: state.isoCode }
    })
    setStates(_states)
  }, [])

  React.useEffect(() => {
    if (!selectedState) return;
    const _cities = City.getCitiesOfState('NG', selectedState.isoCode)
      .map(city => city.name)

    setCities(_cities)
  }, [selectedState])

  return (
    <div>
      <InputBox label="Full Name">
        <Input
          fullWidth
          type="text"
          name="fullName"
          value={policyHolder.fullName}
          onChange={handleChange}
          placeholder="Enter Full Name"
        />
      </InputBox>
      <InputBox label="Email ID">
        <Input
          fullWidth
          type="email"
          name="email"
          value={policyHolder.email}
          onChange={handleChange}
          placeholder="Enter Email ID"
        />
      </InputBox>
      <InputBox label="Mobile Number">
        <Input
          fullWidth
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat="MM/dd/yyyy"
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => (
                <Input {...params}
                  placeholder="Select Gender"
                  inputProps={{
                    ...params.inputProps,
                    style: { padding: ".75rem 1rem" },
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }} />
              )}
            />
          </LocalizationProvider>
        </InputBox>

        {/* **** marital status ***** */}
        <InputBox label="Marital Status" style={{ width: "48%", paddingTop: "4px" }}>
          <Autocomplete
            fullWidth
            options={['Married', 'Single', 'Divorced']}
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
              <Input {...params}
                placeholder="Select Gender"
                inputProps={{
                  ...params.inputProps,
                  style: { padding: ".75rem 1rem" },
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }} />
            )} />
        </InputBox>
      </Box>

      {/* ******************* ADDRESS ***************** */}
      <InputBox label="Address">
        <Input
          fullWidth
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
            fullWidth
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
              <Input {...params}
                placeholder="Select State"
                inputProps={{
                  ...params.inputProps,
                  style: { padding: ".75rem 1rem" },
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }} />
            )} />
        </InputBox>

        {/* ######################## CITY ################## */}
        <InputBox label="City" style={{ width: "48%" }}>
          <Autocomplete
            fullWidth
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
              <Input {...params}
                placeholder="Select City"
                inputProps={{
                  ...params.inputProps,
                  style: { padding: ".75rem 1rem" },
                  autoComplete: 'new-password',
                }} />
            )} />
        </InputBox>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputBox label="Pincode" style={{ marginRight: "16px", width: "50%" }}>
          <Input
            fullWidth
            type="text"
            name="pincode"
            value={policyHolder.pincode}
            onChange={handleChange}
            placeholder="Enter Pincode"
          />
        </InputBox>
        <InputBox label="Driver's License Image" style={{ width: "50%" }}>
          <Input
            fullWidth
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
    </div>
  )
}