import { TextField } from "@mui/material";

export const CustomInput = (props) =>
  <TextField
    {...props}
    size="small"
    sx={{
      '.MuiOutlinedInput-root': {
        fontSize: 14,
      },
    }}
  />

// MuiOutlinedInput - root
// MuiInputBase - root
// MuiInputBase - colorPrimary
// Mui - focused
// MuiInputBase - formControl
// MuiInputBase - sizeSmall
// MuiInputBase - adornedStart
// css - 1q6at85 - MuiInputBase - root - MuiOutlinedInput - root