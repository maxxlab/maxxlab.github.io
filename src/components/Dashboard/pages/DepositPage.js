import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Credit from "../../widgets/CreditsWidgets/Credit";
import Deposit from "../../widgets/CreditsWidgets/Deposit";
import Bank from "../../widgets/CreditsWidgets/Bank";
import Comparison from "../../widgets/DashboardWidgets/Comparison";
import TransactionHistoryWidget from "../../widgets/DashboardWidgets/TransactionHistoryWidget";
import ListOfBanks from "../../widgets/CreditsWidgets/ListOfBanks";
import TableDataBase from "../../widgets/CreditsWidgets/TableDatabase";

export default function DepositPage() {
  return (
    <Box sx={{ marginTop: "30px",padding: "20px", flexGrow: 1 }}>
      <Box sx={{display: 'flex',justifyContent: "space-around", margin:'0 auto'}}>
        <Box sx={{width: '50%'}}>
          <Credit />
          <Bank />  
        </Box>
          <ListOfBanks />
      </Box>
      
      <Box>
        <TableDataBase/>
      </Box>
      

    </Box>
  );
}
