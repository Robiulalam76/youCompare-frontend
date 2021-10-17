import { TextField, Box, InputAdornment, Select, Button, Typography } from '@mui/material'
import React from 'react'
import { useForm } from '../../components/customHooks/useForm'
import Calender from '../../components/Calender'

import TodayIcon from '@mui/icons-material/Today';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import Popover from '@mui/material/Popover';

import { SelectInput, InputBox, Input } from './utils';

export default function PolicyHolderDetailsForm({ handleStepChange }) {
  const [policyHolder, handleChange] = useForm({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    maritalStatus: ""
  })
  const [dob, setDob] = React.useState("")

  console.log(policyHolder)

  const [calenderElem, setCalenderElem] = React.useState(null)
  const calenderRef = React.useRef(null)

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
        <Input
          type="number"
          name="mobile"
          value={policyHolder.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          InputProps={{
            startAdornment:
              <InputAdornment>
                <Typography sx={{ fontSize: 13, pr: 1}}> +234  </Typography>
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

        <InputBox label="Marital Status" style={{ width: "50%" }}>
          <SelectInput
            name="maritalStatus"
            value={policyHolder.maritalStatus}
            onChange={handleChange}
          >
            {['Select Option', 'Married', 'Single', 'Divorced'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>
        </InputBox>
      </Box>
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
        <InputBox label="State" style={{ width: "50%", marginRight: "16px" }}>
          <SelectInput
            name="state"
            value={policyHolder.state}
            onChange={handleChange}
          >
            {['Select Option', 'Bangladesh', 'India', 'Pakistan', 'Nigeria'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>
        </InputBox>

        <InputBox label="City" style={{ width: "50%" }}>
          <SelectInput
            name="city"
            value={policyHolder.city}
            onChange={handleChange}
          >
            {['Dhaka', 'Rajshahi', 'Khulna', 'Sylhet'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>
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