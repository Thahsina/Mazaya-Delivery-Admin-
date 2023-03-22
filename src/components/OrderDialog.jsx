import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  Divider,
  Accordion,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const OrderCard = () => {
  const theme = useTheme();
  const data = [{ label: "AddOns: Extra Cheese" }, { label: "Note: Spicy" }];

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");
  const [open, setOpen] = React.useState(true);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Card>
      <Box m="1rem" display="flex" justifyContent="space-between">
        <Chip label="Order #126453" color={theme.palette.secondary[300]} />
        <Box display="flex" alignItems="center">
          {" "}
          13 March 2023 &nbsp; 16:00
        </Box>
      </Box>

      <CardContent>
        <Box>
          {" "}
          <Box mb='1rem'>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography variant="h4" flex={3}>
                Peperoni Pasta
              </Typography>
              <Box display="flex" flex={1} justifyContent="space-between">
                <Typography>X 2</Typography>
                <Typography>Qr 62</Typography>
              </Box>
            </Box>
            <ListItemText
              primary="Addons : Extra Cheese"
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: "medium",
                paddingLeft: 2,
                color: "#ffe3a3",
              }}
            />
            <ListItemText
              primary="Note : No ketchup"
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: "medium",
                paddingLeft: 2,
                color: "#ffe3a3",
              }}
            />
          </Box>
          <Box mb='1rem'>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography variant="h4" flex={3}>
                Creamy Pesto Pasta
              </Typography>
              <Box display="flex" flex={1} justifyContent="space-between">
                <Typography>X 1</Typography>
                <Typography>Qr 102</Typography>
              </Box>
            </Box>
            <ListItemText
              primary="Addons : Extra Cheese"
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: "medium",
                paddingLeft: 2,
                color: "#ffe3a3",
              }}
            />
            <ListItemText
              primary="Note : Add  Sausages"
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: "medium",
                paddingLeft: 2,
                color: "#ffe3a3",
              }}
            />
          </Box>
          <Box display="flex" justifyContent="end" m="0.5rem">
            <Typography
              variant="button"
              display="block"
              gutterBottom
              fontWeight="bold"
            >
              Total:&nbsp; Qr 234
            </Typography>
          </Box>
          <Divider />
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          sx={{ color: "#4cceac", borderColor: "#4cceac" }}
        >
          Accepted
        </Button>
      </CardActions>
    </Card>
  );
};

export default OrderCard;
