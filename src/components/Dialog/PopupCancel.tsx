import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
export type PopUpCancelProps = {
  handleClose: () => void;
  open: boolean;
}



const PopUpCancel: React.FC<PopUpCancelProps> = ({ handleClose, open }) => {

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleClose();
          },
        }}
      >
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
      </Dialog>
    </React.Fragment >

  );
}

export default PopUpCancel;
