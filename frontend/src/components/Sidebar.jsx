import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  styled,
  Divider,
  Drawer,
  IconButton,
} from "@mui/material";
import { LightMode, DarkMode, Dashboard, Group, Business, Receipt, Settings, Menu } from "@mui/icons-material";

// Custom Switch Styled Component
const CustomSwitch = styled("div")(({ isDark }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "6px",
  borderRadius: 20,
  backgroundColor: isDark ? "#333" : "#ccc",
  width: 80,
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    backgroundColor: isDark ? "#444" : "#ddd",
  },
}));

const ToggleThumb = styled("div")(({ isDark }) => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  backgroundColor: "#fff",
  position: "absolute",
  top: "50%",
  left: isDark ? "calc(100% - 24px)" : "4px",
  transform: "translateY(-50%)",
  transition: "all 0.3s ease",
}));

const Sidebar = ({ toggleTheme, isDark, activeItem, isOpen, onClose }) => {
  const drawerWidth = 250;

  return (
    <>
      {/* Sidebar Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: "block", md: "none" }, // Show only on mobile
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        <SidebarContent toggleTheme={toggleTheme} isDark={isDark} activeItem={activeItem} />
      </Drawer>

      {/* Sidebar for Desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "block" }, // Hide on mobile
          width: drawerWidth,
          flexShrink: 0,
        }}
      >
        <SidebarContent toggleTheme={toggleTheme} isDark={isDark} activeItem={activeItem} />
      </Box>
    </>
  );
};

const SidebarContent = ({ toggleTheme, isDark, activeItem }) => (
  <Box
    sx={{
      width: 250,
      height: "100vh",
      background: isDark ? "#1e1e2f" : "#f4f4f4",
      color: isDark ? "#fff" : "#000",
      p: 2,
      borderRadius: 5,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      margin: "10px",
    }}
  >
    {/* Logo Section */}
    <Typography
      variant="h5"
      sx={{
        textAlign: "center",
        fontWeight: "bold",
        mb: -10, // Reduced margin below the heading
      }}
    >
      ORGVISTA
    </Typography>

    {/* Menu Section */}
    <List sx={{ mt: 1 }}>
      {[
        { text: "Dashboard", icon: <Dashboard />, id: "dashboard" },
        { text: "Manage Sub Admins", icon: <Group />, id: "manageSubAdmins" },
        { text: "Manage Organizations", icon: <Business />, id: "manageOrganizations" },
        { text: "Billing Management", icon: <Receipt />, id: "billingManagement" },
        { text: "System Updates", icon: <Settings />, id: "systemUpdates" },
      ].map((item) => (
        <ListItem
          button
          key={item.text}
          sx={{
            mb: 1,
            borderRadius: 8,
            backgroundColor: activeItem === item.id ? (isDark ? "#333" : "#e0e0e0") : "transparent",
            color: activeItem === item.id ? (isDark ? "#fff" : "#000") : "inherit",
            "&:hover": {
              backgroundColor: isDark ? "#444" : "#ddd",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {item.icon}
            <ListItemText
              primary={item.text}
              sx={{
                ml: 2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            />
          </Box>
        </ListItem>
      ))}
    </List>

    <Divider sx={{ my: 2 }} />

    {/* Light/Dark Mode Toggle */}
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
      <LightMode fontSize="small" />
      <CustomSwitch onClick={toggleTheme} isDark={isDark}>
        <ToggleThumb isDark={isDark} />
      </CustomSwitch>
      <DarkMode fontSize="small" />
    </Box>
  </Box>
);

export default Sidebar;
