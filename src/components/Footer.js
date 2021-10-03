const footer = { background: "rgba(0,0,0,.96)", width: "100%", height: "200px" }
export default function Footer() {
  return (
    <div style={footer}>
      <p style={{ color: "white", textAlign: "center", padding: "4rem" }}>
        Copyright &copy; 2021, All rights reserved by YouCompare
      </p>
    </div>
  )
}