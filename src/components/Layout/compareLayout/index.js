import React from 'react'

import MinimalLayout from '../MinimalLayout'
import Grid from '@mui/material/Grid'
import Hidden from '@mui/material/Hidden'

export default function CompareLayout({ filter, result }) {
  return (
    <MinimalLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
            {filter}
        </Grid>
        <Grid item xs={12} md={9}>
          {result}
        </Grid>
      </Grid>
    </MinimalLayout>
  )
}