import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Avatar, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Header = ({ onSidebarToggle, isDark }) => {
  return (
    <Box
      sx={{
        margin: "12px", 
        borderRadius: "12px", 
        overflow: "hidden", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
      }}
    >
      <AppBar
        position="static"
        sx={{
          borderRadius: "12px", 
          background: isDark ? "#1e1e2f" : "#f4f4f4", 
          color: isDark ? "#fff" : "#000", 
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { md: "none" } }} 
            onClick={onSidebarToggle}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Avatar alt="Profile" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
