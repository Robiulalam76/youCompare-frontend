import React from "react";
import { Grid, Button } from "@mui/material";

function DetailsForm() {
  return (
    <div>
      <p>DetailsForm DetailsForm</p>

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "10%",
            padding: "30px 0px",
            border: "1px solid salmon",
          }}
        >
          BMW
        </div>
        <div
          style={{
            width: "10%",
            padding: "30px 0px",
            border: "1px solid salmon",
          }}
        >
          {" "}
          <span>Model</span>
          120
        </div>
        <div
          style={{
            width: "10%",
            padding: "30px 0px",
            border: "1px solid salmon",
          }}
        >
          <span>Y ear</span>
          2016
        </div>
      </div>

      <Grid container>
        <Grid lg={4}>
          <p>Type of use</p>
          <Button variant="contained">Private</Button>
          <Button variant="outlined">Commercial</Button>
        </Grid>
        <Grid lg={4}>
          <p>Type of Insurance</p>
          <Button variant="outlined">Third party</Button>
          <Button variant="contained">Compremsive</Button>
        </Grid>
        <Grid lg={4}>
          <p>Value</p>
          <input type="text" placeholder="EG: 500" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid lg={4}>
          <p>Full Name</p>
          <input type="text" placeholder="EG: john Borker" />
        </Grid>
        <Grid lg={4}>
          <p>Email ID</p>
          <input type="text" placeholder="EG: name@gmail.com" />
        </Grid>
        <Grid lg={4}>
          <p>Mobile</p>
          <input type="text" placeholder="EG: 500" />
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailsForm;
