const navStyle = {
  display: "flex", justifyContent: "space-between", alignItems: "center"
};
const ulStyle = { listStyleType: "none", display: "flex" };
const liStyle = { padding: "0 1rem", cursor: "pointer" };

export default function Navbar() {
  return (
    <div style={navStyle}>
      <h3>You Compare Logo</h3>
      <ul style={ulStyle}>
        <li style={liStyle}>Products</li>
        <li style={liStyle}>Get a Quote</li>
        <li style={liStyle}>Login</li>
      </ul>
    </div>
  )
}