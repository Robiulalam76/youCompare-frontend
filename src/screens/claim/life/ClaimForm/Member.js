import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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

const Member = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        sx={{ textTransform: "uppercase", letterSpacing: "1px", mb: 1 }}
      >
        Member details
      </Typography>

      <Grid container>
        <Grid item container>
          <Grid item xs={12}>
            <Label>Member's forename(s)</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
            <Label>Member's surename</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Label>Date of Birth</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <Label>Gender</Label>
              {/* <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel> */}
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  sx={{ margin: 0, fontWeight: "medium" }}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  sx={{ margin: 0 }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Label>Member's Address</Label>
          <InputBase fullWidth className={styles.input} />
          <InputBase fullWidth className={styles.input} />
          <InputBase fullWidth className={styles.input} />
          <Grid item xs={12} sm={6}>
            <Label>Post code</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={12}>
            <Label>Category of membership</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Member;
