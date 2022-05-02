import React from "react";
// import { CustomTextField as Input } from "../../../components/customStyledComponents/inputs";
// import InputBox from "../../../components/customStyledComponents/InputBox";
import { Grid, Box, Typography } from "@mui/material";
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

const Policy = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        sx={{ textTransform: "uppercase", letterSpacing: "1px", mb: 1 }}
      >
        Policy details
      </Typography>

      <Grid container>
        <Grid item container>
          <Grid item xs={12}>
            <Label>Policy name</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Label>Policy Number</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>

        <Grid item xs={12}>
          <Label>Other Policy with Aviva</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Policy;
