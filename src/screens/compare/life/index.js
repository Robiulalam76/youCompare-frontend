import React from 'react'

// components
import Filters from './filters'
import Results from './results'
import CompareLayout from '../../../components/Layout/compareLayout';

export default function LifeCompare() {
  return (
    <React.Fragment>
      <CompareLayout filter={<Filters />} result={<Results />} />
    </React.Fragment>
  )
}