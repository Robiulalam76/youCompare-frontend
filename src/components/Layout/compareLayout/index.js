import React from 'react'

import MinimalLayout from '../MinimalLayout'
import Grid from '@mui/material/Grid'

export default function CompareLayout({ filter, result }) {
  return (
    <MinimalLayout>
      <br />
      <Grid container spacing={4}>
        <Grid item xs={3}>
          { filter }
        </Grid>
        <Grid item xs={9}>
          { result }
        </Grid>
      </Grid>
    </MinimalLayout>
  )
}