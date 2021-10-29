import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box'
import { useTheme } from '@mui/system';

export default function CusotmSwitch({ height, padding }) {
  const innerHeight = height - padding * 2;
  const [leftPos, setLeftPos] = React.useState(true)


  const onRoundPosChange = () => {
    // const icon = document.getElementById("round-icon")
    // leftPos ? icon.style.transform = "translateX(100%)" :
    // icon.style.transform = "translateX(-100%)"
  }

  return (
    <Box
      style={{
        width: "50px",
        borderRadius: height / 2,
        height: height,
        padding: padding
      }}
      sx={{ boxShadow: "0px 0px 4px lightgray" }}>
      <Box
        id="round-icon"
        style={{
          height: innerHeight,
          width: innerHeight,
          borderRadius: innerHeight / 2,
          float: leftPos ? "left" : "right",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 300ms ease"
        }}
        sx={{
          bgcolor: "background.life",
        }}
        onClick={() => {
          setLeftPos(!leftPos)
          onRoundPosChange()
        }}>
        <ArrowBackIcon sx={{
          color: "text.secondary",
          transform: leftPos ? "rotate(0deg)" : "rotate(180deg)",
          transition: "all 300mx ease"
        }} fontSize="small" />
      </Box>
    </Box>
  )
}