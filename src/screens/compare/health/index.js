import React from 'react'

// material ui
//import Grid from '@mui/material/Grid'
//import Hidden from '@mui/material/Hidden';

// components
import CompareLayout from '../../../components/Layout/compareLayout'
import Filters from './filters'
import Results from './results'

export default function HealthCompare() {
  return (
    <CompareLayout filter={<Filters />} result={<Results />} />
  )
}