import { alpha, styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const YellowSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#ffe3a3",
    "&:hover": {
      backgroundColor: alpha(
        theme.palette.grey[600],
        theme.palette.action.hoverOpacity
      ),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#ffe3a3",
  },
}));

export default YellowSwitch;
