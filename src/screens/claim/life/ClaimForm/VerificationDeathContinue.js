import React from "react";
import { Grid, Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import styles from "../lifeClaim.module.css";

const Label = ({ children }) => {
  return (
    <Typography
      sx={{
        color: "text.secondary",
        lineHeight: "25px",
        fontWeight: "medium",
        fontSize: ".8rem",
        mt: 0.5,
      }}
    >
      {children}
    </Typography>
  );
};

const Title = ({ children }) => {
  return (
    <Typography
      variant="h5"
      sx={{ textTransform: "uppercase", letterSpacing: "1px", mb: 1, mt: 3 }}
    >
      {children}
    </Typography>
  );
};

const VerificationDeathContinue = () => {
  return (
    <React.Fragment>
      <Title>Verification Death continued</Title>
      <Grid container>
        <Grid item xs={12}>
          <Label>Name</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Relationship to deceased</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Address</Label>
          <InputBase fullWidth className={styles.input} />
          <InputBase fullWidth className={styles.input} />
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Email addres of informat</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>

        <Grid item xs={12}>
          <Label>
            If the death occured overseas, please confirm the date the visit
            started
          </Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Intended return date to the UK</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Purpose of visit</Label>
          <InputBase fullWidth className={styles.input} />
          <InputBase fullWidth className={styles.input} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default VerificationDeathContinue;
