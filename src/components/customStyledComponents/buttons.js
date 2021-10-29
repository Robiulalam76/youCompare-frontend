import { Button } from "@mui/material";

export const CustomButton = (props) =>
  <Button
    {...props}
    disableElevation={true}
    disableRipple={true}
    disableFocusRipple={true}
    disableTouchRipple={true}
    size="small"
    sx={{
      borderRadius: 15,
      textTransform: "none",
      px: 1.5,
      py: .25,
      marginTop: 1.5,
      marginRight: 1.5,
      "&.MuiButton-outlinedPrimary": {
        color: "text.secondary",
        borderColor: "text.secondary",
        "&:hover": {
          borderColor: "primary.main"
        }
      },
      "&.MuiButton-containedPrimary": {
        border: "1px solid primary.main"
      }
    }}
  >
  </Button>


export const UnstyledButton = (props) =>
  <Button
    {...props}
    disableElevation={true}
    disableRipple={true}
    disableFocusRipple={true}
    disableTouchRipple={true}
    size="small"
    sx={{
      background: '#1565c0',
      '&:hover': {
        background: '#1565c0',
      },
    }}>
  </Button>

export const NonrippledButton = (props) =>
  <Button
    {...props}
    variant="contained"
    disableElevation
    disableRipple
    disableFocusRipple
    disableTouchRipple
    sx={{
      borderRadius: "10px",
      mb: .5,
      "&:hover": {
        bgcolor: "primary.main"
      }
    }} />

export const TextButton = (props) =>
  <Button
    disableElevation={true}
    disableRipple={true}
    disableFocusRipple={true}
    disableTouchRipple={true}
    loadingPosition="start"
  ></Button>

export const RedButton = (props) =>
  <Button
    {...props}
    variant="round"
    size="small"
    sx={{
      color: "pink.main",
      bgcolor: "pink.light",
      cursor: "auto",
      border: "none",
      "&:hover": {
        bgcolor: "pink.light"
      }
    }}>
  </Button>