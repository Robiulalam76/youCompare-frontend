import { TextField, Select, Box, Typography, InputBase } from "@mui/material"

export const CustomInput = (props) => {
  return (
    <TextField
      {...props}
      className="custom-input"
    />
  )
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
        sx={{
          color: "text.secondary",
          lineHeight: "25px",
          mb: .5
        }}
      >
        {props.label}
      </Typography>
      {props.children}
    </Box>
  )
}

export const Title = (props) =>
  <Typography {...props}
    variant="h3"
    style={{ lineHeight: "54px" }}
    gutterBottom />

export const Subtitle = (props) =>
  <Typography {...props}
    variant="h5"
    style={{
      lineHeight: "54px"
    }} />

export const Paper = (props) => (
  <Box {...props}
    style={{
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: "0px 0px 63px #F0F0F0",
      borderRadius: "25px"
    }} />)