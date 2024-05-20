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
      genre: data.get('genre')
    });
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Modifica</DialogTitle>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogContentText align="left">
            Modifica i dati del libro.
          </DialogContentText>
          <DialogContent>
            <TextField id="title" name="title" label="Title" defaultValue={data[0]} />
            <TextField id="author" name="author" label="Author" defaultValue={data[1]} />
            <TextField id="genre" name="genre" label="genre" defaultValue={data[2]} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">modifica</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment >

  );
}

export default PopUpDialog;
