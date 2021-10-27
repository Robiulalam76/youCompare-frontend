import React from 'react'

// material ui
import Grid from '@mui/material/Grid'
import Hidden from '@mui/material/Hidden';

// components
import MinimalLayout from '../../../components/Layout/MinimalLayout'
import Filters from './filters'
import Results from './results'

export default function LifeCompare() {
  return (
    <MinimalLayout>
      <br />
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Hidden only={['xs', 'sm']}>
            <Filters />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={9}>
          <Results />
        </Grid>
      </Grid>
    </MinimalLayout >
  )
}