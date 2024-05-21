import { NavBar } from "../../components";
import { ContentWrapper, FormWrapper } from "../../components/Wrapper/style";
import { Box } from "@mui/joy";
import { Button, TextField, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { default as data } from "../../constants/mock_data/mock_user.json"

type Label = { label: string };

const PrendiPage: React.FC = () => {

  const outputArray: Label[] = data.map(person => ({
    label: ` ${person.Code}`
  }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      code: data.get('code'),
    });
  }

  return (
    <>
      <NavBar></NavBar>
      <ContentWrapper>
        <Typography sx={{ alignItems: "left", color: "black" }} variant="h1" >Prendi libro</Typography>

        <FormWrapper>
          <Box component="form" sx={{ display: " flex", flexDirection: "column" }} onSubmit={handleSubmit}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={outputArray}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} name="code" label="code" />}
              noOptionsText="No Code found"
            />

            <Button type="submit">submit</Button>
          </Box>
        </FormWrapper>

      </ContentWrapper>
    </>
  );
}

export default PrendiPage;
