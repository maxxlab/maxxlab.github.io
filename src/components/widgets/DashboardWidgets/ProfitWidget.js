import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import LineGraphdashboard from "../../Graphs/DashboardGrafs/LineGrah";

export default function ProfitWidget() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "50%",
        minWidth: "43%",
        minHeight: "316px",
        borderRadius: "20px",
        boxShadow: 12,
        margin: 2,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Typography sx={{fontSize: '27pt'}}>23,654$</Typography>
        <Typography sx={{ marginBottom: "15px", color: '#3C3C43', opacity: '0.6' }}>Profit</Typography>
        <LineGraphdashboard/>
      </CardContent>
    </Card>
  );
}
