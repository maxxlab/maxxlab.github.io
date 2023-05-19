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
  marginBottom: '20px'
};

let styleOne = {
  backgroundColor: back,
  opacity: 0.8,
  width: '100%',
  marginBottom: '20px'
};

export default function GoalsCharExp() {
  const [progress, setProgress] = useState(now1);
  const [background, setBackground] = useState(back)

  
   

  return (
    <div style={{ width: '90%', margin:'0 auto' , marginTop:'15%'}}>
      <div className='box'>
        <ProgressBar variant={variant} style={{ ...styleOne, backgroundColor: background }} now={progress} />
      </div>
      <br />
      <ProgressBar variant="info" style={style} now={now2} />
      <br />
      <ProgressBar variant="info" style={style} now={now3} />
    </div>
  );
}

