import { DashboardTable, NavBar } from "../../components";
import { DashBoardTable } from "../../constants";
import { default as data } from "../../constants/mock_data/mock_books.json";


const DashboardPage: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <DashboardTable FirstRow={DashBoardTable} data={data}></DashboardTable>


    </>
  );
}

export default DashboardPage
