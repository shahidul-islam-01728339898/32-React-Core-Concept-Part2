import { useState } from "react";

const batsmanStyle = {
  margin: "40px",
  padding: "40px",
  border: "5px solid green",
  borderRadius: "10px",
};

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };

  const [four, setFour] = useState(0);
  const handleFour = () => {
    const updatedFour = four + 4;
    setFour(updatedFour);
  };

  const [six, setSix] = useState(0);
  const handleSix = () => {
    const updatedSix = six + 6;
    setSix(updatedSix);
  };

  return (
    <div style={batsmanStyle}>
      <h1>Banladesh</h1>
      <h1> Player: Bangla Batsman</h1>
      <h1>Single Score: {runs} </h1>
      <button onClick={handleSingle}>Singles: {runs}</button> <br></br>
      <br></br>
      <h1>Four Score :{four} </h1>
      <button onClick={handleFour}>Four</button>
      <br></br> <br></br>
      <h1>Six Score: {six} </h1>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
