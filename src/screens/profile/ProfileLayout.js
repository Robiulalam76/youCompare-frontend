import React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import MinimalLayout from '../../components/Layout/MinimalLayout'
import { Title } from '../../components/customStyledComponents/texts'

export default function Showcase(props) {
  return (
    <MinimalLayout>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={6}>
          {props.children}
        </Grid>
        <Grid item xs={6} sx={{ height: 300 }}>
          <Title>Buy Plan</Title>
        </Grid>
      </Grid>
    </MinimalLayout>
  )
}