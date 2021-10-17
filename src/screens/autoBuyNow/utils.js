import { TextField, Select, Box } from "@mui/material"

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