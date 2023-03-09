import "./navbar.css"
import {Link} from 'react-router-dom'

export default function Navbar(props) {

  const logout = () => {
    props.setIsLoggedIn(false);
    alert("Successfully logged out.")
  }

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
        {props.isLoggedIn &&
          <span className="navbarLink" onClick={logout}>Logout</span>
        }
        {!props.isLoggedIn &&
          <>
            <Link className="navbarLink" to="/signin">Login</Link>
            <Link className="navbarLink" to="/signup">Sign-Up</Link>
          </>
        }
      </div>
      {props.isLoggedIn &&
        <div className="navbarRight">
          <span>Cash: ${props.user.money}</span>
        </div>
      }
      
    </div>
  )
}
