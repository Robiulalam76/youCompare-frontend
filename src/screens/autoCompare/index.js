import React from 'react'
import MinimalLayout from '../../components/Layout/MinimalLayout'
import Results from './results'
import Filter from './Filter'
import { Grid } from '@mui/material'

export default function AutoCompare(props) {
  return (
    <MinimalLayout>
      <br />
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Filter />
        </Grid>
        <Grid item xs={9}>
          <Results />
        </Grid>
      </Grid>
    </MinimalLayout >
  )
}