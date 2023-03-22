import React from "react";
import {
  Box,
  TextField,
  Autocomplete,
  useMediaQuery,
  // useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const FilterProduct = () => {
  // const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
    gridColumn: "span 1",
    "& .MuiOutlinedInput-root": {
      color: theme.palette.secondary[500],
      borderRadius: "2rem",
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.secondary[400],
    },
    "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
      backgroundColor: theme.palette.primary[500],
    },
    "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected='true']":
      {
        color: theme.palette.secondary[500],
      },
    "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected ='true'].Mui-focused":
      {
        color: theme.palette.secondary[500],
      },
      "& > div": { width: isNonMobile ? "15rem" : "7rem" },
    //   width:"7rem"
  }));

  return (
    <Box
      display="grid"
      gap="30px"
      gridTemplateColumns="repeat(1, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <StyledAutocomplete
        disablePortal
        id="combo-box-demo"
        options={categories}
        renderInput={(params) => <TextField {...params} label="Filter Orders" />}
      />

      
    </Box>
  );
};

export default FilterProduct;

const categories = [
  { label: "All" },
  { label: "Accepted Orders" },
  { label: "Rejected Orders" },
  
];

