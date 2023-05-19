// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import { Card, CardContent, CardMedia } from "@mui/material";
// import { Typography } from "@mui/material";
// import "./styles/Investmen.css"
// import axios from "axios";
// const client = axios.create({
//   baseURL: "https://back-end-hack.up.railway.app/api/",
// });

// export default function Investments() {
//   const [investments, setInvestments] = useState([]);
//   let balance = 12322
//   useEffect(() => {
//     client.get("investments").then((response) => {
//       setInvestments(response.data);
//       // console.log(response)
//       console.log(response.data);
//     });
//   }, []);
//   return (
//     <Card
//       sx={{
//         marginTop: "30px",
//         maxWidth: "45%",
//         minWidth: "45%",
//         maxHeight: "314px",
//         minHeight: "310px",
//         borderRadius: "20px",
//         marginRight: "10px",
//         boxShadow: 12,
//         background: 'rgba(255, 255, 255, 0.7)',
//         backdropFilter: 'blur(5px)'
//       }}
//     >
//       <CardContent>
//         <Typography
//           sx={{
//             fontSize: "24pt",
//             marginBottom: "15px",
//             color: "#3C3C43",
//             opacity: "0.6",
//           }}
//         >
//           Investments
//         </Typography>
//         <Divider />
//         <div>
//         <div>
//               <h2>{investments}</h2>
//             </div>
//           <div className="invest-box">
//             <div>
//               <img style={{width:'60%', borderRadius: 100}} src={balance > 0 ? "https://i.pinimg.com/564x/38/3a/86/383a86c9f90bb9b82ef4e186f59e5926.jpg": "https://i.pinimg.com/564x/6e/32/07/6e3207ad912f5009939f1bdbc9ea8831.jpg"}   alt=""/>
//             </div>
//             <div>
//               <div style={{display: 'flex',flexDirection:'column'}}>
//                 <span style={{color:'red',fontWeight:600,opacity:0.8}}>-350</span>
//                 <span>Crypto</span>
//               </div>
//               <div style={{display: 'flex',flexDirection:'column'}}>
//                 <span style={{color:'blue',fontWeight:600,opacity:0.8}}>+350</span>
//                 <span>Crypto</span>
//               </div>

//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
//  }

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import "./styles/Investmen.css";
import axios from "axios";

const client = axios.create({
  baseURL: "https://back-end-hack.up.railway.app/api/",
});

export default function Investments() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    client.get("investments").then((response) => {
      setInvestments(response.data);
      // console.log(response)
      console.log(response.data);
    });
  }, []);

  let balance = 0;
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "45%",
        minWidth: "45%",
        maxHeight: "314px",
        minHeight: "310px",
        borderRadius: "20px",
        marginRight: "10px",
        boxShadow: 12,
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(5px)",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "24pt",
            marginBottom: "15px",
            color: "#3C3C43",
            opacity: "0.6",
          }}
        >
          Investments
        </Typography>
        <Divider />
        <div>
          <div>
            <h2 style={{ fontWeight: 500, opacity: 0.8, margin: "10px 0" }}>
              $
              {investments.forEach(
                (invest) => (balance += invest.priceOfOneInvestments * invest.countOfInvestments)
              )}
              {balance}
            </h2>
          </div>
          <div className="invest-box">
            <div>
              <img
               style={{width:'60%', borderRadius: 100}} src={balance > 0 ? "https://i.pinimg.com/564x/38/3a/86/383a86c9f90bb9b82ef4e186f59e5926.jpg": "https://i.pinimg.com/564x/6e/32/07/6e3207ad912f5009939f1bdbc9ea8831.jpg"} 
                alt=""
              />
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "red", fontWeight: 600, opacity: 0.8 }}>
                  -350
                </span>
                <span>Crypto</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "blue", fontWeight: 600, opacity: 0.8 }}>
                  +350
                </span>
                <span>Crypto</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}