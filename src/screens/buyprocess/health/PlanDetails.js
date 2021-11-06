import { Divider, Typography, Box } from "@mui/material";
import React from "react";

export default function PlanDetails(props) {
  const amount = 500;
  const policyPeriod = 2;
  return (
    <div>
      <Typography>Insurer Logo</Typography>
      <Divider />
      <Typography>Insurace Plan Name</Typography>
      <Divider />
      <ItemDisplay title="Cover Amount" value={`Nira ${amount}`} />
      <ItemDisplay title="Policy Period" value={`${policyPeriod} Year`} />
    </div>
  );
}

/* ################# DETAILS DISPLAY ###################### */
const ItemDisplay = ({ title, value }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "4px",
      }}
    >
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {title} :
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {value}
      </Typography>
    </Box>
  );
};
