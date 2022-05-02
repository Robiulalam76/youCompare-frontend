import { Paper, Box } from '@mui/material';
import React from 'react';
import styles from './styles.module.css';

import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  maxWidth: "500px",
  padding: "2rem 0 0 0",
  margin: "0 24px",
  [theme.breakpoints.only('xs')]: {
    margin:0,
    paddingLeft: 0,
    paddingRight: 0,
  },
}));


const ResponsivePaper = styled(Paper)(({ theme }) => ({
  borderRadius: "1rem",
  padding: 3,
  background: "white",
  [theme.breakpoints.only('xs')]: {
    borderRadius: 0,
    boxShadow: "none"
  }
}))
const DisplayCard = (props) => {
  return (
    <StyledBox sx={{ ...props.sx}}>
      <ResponsivePaper
        elevation={5}
        sx={{ background: "white", borderRadius: "1rem", p: 3 }}>
        {props.children}
      </ResponsivePaper>
    </StyledBox>
  )
}
export default DisplayCard;