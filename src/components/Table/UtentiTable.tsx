import React, { useState } from "react"
import { ContentWrapper } from "../Wrapper/style";
import { TableContainer, Table, TableRow, TableHead, TableCell, TableBody, } from "@mui/material";
import MuiButton from "../Button/Button";
import { UserTable } from "../../constants";
import PopUpUserAddDialog from "../Dialog/PopUpUserAddDialog";

type UtentiTableProp = {
  data: {}[];
};


const UtentiTable: React.FC<UtentiTableProp> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };


  return (
    <>
      <ContentWrapper>
        <TableContainer>
          <Table sx={{ background: "white", minWidth: 650 }}>
            <TableHead sx={{ background: "lightblue" }}>
              <TableRow>
                {UserTable.map((text) => (
                  <>
                    <TableCell>{text}</TableCell>
                  </>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(({ id, first_name, last_name, email }) => (
                <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" >{id}</TableCell>
                  <TableCell  >{first_name}</TableCell>
                  <TableCell  >{last_name}</TableCell>
                  <TableCell  >{email}</TableCell>
                </TableRow>))}
            </TableBody>

          </Table>
        </TableContainer>
        <MuiButton onClick={handleClickOpen} Text="Add user"></MuiButton>
        <PopUpUserAddDialog handleClose={handleClose} open={open} ></PopUpUserAddDialog>
      </ContentWrapper >
    </>

  );
}
export default UtentiTable;

