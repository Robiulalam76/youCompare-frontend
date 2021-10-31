import { TextField, Select, Box, Typography, InputBase } from "@mui/material"
import { styled } from "@mui/system"

export const CustomInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: ".75rem 1rem",
    fontSize: ".85rem",
    color: theme.palette.text.primary,
    fontWeight: "normal",
    fontFamily: "Poppins",
    lineHeight: "25px",
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.text.secondary,
    },
    '&.Mui-focused fieldset': {
      borderWidth: "1px",
      borderColor: theme.palette.primary.main
    },
  },
}))

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
