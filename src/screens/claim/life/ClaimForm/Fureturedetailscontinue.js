import React from "react";
import { Grid, Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import styles from "../lifeClaim.module.css";
import { Label, Title } from "./styledComponents";

const Fureturedetailscontinue = () => {
  return (
    <React.Fragment>
      <Title>Furture member details, continued</Title>
      <Grid container>
        <Grid item xs={12}>
          <FormControl>
            <Label>
              Was the member's salary included in the anniversary date prior to
              the date of death?
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
          <Label>
            If the member's salary was nit included in the last renewal date,
            please tell us the reason for omissiom
          </Label>
          <InputBase fullWidth className={styles.input} />
          <InputBase fullWidth className={styles.input} />
          <InputBase fullWidth className={styles.input} />
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <Label>
              Did the member compolete an Expression of Wishes form?
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
      </Grid>
    </React.Fragment>
  );
};

export default Fureturedetailscontinue;
