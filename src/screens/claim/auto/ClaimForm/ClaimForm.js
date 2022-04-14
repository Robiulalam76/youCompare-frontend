import React from 'react';
import Loss from './Loss';
import Description from './Description';
import InsuredVehicle from './InsuredVehicle';
import OtherVehicle from './OtherVehicle';
import Impact from './Impact'
import Injured from './Injured';
import Witness from './Witness';
import styles from '../autoClaim.module.css'
import { Box } from '@mui/material';

const ClaimForm = () => {
  const [state, setState] = React.useState({});

  return (
    <Box>
      <div className={styles.container}>
        <h1 className={styles.headerText}>
          Automobile Claim
        </h1>
        <form>
          <Loss />
          <br />
          <Description />
          <br />
          <InsuredVehicle />
          <OtherVehicle />
          <Injured />
          <Witness />
          <Impact />
        </form>
      </div>
    </Box>
  )
}

export default ClaimForm;