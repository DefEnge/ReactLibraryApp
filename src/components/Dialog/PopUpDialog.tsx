import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Box, Button } from "@mui/material";
export type PopUpDialogProps = {
  handleClose: () => void;
  open: boolean;
  data: string[];
}



const PopUpDialog: React.FC<PopUpDialogProps> = ({ handleClose, open, data }) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      author: data.get('author'),
      genre: data.get('genre'),
    });
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log(data);
            handleClose();
          },
        }}
      >
        <DialogTitle>Modifica</DialogTitle>
        <DialogContent>
          <DialogContentText align="left">
            Modifica i dati del libro.
          </DialogContentText>
          <Box component="form" onSubmit={handleSubmit}>

            <TextField label="Title" defaultValue={data[0]} />
            <TextField label="Author" defaultValue={data[1]} />
            <TextField label="genre" defaultValue={data[2]} />

          </Box>
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
