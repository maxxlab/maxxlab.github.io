import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function UserWidget() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "515px",
        minWidth: "70%",
        maxHeight: "108px",
        minHeight: "108px",
        borderRadius: "20px",
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: 'center'}}>
          <AccountCircleIcon sx={{fontSize: '40pt', marginRight: '15px'}} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{fontSize: '24pt', color: '#353535'}}>Ana Souza</Typography>
            <Typography sx={{fontSize: '14pt', color: '#353535'}}>id, media and shopping</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
