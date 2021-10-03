import React from 'react'
import Layout from '../components/Layout'

const rootStyle = {
  padding: "0 4rem", textAlign: "center"
}
const insuranceDiv = {
  display: "inline-grid", width: "20%",
  border: "1px solid lightgray", margin: "1rem 1%",
  padding: "0 1%", height: "200px"
}

const insurances = [
  {
    title: "Auto Insurance",
    description: "Auto insurance is designed to protect yourself and others agains many various risks"
  },
  {
    title: "Life Insurance",
    description: "Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you."
  },
  {
    title: "Travel Insurance",
    description: "Insurance plans that cover trip cancellation, travel medicines and many more from your loss."
  },
  {
    title: "Health Isurance",
    description: "Health is the most important thing that we should protect. Health insurance will take care of medical expenses."
  }
]

export default function LandingPage() {
  return (
    <React.Fragment>
      <Layout>
        <div style={rootStyle}>
          <h1>Smart way to buy insurance.</h1>
          <div>
            {
              insurances
                .map((insurance, i) => (
                  <div style={insuranceDiv} key={i}>
                    <h3>{insurance.title}</h3>
                    <p>{insurance.description}</p>
                  </div>
                ))
            }
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}