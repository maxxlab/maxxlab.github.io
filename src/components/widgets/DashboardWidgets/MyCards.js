import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import UncontrolledExample from "../../Graphs/DashboardGrafs/Carouser";

export default function MyCards() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "50%",
        minWidth: "52%",
        minHeight: "100%",
        borderRadius: "20px",
        boxShadow: 12,
        marginTop: 2,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Typography sx={{ marginBottom: "15px", fontSize: '26pt', fontWeight: 700, color: 'rgb(84, 84, 84)' }}>My Cards</Typography>
        <Divider sx={{backgroundColor:'rgba(151, 151, 151, 0.25)',height:2,marginBottom:'15px'}}/>
        <UncontrolledExample/>
      </CardContent>
    </Card>
  );
}
