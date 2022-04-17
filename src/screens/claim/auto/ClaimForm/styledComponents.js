import { Typography } from "@mui/material"

export const Label = ({ children }) => {
  return (
    <Typography
      sx={{
        color: "text.secondary",
        lineHeight: "25px",
        fontWeight: "medium",
        fontSize: ".8rem",
        mt: .5
      }}
    >
      {children}
    </Typography>
  )
}

export const Title = ({ children }) => {
  return (
    <Typography
      variant='h5'
      sx={{ textTransform: "uppercase", letterSpacing: "1px", mb: 1, mt: 3 }}>
      {children}
    </Typography>
  )
}

// export const BackButton = () => {
//   return (
//     <button>
//       <AiOutlineArrowLeft style={{ fontSize: "16px" }} />
//     </button>
//   )
// }
