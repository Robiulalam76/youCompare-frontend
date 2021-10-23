import { TextField, Select, Box, Typography } from "@mui/material"

export const Input = (props) => {
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

export const SelectInput = (props) => {
  return (
    <Select
      native
      size="small"
      sx={{
        width: "100%",
        ".MuiOutlinedInput-input": {
          fontSize: 13,
          pt: .75, pb: 1.25
        }
      }}
      {...props}
    >
      {props.children}
    </Select>
  )
}

export const InputBox = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 1.5 }}
      {...props}>
      <label style={{ marginBottom: 4 }}>{props.label}</label>
      {props.children}
    </Box>
  )
}

export const Title = (props) =>
  <Typography {...props} style={{
    font: "normal normal 600 24px/54px Poppins"
  }} />

export const Subtitle = (props) =>
  <Typography {...props} style={{
    font: "normal normal 600 16px/54px Poppins"
  }} />

export const Paper = (props) => (
  <Box {...props}
    style={{
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: "0px 0px 63px #F0F0F0",
      borderRadius: "25px"
    }} />)
