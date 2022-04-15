import React from 'react';
import Loss from './Loss';
import Description from './Description';
import InsuredVehicle from './InsuredVehicle';
import OtherVehicle from './OtherVehicle';
import Impact from './Impact'
import Injured from './Injured';
import Witness from './Witness';
import styles from '../autoClaim.module.css'
import { Box, Button } from '@mui/material';
import { BiArrowBack } from 'react-icons/bi';

const ClaimForm = ({ setShowForm }) => {
  const [state, setState] = React.useState({});

  return (
    <Box sx={{ pt: 3, pb: 3 }}>
      <div className={styles.container}>
        <div 
          className={styles.icondiv} 
          onClick={() => setShowForm(false)}>
          <BiArrowBack />
        </div>
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
          <Button type='submit' variant='contained' sx={{ mt: 2 }}>Submit</Button>
        </form>
      </div>
    </Box>
  )
}

export default ClaimForm;