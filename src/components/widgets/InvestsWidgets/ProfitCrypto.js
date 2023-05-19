import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import LineGraphCrypto from "../../Graphs/Credits/LineGraph";

export default function ProfitCrypto() {
  return (
    <Card
      sx={{
        marginTop: "20px",
        maxWidth: "50%",
        minWidth: "100%",
        minHeight: "416px",
        borderRadius: "20px",
        boxShadow: 12,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Typography sx={{fontSize: '27pt'}}>23,654$</Typography>
        <Typography sx={{ marginBottom: "15px", color: '#3C3C43', opacity: '0.6' }}>Profit</Typography>
        <LineGraphCrypto/>
      </CardContent>
    </Card>
  );
}
