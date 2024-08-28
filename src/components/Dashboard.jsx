import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const drawerWidth = 240;

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginRight: "20px" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button key="Dashboard">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button key="Profile">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button key="Logout" onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Welcome Back!
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Let's get started with your tasks
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Recent Activity
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Stay updated with your recent actions
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2">- Task 1 completed</Typography>
                <Typography variant="body2">- New assignment received</Typography>
                <Typography variant="body2">- Project meeting scheduled</Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  View All
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Statistics
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Key metrics and performance indicators
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <TrendingUpIcon sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h6">Project Completion: 75%</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CalendarTodayIcon sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h6">Upcoming Deadlines: 3</Typography>
                </Box>
                <Button variant="contained" sx={{ mt: 2 }}>
                  View Stats
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Announcements
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Latest updates and news
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2">
                  - New policy updates effective from next month
                </Typography>
                <Typography variant="body2">
                  - Upcoming company event on 15th of this month
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
