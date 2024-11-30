import React from "react";
import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";

const Header = ({isDark}) => {
  return (
    <Box
      sx={{
        margin: "10px", // Margin on all sides
        borderRadius: "12px", // Rounded corners
        overflow: "hidden", // Ensures content inside doesn't spill out of the rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for better appearance
        background: isDark ? "#1e1e2f" : "#f4f4f4", // Updated background color to match the uploaded image
      }}
    >
      <AppBar position="static" sx={{ background: "#f5f5f5", color: "#000" }}> {/* Updated AppBar color */}
        <Toolbar>
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
