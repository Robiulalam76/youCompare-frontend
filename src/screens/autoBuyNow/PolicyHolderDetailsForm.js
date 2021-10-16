import { TextField, Box, InputAdornment } from '@mui/material'
import React from 'react'
import { useForm } from '../../components/customHooks/useForm'
import Calender from '../../components/Calender'
import TodayIcon from '@mui/icons-material/Today';

import Popover from '@mui/material/Popover';

const Input = (props) => {
  return (
    <TextField
      size="small"
      sx={{
        ".MuiOutlinedInput-input": {
          fontSize: 13,
          py: 1
        }
      }}
      {...props}
    />
  )
}

export default function PolicyHolderDetailsForm() {
  const [policyHolder, handleChange] = useForm({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    address: "",
    state: "",
    city: ""
  })

  const [calenderElem, setCalenderElem] = React.useState(null)
  const calenderRef = React.useRef(null)

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
        <label style={{ marginBottom: 4 }}>Full Name</label>
        <Input
          type="text"
          name="fullName"
          value={policyHolder.fullName}
          onChange={handleChange}
          placeholder="Enter Full Name"
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 1.5 }}>
        <label style={{ marginBottom: 4 }}>Email ID</label>
        <Input
          type="email"
          name="email"
          value={policyHolder.email}
          onChange={handleChange}
          placeholder="Enter Email ID"
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 1.5 }}>
        <label style={{ marginBottom: 4 }}>Mobile</label>
        <Input
          type="text"
          name="mobile"
          value={policyHolder.mobile}
          onChange={handleChange}
          placeholder="Enter Mobile Number"
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        {/** Date of Birth */}
        <Box sx={{ display: "flex", flexDirection: "column", mt: 1.5, mr: 1 }}>
          <label style={{ marginBottom: 4 }}>Date of Birth</label>
          <Input
            type="text"
            name="dob"
            value={policyHolder.dob}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <TodayIcon 
                    fontSize="small" 
                    sx={{ cursor: "pointer" }}
                    onClick={(e) => setCalenderElem(e.currentTarget)} />
                </InputAdornment>,
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
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", mt: 1.5 }}>
          <label style={{ marginBottom: 4 }}>Mobile</label>
          <Input
            type="text"
            name="mobile"
            value={policyHolder.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
          />
        </Box>
      </Box>
    </div>
  )
}