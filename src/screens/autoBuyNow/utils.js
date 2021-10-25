import { TextField, Select, Box, Typography, InputBase } from "@mui/material"

export const CustomInput = (props) => {
  return (
    <TextField
      {...props}
      sx={{ mb: 1 }}
      inputProps={{
        sx: {
          // fontSize: 14,
          // py: 1.5,
          // px: 2,
          color: "text.primary",
          fontWeight: "normal",
          fontFamily: "Poppins",
          lineHeight: "25px",
          "&::placeholder": {
            color: "text.secondary"
          }
        }
      }}
    />
  )
}

export const textfieldStyle = {
  // fontSize: 14,
  // py: 1.5,
  color: "text.primary",
  fontWeight: 400,
  fontFamily: "Poppins",
  lineHeight: "25px",
  "&::placeholder": {
    color: "text.secondary"
  }
}

export const SelectInput = (props) => {
  return (
    <Select
      native
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
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          lineHeight: "25px",
          fontWeight: "medium",
          mb: .5
        }}
      >
        {props.label}
      </Typography>
      {props.children}
    </Box>
  )
}

export const Paper = (props) => (
  <Box {...props}
    style={{
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: "0px 0px 63px #F0F0F0",
      borderRadius: "25px",
      padding: "1rem 2.5rem 1rem 2.5rem",
      width: "inherit"
    }} />)
