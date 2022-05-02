import React from "react";
import { Grid, Typography } from "@mui/material";
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

const InsuredVehicle = () => {
  return (
    <React.Fragment>
      <Title>Further member details</Title>
      <Grid container>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Label>Date member joined the company</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Date member joined the policy</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Date the member was last activelt at work</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={12}>
            <Label>
              If not actively at work on date of death, please provide the
              reason for absence
            </Label>
            <InputBase fullWidth className={styles.input} />
            <InputBase fullWidth className={styles.input} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <Label>
                Did the member join the policy as a result of auto-enrolement
                into the qualifying pension scheme?
              </Label>
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
                  label="Yes"
                  sx={{ margin: 0, fontWeight: "medium" }}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="No"
                  sx={{ margin: 0 }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Label>If yes, what was the auto enrolement date?</Label>
            <InputBase fullWidth className={styles.input} />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Label>Member's salary for purpose of the policy</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>

        <Grid item xs={12}>
          <Label>Total lump sum benefit claimed (if applicable)</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default InsuredVehicle;
