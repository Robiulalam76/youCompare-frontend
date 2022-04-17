import React from 'react';
import { Grid, Typography } from '@mui/material';
import { InputBase } from '@mui/material';
import styles from '../autoClaim.module.css'
import { Label, Title } from './styledComponents';

const Impact = () => {
  return (
    <React.Fragment>
      <Title>Impact</Title>
      <Grid container>

        <Grid item xs={12}>
          <Label>Is damaged auto essential to business?</Label>
          <InputBase fullWidth className={styles.input} />
        </Grid>

        <Grid item xs={12}>
          <Label>How?</Label>
          <InputBase
            multiline
            minRows={2}
            style={{ width: "100%", padding: "4px 8px", fontSize: "14px" }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Impact;