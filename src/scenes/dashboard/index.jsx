import { Box,useMediaQuery, } from "@mui/material";
import React from "react";
import OrderCard from "../../components/OrderCard";

const Dashboard = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      m="20px"
      display="grid"
      gridTemplateColumns="repeat(3, minmax(0, 1fr))"
      justifyContent="space-between"
      rowGap="20px"
      columnGap="1.33%"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </Box>
  );
};

export default Dashboard;
