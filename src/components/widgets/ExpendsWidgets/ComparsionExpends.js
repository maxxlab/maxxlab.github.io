import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import BarCharExp from "../../Graphs/Expends/BarChart";

export default function ComparisonExpends(props) {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "35%",
        minWidth: "50%",
        maxHeight: "270px",
        minHeight: "400px",
        borderRadius: "20px",
        boxShadow: 12,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)',
        paddingTop: 2,
        paddingLeft: 2,
      }}
    >
      <CardContent>
        <Typography sx={{fontSize:15, fontWeight: 600, color: '#3C3C43', opacity: '0.8' }}>Comparison</Typography>
        <Typography sx={{ fontWeight: 600 ,fontSize: '22pt', opacity:0.8 }}>2021 (38,079$)</Typography>
        <BarCharExp/>
      </CardContent>
    </Card>
  );
}
