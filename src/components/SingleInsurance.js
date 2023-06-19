import React from "react";

const subInsurances = [
  {
    name: "Auto",
    title: "Commercial Vehicle",
    description:
      "Explore our comprehensive insurance coverage for commercial vehicles. We provide protection and peace of mind for your business fleet. Get the right coverage for your commercial vehicles today.",
    image:
      "https://images.unsplash.com/photo-1511350224460-4a95f1cf2e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Auto",
    title: "Private Vehicle",
    description:
      "Discover our comprehensive insurance options for private vehicles. Safeguard your personal car with our reliable coverage and enjoy peace of mind on the road. Choose the right insurance for your private vehicle today.",
    image:
      "https://images.unsplash.com/photo-1511350224460-4a95f1cf2e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Auto",
    title: "Two-Wheeler Vehicle",
    description:
      "Experience our comprehensive insurance coverage specially designed for two-wheelers. Keep your motorcycle or scooter protected with our reliable insurance options. Choose the best insurance for your two-wheeler today.",
    image:
      "https://images.unsplash.com/photo-1511350224460-4a95f1cf2e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Auto",
    title: "Three-Wheeler Vehicle",
    description:
      "Discover our comprehensive insurance coverage for three-wheelers. Protect your auto-rickshaws or other three-wheeler vehicles with our reliable insurance options. Get the right coverage for your three-wheeler today.",
    image:
      "https://images.unsplash.com/photo-1511350224460-4a95f1cf2e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

function SingleInsurance({ insurance }) {
  console.log(insurance);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "50%" }}>
        <p>dada {insurance.name}</p>
        <img style={{ width: "100%", padding: "30px" }} src={insurance.image} />
      </div>
      <div
        style={{
          display: "flex",
          //   justifyContent: "space-between",
          width: "50%",
        }}
      >
        {subInsurances.map((subInsurance) => (
          <div style={{ width: "50%" }}>
            <img
              style={{ width: "100%", padding: "30px" }}
              src={subInsurance.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleInsurance;
