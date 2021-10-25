import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import { Container } from '@mui/material'

export default function MinimalLayout({ children }) {
  return (
    <React.Fragment>
      <Container>
        <Navbar />
        {children}
      </Container>
      <Footer />
    </React.Fragment>
  )
}