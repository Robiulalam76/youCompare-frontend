import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { Container } from "./styledComponents";

const methodology = { marginTop: "8rem", textAlign: "center", padding: "0 3rem" }
const methodStyle = { display: "flex", justifyContent: "space-around" }
const stepStyle = { width: "250px" }
const community = { ...methodology }
const getApp = { marginTop: "8rem", maxWidth: "400px" }

const steps = [
  {
    title: "Enter Details",
    description: "Answer a few simple question, so the program could generate a custom quote for you."
  },
  {
    title: "Compare",
    description: "View the quotes, compare them and choose the best deal."
  },
  {
    title: "Buy Online",
    description: "Get instant insurance from the company of your choice through us."
  }
]

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Container>
        <Navbar />
        {children}
        
        {/* How it works Section */}
        <div style={methodology}>
          <h1>How does it work?</h1>
          <p>Complete three steps to find best insurance policy</p>
          <div style={methodStyle}>
            {
              steps.map((step, i) =>
                <div style={stepStyle} key={i}>
                  <img alt="Step Logo" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              )
            }
          </div>
        </div>
        
        {/* Community Section */}
        <div style={community}>
          <h1>1000+ people believed in us.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas finibus sapien lorem, molestie dictum urna accumsan sit amet.</p>
        </div>
        
        {/* Get the app */}
        <div style={getApp}>
          <h1 style={{ marginBottom: "0px" }}>Get the</h1>
          <h1 style={{ marginTop: "0px" }}> youcompare app</h1>
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Maecenas finibus sapien lorem, molestie dictum urna accumsan sit amet.</p>
        </div>
      </Container>
      {/* Footer */}
      <Footer />
    </React.Fragment>
  )
}