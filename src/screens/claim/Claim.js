import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';

import { Box, Grid, Paper, Typography } from '@mui/material';

import { Container } from "@mui/material";
import { styled } from "@mui/system";
import Assistance from './auto/Instructions/Assistance';
import { AiFillCar } from 'react-icons/ai';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { MdHiking } from 'react-icons/md';
import { BsUmbrellaFill } from 'react-icons/bs'

import styles from './styles.module.css';
import { Link } from 'react-router-dom';


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

const Insurances = [
  {
    icon: <AiFillCar className={styles.icons} />,
    text: "Auto Insurance",
  },
  {
    icon: <MdOutlineHealthAndSafety className={styles.icons} />,
    text: "Health Insurance",
  },
  {
    icon: <MdHiking className={styles.icons} />,
    text: "Travel Insurance"
  },
  {
    icon: <BsUmbrellaFill className={styles.icons} />,
    text: "Life Insurance"
  }
]

const Claim = () => {

  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{ backgroundColor: "background.life" }}>
        <StyledContainer>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Grid container justifyContent="center">
                <div style={{ marginTop: "2rem" }}>
                  <h2 className={styles.title}>Do you need </h2>
                  <h2 className={styles.title}>Insurance <strong>claim assiatance?</strong></h2>
                  <p className={styles.text}>We are here to help you</p>
                  <br />
                  <p className={styles.text}>To learn more about claim process, select a product: </p>
                  {
                    Insurances.map(p => (
                      <Link to="/claim/auto">
                        <div className={styles.iconJar}>
                          <div style={{
                            display: "flex",
                            flexDirection: "column",

                          }}>
                            {p.icon}
                            <Typography variant='subtitle2' sx={{ mt: 2 }}>
                              {p.text}
                            </Typography>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </Grid>
              <br />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container justifyContent="center">
                <Assistance />
              </Grid>
            </Grid>
          </Grid>
        </StyledContainer>
      </Box>
      <Footer />
    </React.Fragment>
  )
}

export default Claim;