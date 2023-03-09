import img from "../../images/152.png";
import "./hangar.css";

export default function Hangar() {
  return (
    <div className="hangarContainer">
        <h1 className="hangarTitle">YOUR AIRCRAFT</h1>
        <div className="card">
            <img className="aircraftImage" src={img} alt="plane"/>
            <p className="hangarParagraph">Price: $64,000</p>
            <p className="hangarParagraph">MaxLoad: 502 lbs</p>
            <div className="cardButtonDiv">
                <button className="hangarSellButton">Sell</button>
            </div>
        </div>
    </div>
  )
}
