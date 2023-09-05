import styles from '../assets/styles/Pontos.module.css'

const Pontos = ({pontos}) => {
  return (
    <div className={`animedown ${styles.pontos}`}>
        <ul>
            {pontos.map((ponto, index) => <li key={index}><button>{ponto}</button></li>)}
        </ul>
    </div>
  )
}

export default Pontos