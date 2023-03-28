import React from 'react'
import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";


const Navbar = () => {

  //toggle mobile menu when it's in small screen
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  //useMediaQuery hook in material ui helps us determin if the current screen size of the user is below/ higher the min width
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme(); //use colors form theme.js

  //get various color theme form theme.js
  const neutralLight = theme.palette.neutral.light; 
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;


  const fullName = `${user.firstName} ${user.lastName}`;

  return (

    <FlexBetween 
    <div>Navbar</div>
  )
}

export default Navbar