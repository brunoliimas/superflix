import { Link } from "react-router-dom"
import errorImage from '../../assets/error.svg'
import erro from './erro.module.css'

export default function Erro() {
    return (
        <div className={`container ${erro.error}`}>
            <img className={erro.image} src={errorImage} alt="Error" />
            <div className={erro.text}>
                <h3>A página que você está procurando não foi encontrada :(</h3>
                <h3>Sugerimos que você volte para a página inicial</h3>
            </div>
            <Link className="button" to="/">Início</Link>
        </div>
    )
} 