import { NavBar } from "../../components";
import { ContentWrapper, FormWrapper } from "../../components/Wrapper/style";
import { Button, Link, TextField, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { default as data } from "../../constants/mock_data/mock_user.json";
import { Box } from "@mui/joy";

type Label = { label: string };

const CediPage: React.FC = () => {
  console.log(data);

  const outputArray: Label[] = data.map(person => ({
    label: `${person.first_name} ${person.last_name}`
  }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      author: data.get('author'),
      code: data.get('code'),
      user: data.get('user'),
    });
  }

  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Typography sx={{ alignItems: "left", color: "White" }} variant="h1" >Cedi libro</Typography>

        <FormWrapper>
          <Box component="form" sx={{ display: " flex", flexDirection: "column" }} onSubmit={handleSubmit}>
            <TextField id="outlined-basic" name="title" label="Nome Libro" variant="outlined" />
            <TextField id="outlined-basic" name="author" label="Autore" variant="outlined" />
            <TextField id="outlined-basic" name="code" label="Codice" variant="outlined" />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={outputArray}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} name="user" label="utenti" />}
              noOptionsText={<Button component={Link} href="/utenti" >add user</Button>}
            />

            <Button type="submit">submit</Button>
          </Box>
        </FormWrapper>

      </ContentWrapper>
    </>
  );
}
export default CediPage

