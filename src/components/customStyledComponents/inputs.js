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