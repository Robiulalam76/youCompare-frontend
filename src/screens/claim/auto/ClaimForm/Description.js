import { InputBase, Typography } from '@mui/material';
import React from 'react';
// import styles from "./loss.module.css"

const Description = () => {
  return (
    <React.Fragment>
      <Typography
        variant='h5'
        sx={{ textTransform: "uppercase", letterSpacing: "1px", mb: 2 }}>
        Description of Accident
      </Typography>

      <InputBase
        multiline
        minRows={2}
        style={{ width: "100%", padding: "4px 8px", fontSize: "14px" }}
      />
    </React.Fragment>
  )
}

export default Description;