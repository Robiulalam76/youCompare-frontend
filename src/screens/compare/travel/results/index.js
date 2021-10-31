import React from 'react'
import { Title } from '../../../../components/customStyledComponents/texts'

import EditForm from './EditForm';
import { styled } from '@mui/system';
import {
  Grid, Typography, Box, Button, Paper, IconButton,
  useMediaQuery, Divider, Drawer, TextField, InputBase
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';

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

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(1, 0)
}))

const ResponsiveBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.only('xs')]: {
    display: "flex",
    justifyContent: "space-between"
  }
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


// Travel Details

const TravelDetails = () => {
  const countries = ['Canada', 'Bangladesh', 'India']
  const [showEditForm, setShowEditForm] = React.useState(false)


  return (
    <Box sx={{ py: .5 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <ResponsiveBox>
            <Typography variant="body2" color="text.hover">Destinations</Typography>
            <div>
              {countries.map((country, i) => (
                <Typography key={i}
                  variant="body2"
                  sx={{ display: "inline-block" }}>
                  {country}
                  {
                    i !== countries.length - 1 ? ", " :
                      <IconButton aria-label="edit" size="small">
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                  }
                </Typography>
              ))}
            </div>
          </ResponsiveBox>
        </Grid>

        <Grid item xs={12} sm={4}>
          <ResponsiveBox>
            <Typography variant="body2" color="text.hover">Travellers</Typography>
            <Typography variant="body2">
              One Traveller
              <IconButton aria-label="edit" size="small">
                <EditIcon fontSize="inherit" />
              </IconButton>
            </Typography>
          </ResponsiveBox>
        </Grid>

        <Grid item xs={12} sm={4}>
          <ResponsiveBox>
            <Typography variant="body2" color="text.hover">Trip Date</Typography>
            <Typography variant="body2">
              23 Sep'21 - 29 Sep'21
              <IconButton aria-label="edit" size="small">
                <EditIcon fontSize="inherit" />
              </IconButton>
            </Typography>
          </ResponsiveBox>
        </Grid>

        {/* <Grid item container xs={12} lg={2}
        style={{ justifyContent: "end" }}>
        <div>
          <Button
            variant="outlined"
            onClick={() => setShowEditForm(true)}>
            Edit
          </Button>
        </div>
      </Grid> */}

        <Drawer
          anchor="right"
          open={showEditForm}
          onClose={() => setShowEditForm(false)}>
          <EditForm />
        </Drawer>
      </Grid>
    </Box>
  )
}

// Single Result
const SingleResult = (props) => {
  const coverages = ['Claim Guarantee', 'Passport Loss Covered', 'Passport Loss Covered'];
  return (
    <React.Fragment>
      <CustomDiv>
        <Grid container spacing={1}>

          <Grid item container xs={12} lg={4}>
            <Grid item xs={6}>
              <Typography>Insurer Logo</Typography>
            </Grid>
            <Grid item container xs={6} sx={{ justifyContent: "end" }}>
              <GrayText>Explore Canada  (Excluding USA)</GrayText>
            </Grid>
          </Grid>

          <Grid item container xs={12} sm={6} lg={6}>
            {coverages.map((item, i) => (
              <Grid item xs={6} sm={12} lg={6} key={i}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleIcon sx={{ color: "success.main", p: "4px" }} />
                  <Typography variant="caption">{item}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>

          <Grid item container xs={12} sm={6} lg={2}
            style={{ justifyContent: "end" }}>
            <div>
              <Button
                variant="contained"
                disableElevation
                disableRipple
                disableFocusRipple
                disableTouchRipple
                sx={{
                  borderRadius: borderRadius,
                  mb: .5,
                  cursor: "auto",
                  "&:hover": {
                    bgcolor: "primary.main"
                  }
                }}>N 2300</Button>
            </div>
          </Grid>
        </Grid>
        <StyledDivider />
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
