import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "./listItems";
import DashboardPage from "./pages/DashboardPage";
import ExpendsPage from "./pages/ExpendsPage";
import CreditsPage from "./pages/CreditsPage";
import SettingsPage from "./pages/SettingsPage";
import InvestmentsPage from "./pages/InvestmentsPage";
import DepositPage from "./pages/DepositPage";
import "./styles.css"

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => true,
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#4B48EC",
    },
  },
});

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        <Box sx={{ display: "flex" ,}}>
          <CssBaseline />
          <AppBar position="absolute" open={open} sx={{backgroundColor: 'white', color: 'black',background: 'rgba(255, 255, 255, 0)',backdropFilter: 'blur(5px)'}}>
            <Toolbar
              sx={{
                pr: "24px", 
                background: 'rgba(255, 255, 255, 0.95)',backdropFilter: 'blur(5px)'
                // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px", background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(5px)',
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon sx={{background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'}}/>
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1,  textShadow:' rgba(0, 0, 0, 0.51) 1px 0 10px;',fontSize:'25px'}}
              >
                D&D Finance App
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer  variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List  component="nav">
              {mainListItems}
              <Divider sx={{ my: 1 }} />
              {/* {secondaryListItems} */}
            </List>
          </Drawer>
          <Box
          className="Box-back"
            component="main"
            sx={{
              // backgroundColor: (theme) =>
              //   theme.palette.mode === "light"
              //     ? 'red'
              //     : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Box sx={{ paddingTop: "64px" }}>
              <Routes>
                <Route index path="/" element={<DashboardPage />} />
                <Route path="/expends" element={<ExpendsPage />} />
                <Route path="/credits" element={<CreditsPage />} />
                <Route path="/deposits" element={<DepositPage />} />
                <Route path="/investments" element={<InvestmentsPage />} />
                <Route path="/settings" element={<SettingsPage />} />

                {/* <Route path="blogs" element={<Blogs />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NoPage />} /> */}
              </Routes>
              {/* <DashboardPage /> */}
            </Box>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
