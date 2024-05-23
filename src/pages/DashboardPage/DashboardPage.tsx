import { DashboardTable, NavBar } from "../../components";
import { DashBoardTable } from "../../constants";
import { mock_book } from "../../constants/mock_data/mock_books";


const DashboardPage: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <DashboardTable FirstRow={DashBoardTable} data={mock_book}></DashboardTable>


    </>
  );
}

export default DashboardPage
