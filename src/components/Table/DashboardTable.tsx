import React from "react";
import { TableContainer, Table, TableRow, TableHead, TableCell, TableBody, } from "@mui/material";
import { ContentWrapper } from "../Wrapper/style";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import MuiButton from "../Button/Button";
import PopUpDialog from "../Dialog/PopUpDialog";
import PopUpCancel from "../Dialog/PopupCancel";
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

  const [opendelete, setOpendelete] = React.useState(false);

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

  const IdParser = (index: number) => {
    id = index;
  };

  let id: number = 0;


  return (
    <ContentWrapper>
      <TableContainer >
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow>
              {FirstRow.map((text, index) => (
                <>
                  <TableCell align={index == 0 ? '' : 'right'}>{text}</TableCell >
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
                <TableCell align="right">{IconSelector(row.taken)}</TableCell>
                <MuiButton onClick={() => { IdParser(index); handleClickOpen() }} Text="Dettaglio"></MuiButton>
                <MuiButton onClick={handleDeleteOpen} Text="Elimina Libro"></MuiButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PopUpDialog handleClose={handleClose} open={open} index={id}></PopUpDialog>
      <PopUpCancel handleClose={handleDeleteClose} open={opendelete} ></PopUpCancel>

    </ContentWrapper >

  );
}
export default DashboardTable;
