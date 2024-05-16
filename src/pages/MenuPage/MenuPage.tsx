import { NavBar } from "../../components";
import { MenuWrapper } from "../../components/Wrapper/style";
import BookPlaceHolder from "../../svg/BookPlaceHolder";

const MenuPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <MenuWrapper>
        <BookPlaceHolder sx={{ width: "20rem", height: "20rem", opacity: "25%" }}></BookPlaceHolder>
        <h1>Benvenuto nell'app di gestione della libreria</h1>
        <h2>Premi l'icona in alto a destra per vedere le opzioni</h2>
      </MenuWrapper>

    </>
  );

}
export default MenuPage
