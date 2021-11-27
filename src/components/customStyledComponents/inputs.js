import { Autocomplete, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const inputPropStyle = { padding: ".75rem 1rem" }

export const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    ...inputPropStyle,
    fontSize: ".85rem",
    color: theme.palette.text.primary,
    fontWeight: "normal",
    fontFamily: "Poppins",
    lineHeight: "25px",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.text.secondary,
    },
    "&.Mui-focused fieldset": {
      borderWidth: "1px",
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const CustomTextFieldStepper = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: ".5rem 1rem",
    fontSize: ".85rem",
    color: theme.palette.text.primary,
    fontWeight: "normal",
    fontFamily: "Poppins",
    lineHeight: "25px",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.text.secondary,
    },
    "&.Mui-focused fieldset": {
      borderWidth: "1px",
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const CustomAutocomplete = styled(Autocomplete)(() => ({
  "& .MuiAutocomplete-inputRoot": {
    padding: "0px",
  },
}));
