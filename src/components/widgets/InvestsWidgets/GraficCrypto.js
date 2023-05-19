import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import BarCharCrypt from "../../Graphs/Credits/BarChart";

export default function GraficCrypto() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "100%",
        minWidth: "100%",
        maxHeight: "470px",
        minHeight: "370px",
        borderRadius: "20px",
        boxShadow: 12,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
        
      }}
    >
      <CardContent>
        <Typography sx={{ color: '#3C3C43', opacity: '0.6' }}>Comparison</Typography>
        <Typography sx={{ fontSize: '16pt' }}>2021 (38,079$)</Typography>
        <BarCharCrypt/>
      </CardContent>
    </Card>
  );
}
