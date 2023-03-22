import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./scenes/dashboard";
import OrderHistory from "./scenes/orderHistory";
import Menu from "./scenes/Menu";
import Login from "./scenes/logIn";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
// import { useSelector } from "react-redux";
import Layout from "./scenes/layout";

function App() {
  // const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings("dark")), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/orderHistory" element={<OrderHistory />} />
              <Route path="/menu" element={<Menu />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
