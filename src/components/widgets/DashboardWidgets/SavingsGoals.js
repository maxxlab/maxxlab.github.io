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
        maxHeight: "314px",
        borderRadius: "20px",
        boxShadow: 12,
        margin: 2,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Typography sx={{ marginBottom: "15px", color: '#3C3C43', opacity: '0.6' }}>My Saving Goals</Typography>
        <Divider />
        <GoalsCharDash/>
      </CardContent>
    </Card>
  );
}
