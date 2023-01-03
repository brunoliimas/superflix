
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/loading";

import api from "../../services/api"

import home from '../Home/home.module.css';





export default function Home() {

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '809a4920fe0a9d141dd53752bba82eb5',
                    language: 'pt-BR',
                    page: 1,
                }
            })
            // console.log(response.data.results);
            setFilmes(response.data.results);
            setLoading(false);
        }
        loadFilmes()
    }, [])

    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div className="container">
            <div className={home.lista_filmes}>
                {filmes.map((filme) => {
                    return (
                        <div key={filme.id} className={home.card_filme}>
                            <img className={home.poster} src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.original_title} />
                            <div className={home.data}>
                                <span className={home.nota}>{filme.vote_average}</span>
                                <h2 className={home.titulo}>{filme.title}</h2>
                                <span className={home.titulo_original}>{filme.original_title}</span>
                            </div>
                            <Link className="button" to={`/filme/${filme.id}`}>Ver mais</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}