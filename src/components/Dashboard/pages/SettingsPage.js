import React from 'react'
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import UserWidget from '../../widgets/SettingsWidgets/UserWidget';
import SettingsList from '../../widgets/SettingsWidgets/SettingsList';

export default function SettingsPage() {
  return (
    <Box sx={{ padding: "20px", flexGrow: 1 }}>
      <UserWidget/>
      <SettingsList/>
    </Box>
  )
}
