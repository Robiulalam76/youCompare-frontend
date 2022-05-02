import React from "react";
import Policy from "./Policy";
import Member from "./Member";
import InsuredVehicle from "./InsuredVehicle";
import Fureturedetailscontinue from "./Fureturedetailscontinue";
import Declaration from "./Declaration";
import VerificationDeath from "./VerificationDeath";
import VerificationDeathContinue from "./VerificationDeathContinue";
import styles from "../lifeClaim.module.css";
import { Box, Button } from "@mui/material";
import { HiOutlineArrowLeft } from "react-icons/hi";

const ClaimForm = ({ setShowForm }) => {
  const [state, setState] = React.useState({});

  return (
    <Box sx={{ pt: 3, pb: 3 }}>
      <div className={styles.container}>
        <div className={styles.icondiv} onClick={() => setShowForm(false)}>
          <HiOutlineArrowLeft />
        </div>
        <h1 className={styles.headerText}>Life insurace Claim</h1>
        <form>
          <Policy />
          <br />
          <Member />
          <br />
          <InsuredVehicle />
          <Fureturedetailscontinue />
          <VerificationDeath />
          <VerificationDeathContinue />
          <Declaration />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default ClaimForm;
