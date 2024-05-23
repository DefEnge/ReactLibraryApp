import { NavBar } from "../../components";
import React, { useState, useEffect } from "react"
import { ContentWrapper, FormWrapper } from "../../components/Wrapper/style";
import { Button, Link, TextField, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { mock_user } from "../../constants/mock_data/mock_user";
import { mock_book } from "../../constants/mock_data/mock_books";
import { Box } from "@mui/joy";

type Label = { label: string };

const CediPage: React.FC = () => {

  const outputArray: Label[] = mock_user.map(person => ({
    label: `${person.first_name} ${person.last_name}`
  }));

  const booksOutput: Label[] = mock_book.map(({ book_title }) => { return { label: book_title } });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newItem = { code: data.get('code'), book_title: data.get('books'), user: data.get('user') };
    console.log(newItem);
    mock_book.push(newItem);

  }

  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Typography sx={{ alignItems: "left", color: "White" }} variant="h1" >Cedi libro</Typography>

        <FormWrapper >
          <Box component="form" sx={{ display: " flex", flexDirection: "column", justifyContent: "space-between", background: "white", minHeight: "20rem", }} onSubmit={handleSubmit}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={booksOutput}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} name="books" label="books" />}
            />
            <TextField id="outlined-basic" name="code" label="Codice" variant="outlined" defaultValue={`${Math.floor(Math.random() * 999)}-${Math.floor(Math.random() * 999)}`} />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={outputArray}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} name="user" label="utenti" />}
              noOptionsText={<Button component={Link} href="/utenti" >add user</Button>}
            />

            <Button variant="contained" type="submit">submit</Button>
          </Box>
        </FormWrapper>

      </ContentWrapper>
    </>
  );
}
export default CediPage

