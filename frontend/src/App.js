import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  // Manage theme state in App
  const [isDark, setIsDark] = useState(true);

  // Create theme dynamically based on the state
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",
          background: {
            default: isDark ? "#121212" : "#ffffff",
            paper: isDark ? "#1e1e2f" : "#f4f4f4",
          },
          text: {
            primary: isDark ? "#fff" : "#000",
          },
        },
      }),
    [isDark]
  );

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar with toggleTheme passed as a prop */}
        <Sidebar toggleTheme={toggleTheme} isDark={isDark} />

        {/* Main Content */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Header */}
          <Header />

          {/* Dashboard */}
          <Dashboard />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
