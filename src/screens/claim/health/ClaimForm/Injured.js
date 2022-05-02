import React from 'react';
import { Grid, Typography } from '@mui/material';
import { InputBase } from '@mui/material';
import styles from '../autoClaim.module.css'
import { Label, Title } from './styledComponents';

const Injured = () => {
  return (
    <React.Fragment>
      <Title>Injured</Title>
      <Grid container>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Label>Name</Label>
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

      </Grid>
    </React.Fragment>
  )
}

export default Injured;