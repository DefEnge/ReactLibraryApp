import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Box } from "@mui/material";
export type PopUpCancelProps = {
  handleClose: () => void;
  open: boolean;
  data: string[];
}



const PopUpCancel: React.FC<PopUpCancelProps> = ({ handleClose, open }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(
      data
    );
  };



  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>Elimina il libro</DialogTitle>
          <DialogContent>
            <DialogContentText align="left">
              Stai per eliminare il libro.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Elimina</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment >

  );
}

export default PopUpCancel;
