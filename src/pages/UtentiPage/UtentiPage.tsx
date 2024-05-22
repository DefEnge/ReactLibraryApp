import { NavBar } from "../../components";
import { PopUpUserAddDialog } from "../../components"
import React, { useState } from "react";
import { default as data } from "../../constants/mock_data/mock_user.json"
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const UserTable: GridColDef<(typeof data)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'first_name',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'last_name',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'email',
    width: 200,
    editable: false,
  },

];

const UtentiPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };


  return (
    <>
      <NavBar />
      <Box sx={{ background: "white" }}>
        <DataGrid rows={data} columns={UserTable} initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
          pageSizeOptions={[10]} />

        <Box sx={{ display: "flex", flexDirection: "column", background: "white", alignItems: "center", justifyContent: "center", height: 75 }}>
          <Button variant="contained" onClick={handleClickOpen}>add user</Button>
        </Box>
      </Box >

      <PopUpUserAddDialog handleClose={handleClose} open={open} ></PopUpUserAddDialog>

    </>

  );
}
export default UtentiPage;
