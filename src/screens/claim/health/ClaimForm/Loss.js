import React from 'react';
// import { CustomTextField as Input } from "../../../components/customStyledComponents/inputs";
// import InputBox from "../../../components/customStyledComponents/InputBox";
import { Grid, Box, Typography } from '@mui/material';
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


const Loss = () => {
  return (
    <React.Fragment>
      <Typography
        variant='h5'
        sx={{ textTransform: "uppercase", letterSpacing: "1px", mb: 1 }}>
        Loss
      </Typography>

      <Grid container>
        <Grid item container>
          <Grid item xs={12} sm={6}>
            <Label>Date</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Label>Location</Label>
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

        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Label>Police Dept. Involved</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Label>Ticked Issued</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Loss;