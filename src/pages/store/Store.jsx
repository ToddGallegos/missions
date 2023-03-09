import img from "../../images/152.png";
import img1 from "../../images/172.png";
import img2 from "../../images/ctsl.png";
import img3 from "../../images/xcub.png";
import "./store.css";

export default function Store() {
    return (
        <div className="storeContainer">

            <h1 className="storeTitle">STORE</h1>

            <div className="cardContainer">

                <div className="card">
                    <img className="aircraftImage" src={img} alt="plane" />
                    <p className="storeParagraph">Price: $64,000</p>
                    <p className="storeParagraph">MaxLoad: 502 lbs</p>
                    <div className="cardButtonDiv">
                        <p className="storeParagraph">Purchased</p>
                    </div>
                </div>

                <div className="card">
                    <img className="aircraftImage" src={img2} alt="plane" />
                    <p className="storeParagraph">Price: $140,000</p>
                    <p className="storeParagraph">MaxLoad: 283 lbs</p>
                    <div className="cardButtonDiv">
                        <button className="storeBuyButton">Buy</button>
                    </div>
                </div>

                <div className="card">
                    <img className="aircraftImage" src={img1} alt="plane" />
                    <p className="storeParagraph">Price: $200,000</p>
                    <p className="storeParagraph">MaxLoad: 679 lbs</p>
                    <div className="cardButtonDiv">
                        <button className="storeBuyButton">Buy</button>
                    </div>
                </div>
                
                <div className="card">
                    <img className="aircraftImage" src={img3} alt="plane" />
                    <p className="storeParagraph">Price: $325,000</p>
                    <p className="storeParagraph">MaxLoad: 930 lbs</p>
                    <div className="cardButtonDiv">
                        <button className="storeBuyButton">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
