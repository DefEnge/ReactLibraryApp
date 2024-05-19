import { MuiButton, NavBar } from "../../components";
import { ContentWrapper, FormWrapper } from "../../components/Wrapper/style";
import { TextField, Typography, Autocomplete } from "@mui/material";
import { default as data } from "../../constants/mock_data/mock_user.json";

const CediPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Typography sx={{ alignItems: "left" }} variant="h1" >Cedi libro</Typography>

        <FormWrapper>
          <TextField id="outlined-basic" label="Nome Libro" variant="outlined" />
          <TextField id="outlined-basic" label="Autore" variant="outlined" />
          <TextField id="outlined-basic" label="Codice" variant="outlined" />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={data}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Utenti" />}
          />
          <MuiButton Text="Cedi"></MuiButton>
        </FormWrapper>

      </ContentWrapper>
    </>
  );
}
export default CediPage

