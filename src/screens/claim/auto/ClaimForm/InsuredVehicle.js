import React from 'react';
import { Grid, Typography } from '@mui/material';
import { InputBase } from '@mui/material';
import styles from '../autoClaim.module.css'

const Label = ({ children }) => {
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

const Title = ({ children }) => {
  return (
    <Typography
      variant='h5'
      sx={{ textTransform: "uppercase", letterSpacing: "1px", mb: 1, mt: 3 }}>
      {children}
    </Typography>
  )
}


const InsuredVehicle = () => {
  return (
    <React.Fragment>
      <Title>Insured Vehicle</Title>
      <Grid container>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Label>Year</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Make</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Model</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Label>V.I.N</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Label>Plate</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Label>Extent of Damages</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>

        <Grid item xs={12}>
          <Label>Present Location</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Label>City</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Label>State</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Label>Driver</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Label>Date of Birth</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>License No.</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>State</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default InsuredVehicle;