import React from 'react'

// data import
import { results } from '../data'

// material ui and styled components
import { Title } from '../../../../components/customStyledComponents/texts'
import { styled } from '@mui/system';
import { Grid, Typography, Box, Button } from '@mui/material';

const CustomDiv = styled('div')(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  width: "auto",
  height: "auto",
  boxShadow: "0px 0px 63px #F0F0F0",
  borderRadius: "15px",
  padding: theme.spacing(2)
}));

const ColoredBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.life,
  margin: theme.spacing(0, 3),
  padding: theme.spacing(1),
  height: "auto",
  borderRadius: "6px",
  padding: theme.spacing(1, 2),
  [theme.breakpoints.only('xs')]: {
    margin: 0
  }
}))

const LogoDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.life,
  width: "50px",
  height: "50px",
  borderRadius: "50%"
}));

const ResponsiveBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.only('xs')]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}))

const Text = (props) =>
  <Typography
    {...props}
    sx={{ font: "normal normal 600 16px/32px Poppins" }} />

const GrayText = styled(Typography)(({ theme }) => ({
  fontSize: ".85rem",
  color: theme.palette.text.hover,
  lineHeight: "1rem",
  fontFamily: "Poppins",
  fontWeight: "normal",
  [theme.breakpoints.only('xs')]: {
    fontSize: ".9rem"
  }
}))

export default function Results() {

  return (
    <div>
      <Title>Resluts</Title>
      {results.map((result) =>
        <Box key={result.id} sx={{ mb: 4 }}>
          <SingleResult result={result} />
        </Box>
      )}
    </div>
  )
}

const SingleResult = ({ result }) => {
  const [displayMore, setDisplayMore] = React.useState(false)
  return (
    <React.Fragment>
      <CustomDiv>
        <Grid container spacing={2}>

          {/* Insurer Logo Section */}
          <Grid item xs={12} sm={3} md={3}>
            <LogoDiv></LogoDiv>
          </Grid>

          {/* Cover Section */}
          <Grid item xs={12} sm={3} md={2}>
            <ResponsiveBox>
              <GrayText>Life Cover</GrayText>
              <Text>₦ {result.coverAmount}</Text>
            </ResponsiveBox>
          </Grid>

          {/** Cover Period */}
          <Grid item xs={12} sm={3} md={2}>
            <ResponsiveBox>
              <GrayText>Cover Till Age</GrayText>
              <Text>{result.ageLimit} Years</Text>
            </ResponsiveBox>
          </Grid>

          {/* Claim Settelment */}
          <Grid item xs={12} sm={3} md={2}>
            <ResponsiveBox>
              <GrayText>Claim Setteled</GrayText>
              <Text>{result.claimSettelment} %</Text>
            </ResponsiveBox>
          </Grid>

          {/** IDV Button, Discounts*/}
          <Grid item xs={12} sm={12} md={3}
            sx={{
              textAlign: "right"
            }}>
            <ResponsiveBox>
              <Button
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
                }}>₦ {result.monthlyPayment}</Button>
              <GrayText>Buy Online & Save {" "}
                <Box sx={{ color: "primary.main", display: "inline-block" }} >
                  ₦ {result.onlineSave}
                </Box>
              </GrayText>
            </ResponsiveBox>
          </Grid>
        </Grid>
      </CustomDiv>

      {/* Bottom Section */}
      <ColoredBox>
        <Grid container>
          <Grid item container xs={10}>
            {
              displayMore ?
                result.benifites.map((elem, i) =>
                  <Grid item xs={12} sm={6} key={i}>
                    <Typography
                      style={{
                        fontWeight: "normal",
                        fontSize: ".8rem",
                      }}>
                      {result.benifites[1]}
                    </Typography>
                  </Grid>)
                :
                <React.Fragment>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      style={{
                        fontWeight: "normal",
                        fontSize: ".8rem",
                      }}>
                      {result.benifites[0]}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography
                      style={{
                        fontWeight: "normal",
                        fontSize: ".8rem",
                      }}>
                      {result.benifites[1]}
                    </Typography>
                  </Grid>
                </React.Fragment>
            }
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "right" }}>
            {
              result.benifites.length > 2 ?
                <Typography
                  onClick={() => setDisplayMore(!displayMore)}
                  color="primary.main"
                  style={{
                    fontWeight: "normal",
                    fontSize: ".8rem",
                    cursor: "pointer"
                  }}>
                  {
                    displayMore ? "collapse" :
                      `+${result.benifites.length - 2} more`
                  }
                </Typography> : null
            }
          </Grid>
        </Grid>
      </ColoredBox>
    </React.Fragment>
  )
}