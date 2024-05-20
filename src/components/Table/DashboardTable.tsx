import React, { useState } from "react";
import { TableContainer, Table, TableRow, TableHead, TableCell, TableBody, } from "@mui/material";
import { ContentWrapper } from "../Wrapper/style";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import MuiButton from "../Button/Button";
import PopUpDialog from "../Dialog/PopUpDialog";
import PopUpCancel from "../Dialog/PopupCancel";
type MuiTableProp = {
  FirstRow: string[],
  data: [], //TODO find the right type
}





const DashboardTable: React.FC<MuiTableProp> = ({ FirstRow, data }) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const [opendelete, setOpendelete] = useState(false);

  const handleDeleteOpen = () => {
    setOpendelete(true)
  };

  const handleDeleteClose = () => {
    setOpendelete(false)
  };



  const IconSelector: React.ElementType = (taken: boolean) => {
    if (taken == true) {
      return <CloseIcon />;
    } else {
      return <CheckIcon />;
    }
  };

  const [row_data, setRowData] = useState([]);


  return (
    <ContentWrapper>
      <TableContainer >
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow>
              {FirstRow.map((text, index) => (
                <>
                  <TableCell align={index === 0 ? "left" : "right"}>{text}</TableCell >
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ book_title, author, genre, taken }) => (
              <TableRow
                key={book_title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {book_title}
                </TableCell>
                <TableCell align="right">{author}</TableCell>
                <TableCell align="right">{genre}</TableCell>
                <TableCell align="right">{IconSelector(taken)}</TableCell>
                <MuiButton onClick={() => { setRowData([book_title, author, genre]); handleClickOpen(); }} Text="Dettaglio"></MuiButton>
                <MuiButton onClick={handleDeleteOpen} Text="Elimina Libro"></MuiButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PopUpDialog handleClose={handleClose} open={open} data={row_data}></PopUpDialog>
      <PopUpCancel handleClose={handleDeleteClose} open={opendelete} ></PopUpCancel>

    </ContentWrapper >

  );
}
export default DashboardTable;
