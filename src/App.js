import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./Components/Login";
import SwitchTheme from "./Theme/SwitchTheme";

import { ThemeProvider, Paper } from "@mui/material";
import { createTheme, Container } from "@mui/material";
import { main } from "./Theme/colors";
import ChatBox from "./Containers/ChatBox";
import Main from "./Components/Main";
import { Box } from "@mui/system";

const App = () => {
  const [dark, setdark] = useState(true);
 

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: {
        main: main.primary,
      },
      secondary: {
        main: main.google_button,
      },
    },
  });

  const changeTheme = () => {
    // alert("toggle called");
    setdark(!dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Paper sx={{ borderRadius: 0 }}>
          <SwitchTheme toggleMode={changeTheme} mode={dark} />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <Box
                  fullWidth
                  sx={{ margin: "0", padding: 0, height: "100vh" }}
                >
                  <Main />
                </Box>
              }
            />
          </Routes>
        </Paper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
