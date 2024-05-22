import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Box } from "@mui/material";
export type PopUpCancelProps = {
  handleClose: () => void;
  open: boolean;
  data: string[];
}



const PopUpCancel: React.FC<PopUpCancelProps> = ({ handleClose, open, data }) => {
  const handleSubmit = (data: string[]) => {
    data.forEach(element => {
      console.log(element)
    });
  };



  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <Box component="form">
          <DialogTitle>Elimina il libro</DialogTitle>
          <DialogContent>
            <DialogContentText align="left">
              Stai per eliminare il libro.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleSubmit(data)} >Elimina</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment >

  );
}

export default PopUpCancel;
