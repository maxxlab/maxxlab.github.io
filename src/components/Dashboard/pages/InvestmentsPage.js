import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ProfitWidget from "../../widgets/DashboardWidgets/ProfitWidget";
import TotalProfit from "../../widgets/ExpendsWidgets/TotalProfit";
 import Crypto from "../../widgets/InvestsWidgets/Crypto";
// import Comparison from "../../widgets/DashboardWidgets/Comparison";
// import CryptoBalance from "../../widgets/InvestsWidgets/CryptoBalance";
import ListOfCryptos from "../../widgets/InvestsWidgets/ListOfCryptos"
import ProfitCrypto from "../../widgets/InvestsWidgets/ProfitCrypto";
import GraficCrypto from "../../widgets/InvestsWidgets/GraficCrypto";
import ProfitGrafic from "../../widgets/InvestsWidgets/ProfitGrafic";

export default function InvestmentsPage() {
  return (
    <Box sx={{width: '95%', padding: "20px", flexGrow: 1 , margin: '0 auto', marginTop: '30px'}}>
      <Box sx={{ display: "flex", justifyContent: "space-between" , width:'100%'}}>
        <Box sx={{width:'50%'}}>
          <ProfitCrypto />
          <Crypto sx={{ display: "flex", justifyContent: "space-between" }}/>
          <ProfitGrafic />
          <GraficCrypto/>
        </Box>
        {/* WATCHLIST */}
        <Box sx={{width: '45%'}}>
        <ListOfCryptos/>
        </Box>
      </Box>

      

    </Box>
  );
}
