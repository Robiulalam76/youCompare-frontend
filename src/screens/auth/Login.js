import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { formDiv, form, input, button } from './styles'

import { Container } from '../../components/styledComponents'

export default function Login() {
  return (
    <React.Fragment>
      <Container>
        <Navbar />
        <div style={formDiv}>
          <form style={form}>
            <h3>Login</h3>
            <Input
              label="Email Address"
              placeholder="Enter email address" />
            <Input
              label="Password"
              placeholder="Type password" />
            <button type="submit" style={button}>Login</button>
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