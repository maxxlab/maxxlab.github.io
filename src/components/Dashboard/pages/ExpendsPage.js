import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AddIncome from "../../widgets/ExpendsWidgets/AddIncome";
import AddExpend from "../../widgets/ExpendsWidgets/AddExpend";
import TotalProfit from "../../widgets/ExpendsWidgets/TotalProfit";
import TransactionHistoryWidget from "../../widgets/DashboardWidgets/TransactionHistoryWidget";
import Balance from "../../widgets/DashboardWidgets/Balance";
import Comparison from "../../widgets/DashboardWidgets/Comparison";
import MakeLimitIncomeDonate from "../../widgets/ExpendsWidgets/MakeLimitIncomeDonate";
import ComparisonExpends from "../../widgets/ExpendsWidgets/ComparsionExpends";
import TransactionHistoryExpendsWidget from "../../widgets/ExpendsWidgets/TransitionHistoriExpends";
import BalanceExpends from "../../widgets/ExpendsWidgets/BalanceExpends";

export default function ExpendsPage() {
  return (
    <Box sx={{ width: '95%', padding: "20px", flexGrow: 1, margin: '0 auto' , marginTop: '30px'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <AddIncome />
        <AddExpend />
        <TotalProfit/>
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <TransactionHistoryExpendsWidget width="52%" height="538px"/>
        <BalanceExpends  height="400px"/>
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'space-between', width: "100%" }}>
        <ComparisonExpends/>
        <MakeLimitIncomeDonate/>
      </Box>
    </Box>
  );
}
