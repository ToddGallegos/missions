import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">MSFS2020 MISSIONS</span>
      </div>
      <div className="navbarCenter">
        <span>Home</span>
        <span>Hangar</span>
        <span>Store</span>
        <span>Missions</span>
        <span>Logout</span>
        <span>Login</span>
        <span>Sign-Up</span>
      </div>
      <div className="navbarRight">
        <span>Pilot: Todd G</span>
        <span>Cash: $9,999,999</span>
      </div>
      
    </div>
  )
}
