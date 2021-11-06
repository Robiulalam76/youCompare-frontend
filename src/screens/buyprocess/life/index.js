import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { Title } from "../../../components/customStyledComponents/texts";

// components
import MinimalLayout from "../../../components/Layout/MinimalLayout";
import YourDetailsForm from "./YourDetailsForm";
import { styled } from "@mui/system";
import HealthPlanDetails from "./HealthPlanDetails";

const StyledBox = styled(Box)(({ theme }) => ({
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 63px #F0F0F0",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2, 3),
  marginBottom: "3rem",
  [theme.breakpoints.between("sm", "lg")]: {
    padding: theme.spacing(3, 4),
    width: "450px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(3, 4),
    width: "500px",
  },
}));

export default function LifeBuyNow() {
  return (
    <MinimalLayout>
      <Grid container>
        <Grid item container xs={12} md={6} sx={{ width: 1 }}>
          <div style={{ margin: "0 auto" }}>
            <Title>Your Details</Title>
            <StyledBox>
              <YourDetailsForm />
              <Link to="/auto/payment-success">
                <Button
                  variant="contained"
                  sx={{ textTransform: "none", mt: 3 }}
                >
                  Proceed
                </Button>
              </Link>
            </StyledBox>
          </div>
        </Grid>

        {/* Plan Details Section */}

        <Grid item xs={12} md={6} lg={6} sx={{ width: 1 }}>
          <Hidden mdDown>
            <div style={{ margin: "0 auto" }}>
              <Title>Plan Details</Title>
              <StyledBox>
                <HealthPlanDetails />
                <Button variant="contained">Buy Now</Button>
              </StyledBox>
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </MinimalLayout>
  );
}
