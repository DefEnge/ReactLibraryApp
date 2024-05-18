import React from "react";
import { TableContainer, Table, TableRow, TableHead, TableCell, TableBody, } from "@mui/material";
import { TableWrapper } from "../Wrapper/style";
import MuiButton from "../Button/Button";
import PopUpDialog from "../Dialog/PopUpDialog";

type MuiTableProp = {
  FirstRow: string[],
  data: any, //TODO find the right type
}




const DashboardTable: React.FC<MuiTableProp> = ({ FirstRow, data }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  return (
    <TableWrapper>
      <TableContainer >
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow>
              {FirstRow.map((text, index) => (
                <>
                  <TableCell align={index == 0 ? "" : "right"}>{text}</TableCell >
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={row.book_title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.book_title}
                </TableCell>
                <TableCell align="right">{row.author}</TableCell>
                <TableCell align="right">{row.genre}</TableCell>
                <TableCell align="right">{row.taken}</TableCell>
                <MuiButton onClick={handleClickOpen} Text="Dettaglio"></MuiButton>
                <MuiButton Text="Elimina Libro"></MuiButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PopUpDialog handleClose={handleClose} open={open} ></PopUpDialog>

    </TableWrapper >

  );
}
export default DashboardTable;
