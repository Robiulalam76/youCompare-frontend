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


const Witness = () => {
  return (
    <React.Fragment>
      <Title>Witness</Title>
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

        <Grid item xs={12}>
          <Label>Extent of Injury</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>

      </Grid>
    </React.Fragment>
  )
}

export default Witness;