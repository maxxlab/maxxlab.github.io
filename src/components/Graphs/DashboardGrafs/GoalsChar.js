import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/GoalsChar.css";

let variant = "info";
let back = "#D1FFFC";
let now1 = 80;
let now2 = 50;
let now3 = 80;


const style = {
  backgroundColor: '#D1FFFC',
  opacity: 0.8,
};

let styleOne = {
  backgroundColor: back,
  opacity: 0.8,
  width: 400,
};

export default function GoalsCharDash() {
  const [progress, setProgress] = useState(now1);
  const [background, setBackground] = useState(back)

  
  function onClick() {
   if (progress < 100) {
     setProgress(progress + 1);
     if (progress === 84) {
       setBackground("#FCCFC6");
       variant="danger"
     }
   }
 }

  return (
    <div style={{ width: 500 }}>
      <div className='box'>
        <ProgressBar variant={variant} style={{ ...styleOne, backgroundColor: background }} now={progress} /> {progress}
        <button onClick={onClick}>+</button>
      </div>

      <br />
      <ProgressBar variant="info" style={style} now={now2} />
      <br />
      <ProgressBar variant="info" style={style} now={now3} />
    </div>
  );
}

