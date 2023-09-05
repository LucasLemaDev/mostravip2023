import { Link } from 'react-router-dom'
import img from '../assets/logo-fv-novo.png'

const Home = () => {
  return (
    <section className='container home'>
        <Link to='/apresentacao'>
            <img src={img} alt="Futuro Vip" />
        </Link>
        <div className='grupo'>
            <span>Turma: 80</span>
            <ul>
                <li>Bernardo Nunes</li>
                <li>João Oliveira</li>
                <li>Letícia Araújo</li>
                <li>Maria Clara D`Amato</li>
                <li>Nathalia Lema</li>
                <li>Nathalie Pontes</li>
                <li>Selena Menezes</li>
                <li>Thaís Albino</li>
            </ul>
        </div>
    </section>
  )
}

export default Home