import React from "react";


const rootStyle = {
  padding: "0 4rem"
}
const navStyle = {
  display: "flex", justifyContent: "space-between", alignItems: "center"
};
const ulStyle = { listStyleType: "none", display: "flex" };
const liStyle = { padding: "0 1rem", cursor: "pointer" };
const methodology = { marginTop: "8rem", textAlign: "center", padding: "0 3rem" }
const methodStyle = { display: "flex", justifyContent: "space-around" }
const stepStyle = { width: "250px" }
const community = { ...methodology }
const getApp = { marginTop: "8rem", maxWidth: "400px" }
const footer = { background: "rgba(0,0,0,.96)", width: "100%", height: "200px" }

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
      <div style={rootStyle}>
        {/* Navigation */}
        <div style={navStyle}>
          <h3>You Compare Logo</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>Products</li>
            <li style={liStyle}>Get a Quote</li>
            <li style={liStyle}>Login</li>
          </ul>
        </div>
        {children}
        {/* How it works Section */}
        <div style={methodology}>
          <h1>How does it work?</h1>
          <p>Complete three steps to find best insurance policy</p>
          <div style={methodStyle}>
            {
              steps.map((step, i) =>
                <div style={stepStyle}>
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
      </div>
      {/* Footer */}
      <div style={footer}>
        <p style={{ color: "white", textAlign: "center", padding: "4rem"}}>
          Copyright &copy; 2021, All rights reserved by YouCompare
        </p>
      </div>
    </React.Fragment>
  )
}