import React from "react";
import { Grid, Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import styles from "../lifeClaim.module.css";
import { Label, Title } from "./styledComponents";

const VerificationDeath = () => {
  return (
    <React.Fragment>
      <Title>Verification Death</Title>
      <Grid container>
        <Grid item container spacing={2}>
          <Grid item xs={12}>
            <Label>Date of death</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12}>
            <Label>Cause of death</Label>
            <InputBase fullWidth className={styles.input} />
            <InputBase fullWidth className={styles.input} />
            <InputBase fullWidth className={styles.input} />
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Label>Place of death</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Name (as it appers on the death certificate)</Label>
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
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Email addres of informat</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default VerificationDeath;
