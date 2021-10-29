import React from 'react'
import { Title } from '../../../../components/customStyledComponents/texts'

import { styled } from '@mui/system';
import {
  Grid, Typography, Box, Button, Paper,
  useMediaQuery, Divider, Drawer, TextField, InputBase
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import styles from './results.module.css'
import { useTheme } from '@emotion/react';

const borderRadius = "8px"

const CustomDiv = styled('div')(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  width: "auto",
  height: "auto",
  borderRadius: "8px",
  padding: theme.spacing(1)
}));

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
  color: theme.palette.text.secondary,
  lineHeight: "1rem",
  fontFamily: "Poppins",
  fontWeight: "normal"
}))

export default function Results() {
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.only('xs'))
  return (
    <div>
      <Title>Resluts</Title>
      <TravelDetails />
      <Box sx={{ bgcolor: "primary.light", p: smallScreen ? 1 : 3, borderRadius: borderRadius }}>
        {[...new Array(4)].map((elem, i) =>
          <Paper key={i} sx={{ px: 2, py: 1.5, mb: 3, borderRadius: borderRadius }}>
            <SingleResult />
          </Paper>
        )}
      </Box>
    </div>
  )
}


// Travel Details From User Input


const EditForm = (props) => {
  return (
    <Box sx={{ mx: "auto", mt: 5, p: "0 2rem", minWidth: "40vw"}}>
      <InputBase />
    </Box>
  )
}

const TravelDetails = () => {
  const countries = ['Canada', 'Bangladesh', 'India']
  const [showEditForm, setShowEditForm] = React.useState(false)

  return (
    <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
      <div>
        <Typography variant="body2" color="text.hover">Destinations</Typography>
        <Typography>
          {countries.map((country, i) => (
            <span>{country}{i !== countries.length - 1 ? ", " : null}</span>
          ))}
        </Typography>
      </div>

      <div>
        <Typography variant="body2" color="text.hover">Travellers</Typography>
        <Typography>One Traveller</Typography>
      </div>

      <div>
        <Typography variant="body2" color="text.hover">Trip Date</Typography>
        <Typography>23 Sep'21 - 29 Sep'21</Typography>
      </div>

      <Button variant="outlined" onClick={() => setShowEditForm(true)}>Edit</Button>

      <Drawer anchor="right" open={showEditForm} onClose={() => setShowEditForm(false)}>
        <EditForm />
      </Drawer>
    </Box>
  )
}

// Single Result
const SingleResult = (props) => {

  const coverages = ['Claim Guarantee', 'Passport Loss Covered'];
  return (
    <React.Fragment>
      <CustomDiv>
        <Grid container>

          <Grid item container xs={12} sm={4}>
            <Grid item xs={6}>
              {/* <LogoDiv>Logo</LogoDiv> */}
              <Typography>Insurer Logo</Typography>
            </Grid>
            <Grid item xs={6}>
              <GrayText sx={{ px: "4px", pt: "4px" }}>Explore Canada  (Excluding USA)</GrayText>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Grid container>
              {coverages.map((item, i) => (
                <Grid item key={i}
                  xs={12} sm={6} md={6}
                  sx={{ display: "flex" }}>
                  <CheckCircleIcon sx={{ color: "success.main", p: "4px" }} />
                  <Typography variant="caption">{item}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Button
              variant="contained"
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              fullWidth
              sx={{
                borderRadius: borderRadius,
                mb: .5,
                cursor: "auto",
                "&:hover": {
                  bgcolor: "primary.main"
                }
              }}>N 2300</Button>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="caption" color="text.secondary">
            Covers covid-19 related trip calcellation and interruption
          </Typography>
          <Button size="small"
            sx={{ fontSize: "12px", textTransform: "none" }}>
            Policy Details
          </Button>
        </div>
      </CustomDiv>
    </React.Fragment >
  )
}
