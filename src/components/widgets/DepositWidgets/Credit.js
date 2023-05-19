import React from 'react';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import PieGraphDepoits from "../../Graphs/Deposits/PieChart"

export default function DepositWidg() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "100%",
        minWidth: "100%",
        height: "45%",
        borderRadius: "20px",
        boxShadow: 12,
        marginTop: 0,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)',
        padding: '20px'
       
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: '26pt',fontWeight: 600, opacity:0.8  }}>Deposit</Typography>
        <Divider sx={{backgroundColor:'rgba(151, 151, 151, 0.25)' , height: 2}}/>
        <PieGraphDepoits/>
      </CardContent>
    </Card>
  )
}

