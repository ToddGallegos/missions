import walterImg from "../../images/walterwhite.jpg";
import "./missions.css";
import { useState, useEffect } from "react";

export default function Missions(props) {

  const [accepted, setAccepted] = useState(false);
  const [missionCompleted, setMissionCompleted] = useState(false)

  // useEffect(() => {
  //   props.setMoney(props.user.money)
  // }, [earned]);

  const accept = () => {
    setAccepted(true);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let earned = props.user.money + 80000;
    props.setUser({...props.user, money: earned })
    const reqBody = {
      username: props.user.username,
      money: earned
    };
    const response = await fetch(
      "http://localhost:5000/money",
      {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(reqBody),
      }
    );
    const data = await response.json();
    console.log(data);
    alert(data.message)

      setMissionCompleted(true)
  }

  return (
      <div className="missionsContainer">
        <h1 className="missionsTitle">MISSIONS</h1>
        {!missionCompleted &&
            <div className="missionCard">
              <img className="npcPic" src={walterImg} alt="walter white" />
              <figcaption className="missionCaption">"My name?  You can call me...Heisenberg."</figcaption>
              <h2 className="details">Mission Details</h2>
              <p className="missionParagraph">My associates speak highly of your piloting skills.  I happen to have some product that needs to be flown across the border from Mexico into Texas.  If you get the job done, I may have more opportunities for you.</p>
              <p className="missionParagraph"><span className="missionSpan">From: </span>MMLG Los Ebanos</p>
              <p className="missionParagraph"><span className="missionSpan">To: </span>92TA Drennan Farm</p>
              <p className="missionParagraph"><span className="missionSpan">Pay: </span>$125/lb</p>
              <p className="missionParagraph"><span className="missionSpan">Bonus: </span>If you deliver 400lbs or more, we'll give you $200/lb.</p>
              <div className="missionButtons">
                {!accepted &&
                  <button onClick={accept} className="missionButton">Accept</button>
                }
                
                {accepted &&
                  <div className="missionForm">
                    <p>Mission accepted!</p>
                    <form className="submissionForm" onSubmit={handleSubmit} autoComplete="off">
                      <label htmlFor="cargoWeight">Cargo Weight: </label> <br />
                      <input type="text" name="cargoWeight" id="cargoWeight" />
                      <br />
                      <button id="missionComplete" type="submit">Completed!</button>
                    </form>
                  </div>
                }
              </div>
            </div>
        }
        {missionCompleted &&
          <>
            <h2 className="missionCompleted">Mission Completed</h2>
            <p className="completedParagraph">Payment: $80,000</p>
            <p className="completedParagraph">Check back soon for more missions...</p>
          </>
        }
      </div>
  )
}
