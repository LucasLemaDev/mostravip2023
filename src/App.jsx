import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Apresentacao from './Components/Apresentacao'

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1><Link to='/'>Mostra Vip 2023</Link></h1>
        <h2>O futuro do mundo <br/>X <br/>O mundo do futuro</h2>
      </header>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/apresentacao/*' element={<Apresentacao/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
