import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import ReplayIcon from "@mui/icons-material/Replay";

const StatsCard = ({ title, value, icon, gradient }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "140px", 
        width: "100%", 
        maxWidth: "280px", 
        borderRadius: "12px", 
        overflow: "hidden", 
        position: "relative", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px", 
        color: "#ffffff", 
        background: gradient, 
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)", 
      }}
    >
      {/* Diagonal Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.2) 100%)", // Diagonal shadow
          zIndex: 1,
        }}
      />

      {/* Icon Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2, 
          backgroundColor: "rgba(255, 255, 255, 0.1)", 
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </Box>

      {/* Title Section */}
      <Typography
        variant="body2"
        sx={{
          position: "relative",
          zIndex: 2, 
          fontSize: "14px",
          fontWeight: "500",
          marginTop: "8px",
        }}
      >
        {title}
      </Typography>

      {/* Value Section */}
      <Typography
        variant="h4"
        sx={{
          position: "relative",
          zIndex: 2,
          fontWeight: "bold",
          fontSize: "24px",
          textAlign: "left", 
          marginTop: "8px",
        }}
      >
        {value}
      </Typography>
    </Paper>
  );
};

const StatsSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", // Enable wrapping for small screens
        gap: 2, // Space between the cards
        justifyContent: { xs: "center", sm: "flex-end" }, // Center on small screens
        mt: 1, // Reduced top margin
      }}
    >
      {/* Query Response Time Card */}
      <StatsCard
        title="Query Response Time"
        value="250 ms"
        icon={<StorageIcon sx={{ color: "#ffffff", fontSize: 24 }} />}
        gradient="linear-gradient(135deg, #1b5e20, #4caf50)" // Green gradient
      />

      {/* CPU Load Time Card */}
      <StatsCard
        title="CPU Load Time"
        value="1 ms"
        icon={<ReplayIcon sx={{ color: "#ffffff", fontSize: 24 }} />}
        gradient="linear-gradient(135deg, #1a237e, #3f51b5)" // Blue gradient
      />
    </Box>
  );
};

export default StatsSection;
