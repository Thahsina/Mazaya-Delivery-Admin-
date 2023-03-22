import {
  Box,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  //   Switch,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
// import { alpha, styled } from "@mui/material/styles";
import YellowSwitch from "../../components/YellowSwitch";
import Majboos from "../../assets/majboos.png";
import brunet from "../../assets/brunet.jpeg";

const Menu = () => {
  //   const theme = useTheme();
  const [checked, setChecked] = useState(["wifi"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box m="1rem 2.5rem">
      {/* <FlexBetween gap="3.5rem"> */}
      <Header title="Manage Menu" />

      {/* </FlexBetween> */}
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          bgcolor: "background.paper",
        }}
        subheader={<ListSubheader>Toggle Available Menu Items</ListSubheader>}
      >
        <ListItem>
          <ListItemIcon>
            <Box
              component="img"
              alt="profile"
              src={brunet}
              height="45px"
              width="45px"
              borderRadius="50%"
              sx={{ objectFit: "cover", marginRight: "15px" }}
            />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-wifi"
            primary="Creamy Pesto Pasta"
            secondary="Qr 34"
          />
          <YellowSwitch
            edge="end"
            onChange={handleToggle("Creamy Pesto Pasta")}
            checked={checked.indexOf("Creamy Pesto Pasta") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem>
          <Box
            component="img"
            alt="profile"
            src={Majboos}
            height="45px"
            width="45px"
            borderRadius="50%"
            sx={{ objectFit: "cover", marginRight: "15px" }}
          />
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Lasagna"
            secondary="Qr 57"
          />
          <YellowSwitch
            edge="end"
            onChange={handleToggle("Lasagna")}
            checked={checked.indexOf("Lasagna") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem>
          <Box
            component="img"
            alt="profile"
            src={brunet}
            height="45px"
            width="45px"
            borderRadius="50%"
            sx={{ objectFit: "cover", marginRight: "15px" }}
          />
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Chicken Shawarma"
            secondary="Qr 55"
          />
          <YellowSwitch
            edge="end"
            onChange={handleToggle("Chicken Shawarma")}
            checked={checked.indexOf("Chicken Shawarma") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Box
              component="img"
              alt="profile"
              src={brunet}
              height="45px"
              width="45px"
              borderRadius="50%"
              sx={{ objectFit: "cover", marginRight: "15px" }}
            />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Butter Chicken"
            secondary="Qr 25"
          />
          <YellowSwitch
            edge="end"
            onChange={handleToggle("Butter Chicken")}
            checked={checked.indexOf("Butter Chicken") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Box
              component="img"
              alt="profile"
              src={brunet}
              height="45px"
              width="45px"
              borderRadius="50%"
              sx={{ objectFit: "cover", marginRight: "15px" }}
            />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Chicken Biryani"
            secondary="Qr 25"
          />
          <YellowSwitch
            edge="end"
            onChange={handleToggle("Chicken Biryani")}
            checked={checked.indexOf("Chicken Biryani") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Box
              component="img"
              alt="profile"
              src={brunet}
              height="45px"
              width="45px"
              borderRadius="50%"
              sx={{ objectFit: "cover", marginRight: "15px" }}
            />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Dynamite Chicken Wings"
            secondary="Qr 25"
          />
          <YellowSwitch
            edge="end"
            onChange={handleToggle("Dynamite Chicken Wings")}
            checked={checked.indexOf("Dynamite Chicken Wings") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Box
              component="img"
              alt="profile"
              src={brunet}
              height="45px"
              width="45px"
              borderRadius="50%"
              sx={{ objectFit: "cover", marginRight: "15px" }}
            />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Fried Chicken"
            secondary="Qr 25"
          />
          <YellowSwitch
            name="Fried Chicken"
            edge="end"
            onChange={handleToggle("Fried Chicken")}
            checked={checked.indexOf("Fried Chicken") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Box
              component="img"
              alt="profile"
              src={brunet}
              height="45px"
              width="45px"
              borderRadius="50%"
              sx={{ objectFit: "cover", marginRight: "15px" }}
            />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Veggie Salad"
            secondary="Qr 25"
          />
          <YellowSwitch
            edge="end"
            onChange={handleToggle("Veggie Salad")}
            checked={checked.indexOf("Veggie Salad") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Box
              component="img"
              alt="profile"
              src={brunet}
              height="45px"
              width="45px"
              borderRadius="50%"
              sx={{ objectFit: "cover", marginRight: "15px" }}
            />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Heavebly Platter"
            secondary="Qr 25"
          />
          <YellowSwitch
            edge="end"
            onChange={handleToggle("Heavebly Platter")}
            checked={checked.indexOf("Heavebly Platter") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Menu;
