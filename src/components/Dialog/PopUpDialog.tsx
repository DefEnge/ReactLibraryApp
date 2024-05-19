import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
export type PopUpDialogProps = {
  handleClose: () => void;
  open: boolean;
  index?: number
}



const PopUpDialog: React.FC<PopUpDialogProps> = ({ handleClose, open, index }) => {

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log(index);
            handleClose();
          },
        }}
      >
        <DialogTitle>Modifica</DialogTitle>
        <DialogContent>
          <DialogContentText align="left">
            Modifica i dati del libro.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">modifica</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment >

  );
}

export default PopUpDialog;
