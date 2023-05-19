import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import GoalsCharDash from "../../Graphs/DashboardGrafs/GoalsChar";

export default function SavingsGoals() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "623px",
        minWidth: "55%",
        maxHeight: "444px",
        borderRadius: "20px",
        boxShadow: 12,
        margin: 2,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent sx={{marginTop:2,marginLeft:2}}>
        <Typography sx={{fontWeight:700,fontSize:22, marginBottom: "15px", color: ' rgb(80, 80, 80)'}}>My Saving Goals</Typography>
        <Divider sx={{backgroundColor:'rgba(151, 151, 151, 0.25)' , height: 2}}/>
        <GoalsCharDash/>
      </CardContent>
    </Card>
  );
}
