import { NavLink, Routes, Route } from 'react-router-dom'
import Pontos from './Pontos'

const Apresentacao = () => {
    const pontos = {
        positivos: [
            'Meios de comunicação mais eficientes',
            'Facilidade para acessar informações',
            'Gestão inteligente',
            'Relação custo-benefício, eficiência de custos',
            'Inovação em muitas áreas'
        ],
        negativos: [
            'Diminuição da interação pessoal',
            'Frustração',
            'Segurança da informação',
            'Impaciência',
            'Competir com inteligências Artificiais'
        ]
    }
  return (
    <div className='apresentacao animeDown'>
        <p>Quais são os pontos positivos e quais são os negativos do desenvolvimento acelerado das novas tecnologias?</p>
        <nav className='animeDown'>
            <NavLink to='/apresentacao/positivos'>Pontos Positivos</NavLink>
            <NavLink to='/apresentacao/negativos'>Pontos Negativos</NavLink>
        </nav>
        <Routes>
            <Route path='/positivos' element={<Pontos pontos={pontos.positivos}/>}/>
            <Route path='/negativos' element={<Pontos pontos={pontos.negativos}/>}/>
        </Routes>
    </div>
  )
}

export default Apresentacao