import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/GoalsChar.css";

let variant = "info";
let back = "#D1FFFC";
let now1 = 60;
let now2 = 50;
let now3 = 80;


const style = {
  backgroundColor: '#D1FFFC',
  opacity: 0.8,
  width: '75%',
};

let styleOne = {
  backgroundColor: back,
  opacity: 0.8,
  width: '75%',
};

export default function GoalsCharDash() {
  const [progress, setProgress] = useState(now1);
  const [progressA, setProgressA] = useState(now2);
  const [progressB, setProgressB] = useState(now3);
  const [background, setBackground] = useState(back)

  
  function onClick() {
   if (progress < 100) {
     setProgress(progress + 5);
     if (progress === 85) {
       setBackground("#FCCFC6");
       variant="danger"
     }
   }
 }
 function onClickA() {
   if (progress < 100){
      setProgressA( progressA + 3)
   }

 }
 function onClickB() {
   if (progress < 100){
      setProgressB( progressB + 3)
   }
 }

  return (
    <div style={{ width: '95%', marginTop:40 }}>
      <div className='goals-box'>
         <img onClick={onClick} style={{borderRadius:10, width:'10%', marginRight: 20, opacity:0.7, cursor: 'pointer'}} src='https://i.pinimg.com/564x/c2/f4/b6/c2f4b60964057e6727f50068a710f09a.jpg' alt='limit'/>
         <div style={{width: '90%'}}>
         <h2 style={{fontSize: 23,fontWeight:600, opacity:0.8}}>My month limit</h2>
         <div style={{display: 'flex' , alignItems: 'center', justifyContent:'space-between'}}><ProgressBar variant={variant} style={{ ...styleOne, backgroundColor: background }} now={progress} /> <span style={{fontWeight:700}}>{progress} %</span><span>Limit</span></div>
         </div>
      </div>
      <br />
      <div className='goals-box' style={{marginTop:10}}>
         <img onClick={onClickA} style={{borderRadius:10, width:'10%', marginRight: 20, opacity:0.7, cursor: 'pointer'}} src='https://i.pinimg.com/564x/8e/c3/10/8ec3109a17d19a66073d03cf3f13886a.jpg' alt='limit'/>
         <div style={{width: '90%'}}>
         <h2 style={{fontSize: 23,fontWeight:600, opacity:0.8}}>3$ Saved per day</h2>
         <div style={{display: 'flex' , alignItems: 'center', justifyContent:'space-between'}}><ProgressBar variant="info" style={style} now={progressA} /> <span style={{fontWeight:700}}>{progressA}%</span><span>Saved</span></div>
         </div>
      </div>
      <br />
      <div className='goals-box' style={{marginTop:10}}>
         <img onClick={onClickB} style={{borderRadius:10, width:'10%', marginRight: 20, opacity:0.7, cursor: 'pointer'}} src='https://i.pinimg.com/564x/ae/9e/f9/ae9ef95f49064dabc670b2b8e685d30e.jpg' alt='limit'/>
         <div style={{width: '90%'}}>
         <h2 style={{fontSize: 23,fontWeight:600, opacity:0.8}}>Doctor savings</h2>
         <div style={{display: 'flex' , alignItems: 'center', justifyContent:'space-between'}}><ProgressBar variant="info" style={style} now={progressB} /> <span style={{fontWeight:700}}>{progressB}%</span><span>Saved</span></div>
         </div>
      </div>
      </div>
  );
}

// import React, { useState } from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./styles/GoalsChar.css";

// let variant = "info";
// let back = "#D1FFFC";
// let now1 = 80;
// let now2 = 50;
// let now3 = 80;

// const style = {
//   backgroundColor: '#D1FFFC',
//   opacity: 0.8,
//   width: '75%',
// };

// let styleOne = {
//   backgroundColor: back,
//   opacity: 0.8,
//   width: '75%',
// };

// export default function GoalsCharDash() {
//   const [progress, setProgress] = useState(now1);
//   const [progressA, setProgressA] = useState(now2);
//   const [progressB, setProgressB] = useState(now3);
//   const [background, setBackground] = useState(back)

//   function onClick() {
//     if (progress < 100) {
//       setProgress(progress + 1);
//       if (progress === 84) {
//         setBackground("#FCCFC6");
//         variant = "danger";
//       }
//     }
//   }

//   function onClickA() {
//     setProgressA(progressA + 1);
//   }

//   function onClickB() {
//     setProgressB(progressB + 1);
//   }

//   return (
//     <div style={{ width: '95%', marginTop: 40 }}>
//       <div className='goals-box'>
//         <img
//           onClick={() => {
//             setProgress(progress + 1);
//           }}
//           style={{ borderRadius: 10, width: '10%', marginRight: 20, opacity: 0.7, cursor: 'pointer' }}
//           src='https://i.pinimg.com/564x/c2/f4/b6/c2f4b60964057e6727f50068a710f09a.jpg'
//           alt='limit'
//         />
//         <div style={{ width: '90%' }}>
//           <h2 style={{ fontSize: 23, fontWeight: 600, opacity: 0.8 }}>My Month Limit</h2>
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <ProgressBar variant={variant} style={styleOne} now={now1} /> <span style={{ fontWeight: 700 }}>{now1}%</span><span>Limit</span>
//           </div>
//         </div>
//       </div>

//       <br />
//       <div className='goals-box' style={{ marginTop: 10 }}>
//         <img
//           onClick={() => {
//             setProgressA(progressA + 1);
//           }}
//           style={{ borderRadius: 10, width: '10%', marginRight: 20, opacity: 0.7, cursor: 'pointer' }}
//           src='https://i.pinimg.com/564x/8e/c3/10/8ec3109a17d19a66073d03cf3f13886a.jpg'
//           alt='limit'
//         />
//         <div style={{ width: '90%' }}>
//           <h2 style={{ fontSize: 23, fontWeight: 600, opacity: 0.8 }}>My Month Limit
//           </h2>
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <ProgressBar variant="info" style={style} now={now2} /> <span style={{ fontWeight: 700 }}>{now2}%</span><span>Limit</span>
//           </div>
//         </div>
//       </div>
//       <br />
//       <div className='goals-box' style={{ marginTop: 10 }}>
//         <img
//           onClick={() => {
//             setProgressB(progressB + 1);
//           }}
//           style={{ borderRadius: 10, width: '10%', marginRight: 20, opacity: 0.7, cursor: 'pointer' }}
//           src='https://i.pinimg.com/564x/ae/9e/f9/ae9ef95f49064dabc670b2b8e685d30e.jpg'
//           alt='limit'
//         />
//         <div style={{ width: '90%' }}>
//           <h2 style={{ fontSize: 23, fontWeight: 600, opacity: 0.8 }}>My Month Limit</h2>
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <ProgressBar variant="info" style={style} now={now3} /> <span style={{ fontWeight: 700 }}>{now3}%</span><span>Limit</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }