import './App.css'
import { Links } from './constants'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { MenuPage, DashboardPage } from './pages'


const App: React.FC = () => {

  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" Component={MenuPage}></Route>
        <Route path={Links[0]} Component={MenuPage}></Route>
        <Route path={Links[1]} Component={DashboardPage}></Route>
        <Route path={Links[2]} Component={MenuPage}></Route>
        <Route path={Links[3]} Component={MenuPage}></Route>
        <Route path={Links[4]} Component={MenuPage}></Route>
      </Routes >
    </HashRouter >
  )
}

export default App;
