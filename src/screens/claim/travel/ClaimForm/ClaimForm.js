import React from "react";



import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";


import styles from "../travelClaim.module.css";
import { Box, Button } from "@mui/material";
import { HiOutlineArrowLeft } from "react-icons/hi";
import SectionSix from "./SectionSix";

const ClaimForm = ({ setShowForm }) => {
  const [state, setState] = React.useState({});

  return (
    <Box sx={{ pt: 3, pb: 3 }}>
      <div className={styles.container}>
        <div className={styles.icondiv} onClick={() => setShowForm(false)}>
          <HiOutlineArrowLeft />
        </div>
        <h1 className={styles.headerText}>Travel insurace Claim</h1>
        <form>
          <SectionOne />
          <br />
          <SectionTwo />
          <SectionThree />
          <SectionFour />

          <SectionFive />
          <br />
          <SectionSix />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default ClaimForm;
