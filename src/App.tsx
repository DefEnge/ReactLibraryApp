import './App.css'
import { NavLinks } from './constants'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { MenuPage } from './pages'


const App: React.FC = () => {

  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" Component={MenuPage}></Route>
        <Route path="/" Component={MenuPage}></Route>
        <Route path="/" Component={MenuPage}></Route>
        <Route path="/" Component={MenuPage}></Route>
        <Route path="/" Component={MenuPage}></Route>
      </Routes >
    </HashRouter >
  )
}

export default App;
