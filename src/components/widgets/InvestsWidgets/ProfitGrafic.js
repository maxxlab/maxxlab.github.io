import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import PieGraphCrypt from "../../Graphs/Credits/PieGraph";

export default function ProfitGrafic() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "100%",
        minWidth: "100%",
        minHeight: "406px",
        borderRadius: "20px",
        boxShadow: 12,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Typography sx={{fontSize: '27pt'}}>23,654$</Typography>
        <Typography sx={{ marginBottom: "15px", color: '#3C3C43', opacity: '0.6' }}>Profit</Typography>
        <PieGraphCrypt/>
      </CardContent>
    </Card>
  );
}
