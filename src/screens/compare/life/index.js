import React from 'react'

// material ui
import Grid from '@mui/material/Grid'

// components
import MinimalLayout from '../../../components/Layout/MinimalLayout'
import Filters from './filters'
import Results from './results'

export default function LifeCompare() {
  return (
    <MinimalLayout>
      <br />
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Filters />
        </Grid>
        <Grid item xs={9}>
          <Results />
        </Grid>
      </Grid>
    </MinimalLayout >
  )
}