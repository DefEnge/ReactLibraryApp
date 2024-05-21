import './App.css'
import { Links } from './constants'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MenuPage, DashboardPage, CediPage, UtentiPage, PrendiPage } from './pages'
const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />}></Route>
        <Route path={Links[0]} element={<MenuPage />}></Route>
        <Route path={Links[1]} element={<DashboardPage />}></Route>
        <Route path={Links[2]} element={<CediPage />}></Route>
        <Route path={Links[3]} element={<PrendiPage />}></Route>
        <Route path={Links[4]} element={<UtentiPage />}></Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;
