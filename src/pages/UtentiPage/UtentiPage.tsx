import { NavBar } from "../../components";
import { UtentiTable } from "../../components";
import { default as data } from "../../constants/mock_data/mock_user2.json"

const UtentiPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <UtentiTable data={data} />
    </>

  );
}
export default UtentiPage;
