import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Box, Button } from "@mui/material";
export type PopUpUserDialogProps = {
  handleClose: () => void;
  open: boolean;
}



const PopUpUserAddDialog: React.FC<PopUpUserDialogProps> = ({ handleClose, open }) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      email: data.get('email')
    });
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add user</DialogTitle>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogContent>
            <TextField id="firstname" name="firstname" label="First name" />
            <TextField id="lastname" name="lastname" label="Last name" />
            <TextField id="email" name="email" label="email" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">add user</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment >

  );
}

export default PopUpUserAddDialog;
