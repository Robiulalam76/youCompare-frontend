import React from 'react';
import MinimalLayout from '../../../components/Layout/MinimalLayout';
import styles from "./travelClaim.module.css";

import Navbar from '../../../components/Layout/Navbar';
import Footer from '../../../components/Layout/Footer';
import ClaimForm from './ClaimForm/ClaimForm';
import Instructions from './Instructions/Instructions';
import { Box } from '@mui/material';

import { Container } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: "10vh",
  [theme.breakpoints.down('md')]: {
    marginTop: "10vh",
  },
  [theme.breakpoints.only('xs')]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const AutoClaim = () => {
  const [state, setState] = React.useState({});
  const [showForm, setShowForm] = React.useState(false)

  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{ backgroundColor: "background.lifeLight" }}>
        <StyledContainer>
          {
            showForm ?
              <ClaimForm setShowForm={setShowForm} /> :
              <Instructions setShowForm={setShowForm} />
          }
        </StyledContainer>
      </Box>
      <Footer />
    </React.Fragment>
  )
}

export default AutoClaim;