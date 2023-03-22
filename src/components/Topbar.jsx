import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { useContext } from "react";
import { tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Header from "./Header";
import FlexBetween from "./FlexBetween";
import RestaurantLogo from "../assets/almanchab.png";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  //   const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <FlexBetween gap="1.5rem">
        <Box
          component="img"
          alt="profile"
          src={RestaurantLogo}
          height="45px"
          width="45px"
          borderRadius="50%"
          sx={{ objectFit: "cover" }}
        />

        <Header title="Al Manchab" subtitle="Arabic Cusine" />
      </FlexBetween>
      {/* <Box display="flex" alignItems="center">
        
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          
            <PersonOutlinedIcon onClick={() => navigate("/login")}/>
          
        </IconButton>
      </Box> */}
    </Box>
  );
};

export default Topbar;
