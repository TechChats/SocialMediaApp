import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import Navbar from "scenes/navbar";
import ProfilePage from "scenes/profilePage";
import { themeSettings } from "theme";



function App() {

  //useSelector to grab info from the store
  const mode = useSelector((state)=>state.mode)// grab the mode from the state
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])


  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* CssBaseline helps to reset css */}
        <CssBaseline>
          <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
        </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
