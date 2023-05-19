import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import PieGraphDash from "../../Graphs/DashboardGrafs/PieCraph";

export default function Balance(props) {
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
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: '16pt', color: '#3C3C43', opacity: '0.6' }}>Balance</Typography>
        <Typography sx={{fontSize: '27pt'}}>5.435,654$</Typography>
        <Typography sx={{marginBottom: '15px',fontSize: '16pt'}}>May</Typography>
        <PieGraphDash/>
        <Divider />
      </CardContent>
    </Card>
  );
}
