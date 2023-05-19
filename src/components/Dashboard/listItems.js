import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PieChartIcon from "@mui/icons-material/PieChart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { Link, Outlet } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>

    <Link to="/expends" style={{ textDecoration: "none", color: "#000000" }}>
      <ListItemButton>
        <ListItemIcon>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText primary="Expends" />
      </ListItemButton>
    </Link>

    <Link to="/credits" style={{ textDecoration: "none", color: "#000000" }}>
      <ListItemButton>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Credits" />
      </ListItemButton>
    </Link>

    <Link to="/deposits" style={{ textDecoration: "none", color: "#000000" }}>
      <ListItemButton>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Deposits" />
      </ListItemButton>
    </Link>

    <Link to="/investments" style={{ textDecoration: "none", color: "#000000" }}>
      <ListItemButton>
        <ListItemIcon>
          <CurrencyBitcoinIcon />
        </ListItemIcon>
        <ListItemText primary="Investments" />
      </ListItemButton>
    </Link>

    <Link to="/settings" style={{ textDecoration: "none", color: "#000000" }}>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </Link>

    <Outlet />
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
