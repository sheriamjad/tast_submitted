import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  // Manage theme state
  const [isDark, setIsDark] = useState(true);
  // Manage sidebar collapse
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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
        {/* Sidebar */}
        <Sidebar
          toggleTheme={toggleTheme}
          isDark={isDark}
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Header with a button to toggle the sidebar */}
          <Header onSidebarToggle={() => setSidebarOpen(!isSidebarOpen)} isDark={isDark} />

          
          <Dashboard />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
