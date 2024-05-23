import { NavBar } from "../../components";
import { ContentWrapper, FormWrapper } from "../../components/Wrapper/style";
import { Box } from "@mui/joy";
import { Button, TextField, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { mock_order } from "../../constants/mock_data/mock_order"

type Label = { label: string };

const PrendiPage: React.FC = () => {

  const outputArray: Label[] = mock_order.map(person => ({
    label: ` ${person.code}`
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
        <Typography sx={{ alignItems: "left", color: "white" }} variant="h1" >Prendi libro</Typography>

        <FormWrapper>
          <Box component="form" sx={{ background: "white", display: " flex", flexDirection: "column", justifyContent: "space-between", minHeight: "7rem" }} onSubmit={handleSubmit}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={outputArray}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} name="code" label="code" />}
              noOptionsText="No Code found"
            />

            <Button variant="contained" type="submit">Submit</Button>
          </Box>
        </FormWrapper>

      </ContentWrapper>
    </>
  );
}

export default PrendiPage;
