import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { formDiv, form, input, button } from './styles'

import { Container } from '../../components/styledComponents'

export default function Signup() {
  return (
    <React.Fragment>
      <Container>
        <Navbar />
        <div style={formDiv}>
          <form style={form}>
            <h3>Create Account</h3>
            <Input
              label="Full Name"
              placeholder="e.g. John Doe" />
            <Input
              label="Email Address"
              placeholder="Enter email address" />
            <Input
              label="Password"
              placeholder="Type password" />
            <Input
              label="Confirm Password"
              placeholder="Retype password" />
            <button type="submit" style={button}>Create Account</button>
          </form>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input {...props} style={input} />
    </>
  )
}