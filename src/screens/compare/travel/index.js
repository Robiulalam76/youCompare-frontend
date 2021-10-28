import React from 'react'
import Filters from './filters'
import Results from './results'
import CompareLayout from '../../../components/Layout/compareLayout'

export default function TravelCompare() {
  return (
    <CompareLayout
      filter={<Filters />}
      result={<Results />} />
  )
}