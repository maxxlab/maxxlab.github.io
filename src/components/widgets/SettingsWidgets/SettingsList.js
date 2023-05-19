import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SettingsTile from "./SettingsTile";

export default function SettingsList() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "785px",
        minWidth: "80%",
        // maxHeight: "108px",
        minHeight: "500px",
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <SettingsTile title="Password" value="***********" icon="password"/>
          <hr/>
          <SettingsTile title="Phone" value="+380******734" icon="phone" />
          <hr/>
          <SettingsTile title="Email" value="+380******734" icon="email" />
          <hr/>
          <SettingsTile title="Time Zone" value="+380******734" icon="time" />
        </Box>
      </CardContent>
    </Card>
  );
}
