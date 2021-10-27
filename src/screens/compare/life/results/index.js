import React from 'react'
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
  borderRadius: "6px"
}))

const LogoDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.life,
  width: "50px",
  height: "50px",
  borderRadius: "50%"
}));

const Text = (props) =>
  <Typography
    {...props}
    sx={{ font: "normal normal 600 16px/32px Poppins" }} />

const GrayText = styled(Typography)(({ theme }) => ({
  fontSize: ".85rem",
  color: theme.palette.text.hover,
  lineHeight: "1rem",
  fontFamily: "Poppins",
  fontWeight: "normal"
}))

export default function Results() {
  return (
    <div>
      <Title>Resluts</Title>
      {[...new Array(4)].map((elem, i) =>
        <Box key={i} sx={{ mb: 4 }}>
          <SingleResult />
        </Box>
      )}
    </div>
  )
}

const SingleResult = (props) => {
  return (
    <React.Fragment>
      <CustomDiv>
        <Grid container spacing={2}>

          {/* Insurer Logo Section */}
          <Grid item xs={4} sm={3} md={3}>
            <LogoDiv></LogoDiv>
          </Grid>

          {/* Cover Section */}
          <Grid item xs={4} sm={3} md={2}>
            <GrayText>Life Cover</GrayText>
            <Text>₦ 1</Text>
          </Grid>

          {/** Cover Period */}
          <Grid item xs={4} sm={3} md={2}>
            <GrayText>Cover Till Age</GrayText>
            <Text>60 Years</Text>
          </Grid>

          {/* Claim Settelment */}
          <Grid item xs={4} sm={3} md={2}>
            <GrayText>Claim Setteled</GrayText>
            <Text>97.7%</Text>
          </Grid>

          {/** IDV Button, Discounts*/}
          <Grid item xs={4} sm={3} md={3}
            sx={{
              textAlign: "right"
            }}>
            <Box>
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
                }}>N 2300</Button>
              <GrayText>Buy Online & Save {" "}
                <Box sx={{ color: "primary.main", display: "inline-block" }} >N 20</Box>
              </GrayText>
            </Box>
          </Grid>
        </Grid>
      </CustomDiv>

      {/* Bottom Section */}
      <ColoredBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: .5
          }}>
          {["Wavier of Premium Cover", "100% Payout on terminal liscense"].map(item => (
            <Typography
              style={{
                fontWeight: "normal",
                fontSize: ".8rem",
              }}>
              {item}
            </Typography>
          ))}
          <Typography color="primary.main"
            style={{
              fontWeight: "normal",
              fontSize: ".8rem",
            }}>+2 more</Typography>
        </Box>
      </ColoredBox>
    </React.Fragment>
  )
}