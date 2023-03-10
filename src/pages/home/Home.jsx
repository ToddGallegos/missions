import './home.css';
import image from "../../img/icona5-min.png";
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className="homeContainer" style={{ backgroundImage:`url(${image})` }}>
      <div className="heroLeft">
        <div className="title">
          <p>Microsoft Flight Simulator 2020:</p>
          <h1>Missions</h1>
        </div>
        <div className="buttons">
        <Link to="/signup"><button>Sign-Up Free</button></Link>
        <Link to="/signin"><button>Login</button></Link>
        </div>
      </div>
      <div className="heroRight">
        <p>ACCEPT HUMANITARIAN OR CARTEL MISSIONS </p>
        <p>EARN MONEY BASED ON CARGO DELIVERED</p>
        <p>BUY NEW AIRCRAFT TO EARN MORE MONEY</p>
        <p>CLIMB THE RANKS TO UNLOCK NEW MISSIONS</p>
      </div>
    </div>
  )
}
