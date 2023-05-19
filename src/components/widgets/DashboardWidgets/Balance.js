// import React from "react";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import { Card, CardContent, CardMedia } from "@mui/material";
// import { Typography } from "@mui/material";
// import PieGraphDash from "../../Graphs/DashboardGrafs/PieCraph";

// export default function Balance(props) {
//   return (
//     <Card
//       sx={{
//         marginTop: "30px",
//         maxWidth: "50%",
//         minWidth: "40%",
//         minHeight: "406px",
//         maxHeight: props.height,
//         borderRadius: "20px",
//         boxShadow: 12,
//         background: 'rgba(255, 255, 255, 0.7)',
//         backdropFilter: 'blur(5px)',
//         paddingTop:3,
//         paddingLeft:3
//       }}
//     >
//       <CardContent>
//         <Typography sx={{ fontSize: '20pt', color: '#3C3C43', opacity: '0.8', fontWeight:600 }}>Balance</Typography>
//         <Typography sx={{fontSize: 40, fontWeight: 700, opacity:0.8}}>5.435,654$</Typography>
//         <Typography sx={{marginBottom: '15px',fontSize: '18pt'}}>May</Typography>
//         <Divider sx={{backgroundColor:'rgba(151, 151, 151, 0.25)',height:2}}/>
//         <PieGraphDash/>
//         <Divider />
//       </CardContent>
//     </Card>
//   );
// }
import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import PieGraphDash from "../../Graphs/DashboardGrafs/PieCraph";
import axios from "axios";

const client = axios.create({
  baseURL: "https://back-end-hack.up.railway.app/api/", 
});



export default function Balance(props) {
  const [balance, setBalance] = useState();

  useEffect(() => {
    client.get("").then((response) => {
      setBalance(response.data.cardList['0'].currentBalance);
      // console.log(response)
    });
  }, []);
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "50%",
        minWidth: "40%",
        minHeight: "406px",
        maxHeight: props.height,
        borderRadius: "20px",
        boxShadow: 12,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)',
        paddingTop:3,
        paddingLeft:3
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: '20pt', color: '#3C3C43', opacity: '0.8', fontWeight:600 }}>Card Balance</Typography>
        <Typography sx={{fontSize: 40, fontWeight: 700, opacity:0.8}}>{balance}$</Typography>
        <Typography sx={{marginBottom: '15px',fontSize: '18pt'}}>May</Typography>
        <Divider sx={{backgroundColor:'rgba(151, 151, 151, 0.25)',height:2}}/>
        <PieGraphDash/>
        <Divider />
      </CardContent>
    </Card>
  );
}