import { Box, Typography } from "@mui/material"

export default function InputBox(props) {
  return (
    <Box sx={{ ...props.sx, display: "flex", flexDirection: "column", alignItems: "flex-start", mt: 1.5 }}
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
