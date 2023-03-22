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
  const data = [
    { label: "AddOns: Extra Cheese" },
    { label: "Note: Spicy" },
    
  ];

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
    <Card sx={{ maxWidth: 345 }}>
      <Box m="1rem" display="flex" justifyContent="space-between">
        <Chip label="Order #126453" color={theme.palette.secondary[300]} />
        <Box> 13 March 2023 &nbsp; 16:00</Box>
      </Box>

      <CardContent>
        <Box>
          {" "}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                width="15rem"
              >
                <Typography flex={1}>Creamy Pesto Pasta</Typography>
                <Box display="flex" justifyContent="space-between" width="5rem">
                  <Typography>X 2</Typography>
                  <Typography>Qr 62</Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {open &&
                data.map((item) => (
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                width="15rem"
              >
                <Typography flex={1}>Chicken Shawarma</Typography>
                <Box display="flex" justifyContent="space-between" width="5rem">
                  <Typography>X 2</Typography>
                  <Typography>Qr 62</Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {open &&
                data.map((item) => (
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                ))}
            </AccordionDetails>
          </Accordion>
          <Typography variant="body2" color="text.secondary">
            <Box display="flex" justifyContent="end" m="0.5rem">
              <Typography variant="h5" bold>
                Total:&nbsp; Qr 234
              </Typography>
            </Box>

            <Divider />
          </Typography>
        </Box>

        {/* <Box m="0.5rem 1rem">
          <Typography variant="h4" sx={{ color: "#666666" }}>
            Delivery Address
          </Typography>
          <Typography variant="subtitle1">
            <List dense>
              <ListItem>
                <ListItemText primary="Delivery Zone: &nbsp; &nbsp;Al khor" />
              </ListItem>
            </List>
          </Typography>
        </Box> */}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          sx={{ color: "#4cceac", borderColor: "#4cceac" }}
        >
          Accept
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "#af3f3b", borderColor: "#af3f3b" }}
        >
          Reject
        </Button>
      </CardActions>
      <Box display="flex" justifyContent="center" m="1rem">
        {" "}
        <Button
          variant="outlined"
          sx={{ color: "#ffd166", borderColor: "#ffd166" }}
        >
          Ready to Pick
        </Button>
      </Box>
    </Card>
  );
};

export default OrderCard;
