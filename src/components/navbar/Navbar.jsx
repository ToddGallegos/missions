import "./navbar.css"
import {Link} from 'react-router-dom'

export default function Navbar() {

  const isLoggedIn = true;

  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link className="logo navbarLink" to="/">MSFS2020 MISSIONS</Link>
      </div>
      <div className="navbarCenter">
        <Link className="navbarLink" to="/">Home</Link>
        <Link className="navbarLink" to="/hangar">Hangar</Link>
        <Link className="navbarLink" to="/store">Store</Link>
        <Link className="navbarLink" to="/missions">Missions</Link>
        {isLoggedIn &&
          <span className="navbarLink">Logout</span>
        }
        {!isLoggedIn &&
          <>
            <Link className="navbarLink" to="/signin">Login</Link>
            <Link className="navbarLink" to="/signup">Sign-Up</Link>
          </>
        }
      </div>
      {isLoggedIn &&
        <div className="navbarRight">
          <span>Cash: $9,999,999</span>
        </div>
      }
      
    </div>
  )
}
