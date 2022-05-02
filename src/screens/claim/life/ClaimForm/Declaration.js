import React from "react";
import { Grid, Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import styles from "../lifeClaim.module.css";
import { Label, Title } from "./styledComponents";

const Declaration = () => {
  return (
    <React.Fragment>
      <Title>Declaration </Title>
      <Grid container>
        <Grid item xs={12}>
          <Label>Signature 1</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Name</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Address</Label>
          <InputBase fullWidth className={styles.input} />
          <InputBase fullWidth className={styles.input} />
          <InputBase fullWidth className={styles.input} />
        </Grid>

        <Grid item xs={12}>
          <Label>Occupation</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Email address</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Date </Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Signature 2</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Name</Label>
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
          <Label>Occupation</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Email Address</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Label>Date</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Declaration;
