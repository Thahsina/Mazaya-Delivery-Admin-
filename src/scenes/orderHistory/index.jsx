import React, { useState } from "react";
import Header from "../../components/Header";
import FlexBetween from "../../components/FlexBetween";
import {
  Box,
  useTheme,
  InputBase,
  IconButton,
  Button,
  ChipProps,
  Chip,
  Dialog,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import WarningIcon from "@mui/icons-material/Warning";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CloseIcon from '@mui/icons-material/Close';
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import FilterOrders from "../../components/FilterOrders";
import OrderDialog from "../../components/OrderDialog";
import Slide from "@mui/material/Slide";

const OrderHistory = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = (event) => {
    console.log(event.target);
    setOpenDialog(!openDialog);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleClick = (event, cellValues) => {
    console.log(cellValues.row.id);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  function getChipProps(params: GridRenderCellParams): ChipProps {
    if (params.value === "Rejected") {
      return {
        icon: <WarningIcon style={{ fontSize: "medium", fill: "#D23030" }} />,
        label: params.value,
        style: {
          borderColor: "#D23030",
          color: "#D23030",
        },
      };
    } else if (params.value === "Ready To Pick") {
      return {
        icon: (
          <ShoppingBagIcon style={{ fontSize: "medium", fill: "#FEBA09" }} />
        ),
        label: params.value,
        style: {
          borderColor: "#FEBA09",
          color: "#FEBA09",
        },
      };
    } else if (params.value === "Cancelled") {
      return {
        icon: (
          <CloseIcon style={{ fontSize: "medium", fill: "#858585" }} />
        ),
        label: params.value,
        style: {
          borderColor: "#858585",
          color: "#858585",
        },
      };
    } 
    else {
      return {
        icon: <DoneIcon style={{ fill: "#66BB6A" }} />,
        label: params.value,
        style: {
          borderColor: "#66BB6A",
          color: "#66BB6A",
        },
      };
    }
  }

  const columns = [
    {
      field: "_id",
      headerName: "Order ID",
      flex: 0.7,
      sortable: true,
    },
    {
      field: "name",
      headerName: "Order Items",
      flex: 1,
    },
    {
      field: "time",
      headerName: "Time",
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      // type: "singleSelect",
      // valueOptions: ["Archieve", "Available"],
      // editable: true,
      flex: 0.5,
      renderCell: (params) => {
        return (
          <Chip variant="outlined" size="small" {...getChipProps(params)} />
        );
      },
    },

    {
      field: "actions",
      headerName: "Action",

      flex: 0.5,
      renderCell: (cellValues) => {
        return (
          <FlexBetween gap="0.5rem">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffe3a3",
                color: theme.palette.grey[800],
                "&:hover": {
                  backgroundColor: "#FEBA09",
                  color: theme.palette.grey[900],
                },
                height: "1.3rem",
                borderRadius: "10px",
              }}
              // onClick={handleDialogOpen}
              onClick={(event) => {
                handleClick(event, cellValues);
                handleDialogOpen(event);
              }}
            >
              View
            </Button>
          </FlexBetween>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      _id: "63e026fd24cddc4076c1721e",
      name: "Chef Signature Salad",
      time: "4:00",
      status: "Accepted",
    },
    {
      id: 2,
      _id: "33a026fd24cddc4076c1721h",
      name: "Ceaser Salad",
      time: "6:08",
      status: "Accepted",
    },
    {
      id: 3,
      _id: "57e026fd24cddc40786c1721e",
      name: "Corn Stick",
      time: "6:30",
      status: "Accepted",
    },
    {
      id: 4,
      _id: "57e026fd24cddc40786c1721e",
      name: "Chicken Strips",
      time: "11:00",
      status: "Ready To Pick",
    },
    {
      id: 5,
      _id: "57e026fd24cddc40786c1721e",
      name: "Dynamite Shrimps",
      time: "18:00",
      status: "Rejected",
    },
    {
      id: 6,
      _id: "54ve026fd24cddc40786c1721e",
      name: "Power Plate",
      time: "20:01",
      status: "Accepted",
    },
    {
      id: 7,
      _id: "5we026fd24cddr40786c1721e",
      name: "Fried Tempura, Crispy Chicken, Chicken Popcorn",
      time: "16:00",
      status: "Cancelled",
    },
    {
      id: 8,
      _id: "5we026fd24cddr40786c1721e",
      name: "BBQ Plater",
      time: "19:00",
      status: "Rejected",
    },
    {
      id: 9,
      _id: "5we026fd24cddr40786c1721e",
      name: "Lamb Grape Vines",
      time: "16:00",
      status: "Accepted",
    },
    {
      id: 10,
      _id: "5we026fd24cddr40786c1721e",
      name: "Chicken Wrap",
      time: "21:40",
      status: "Ready To Pick",
    },
    {
      id: 11,
      _id: "5we026fd24cddr40786c1721e",
      name: "Chicken Wrap",
      time: "21:40",
      status: "Cancelled",
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween gap="3.5rem">
        <Header title="Order History" />
        <FilterOrders />
      </FlexBetween>

      <Box
        mt="10px"
        height="78vh"
        width="100%"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            // backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          // loading={isLoading || !data}
          // getRowId={(row) => row._id}
          rows={rows}
          columns={columns}
        />

        <Dialog
          fullWidth
          maxWidth="sm"
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleDialogClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <OrderDialog />
        </Dialog>
      </Box>
    </Box>
  );
};

export default OrderHistory;
