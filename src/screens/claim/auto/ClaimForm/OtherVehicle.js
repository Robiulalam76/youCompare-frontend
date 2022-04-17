import React from 'react';
import { Grid, Typography } from '@mui/material';
import { InputBase } from '@mui/material';
import styles from '../autoClaim.module.css'
import { Label, Title } from './styledComponents';

const OtherVehicle = () => {
  return (
    <React.Fragment>
      <Title>Other Vehicle</Title>
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

        <Grid item xs={12}>
          <Label>Extent of Damages</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Label>Owner</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Label>Phone</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Label>Address</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Label>City</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>State</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Zip</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>
        
        <Typography sx={{ mt: 1 }}>Insurance Information</Typography>

        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Label>Company Name</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Label>Policy No</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Label>Agent Name</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Label>Phone</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  )
}

export default OtherVehicle;