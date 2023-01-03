import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Loading from "../../components/Loading/loading";
import api from "../../services/api";

import film from './filme.module.css'
import { UilStar, UilArrowLeft } from '@iconscout/react-unicons'

export default function Filme() {

    const { id } = useParams();
    const navigate = useNavigate()

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '809a4920fe0a9d141dd53752bba82eb5',
                    language: 'pt-BR',
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    navigate("/", { replace: true });
                    return;
                })
        }
        loadFilme();

        return () => {
            console.log("Filme sumiu");
        }
    }, [id, navigate])



    function salvarFilme() {
        const minhaLista = window.localStorage.getItem("@supeflix");
        console.log(minhaLista);
        
        let filmesSalvos = JSON.parse(minhaLista) || [];
        console.log(filmesSalvos);

        const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)
        console.log(hasFilme);

        if (hasFilme) {
            alert("Ja ta salvo");
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem("@superflix", JSON.stringify(filmesSalvos));
        alert("Salvo com sucesso");
        return;
    }

    if (loading) {
        return (
            <Loading />
        )
    }
    const nota = filme.vote_average


    return (
        <div className={`container ${film.container}`}>
            <div className={film.card_filme}>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.original_title} />
                <div className={film.data}>
                    <span className={film.nota}>{nota.toFixed(1)}</span>
                    <h1 className={film.titulo}>{filme.title}</h1>
                    <span className={film.titulo_original}>{filme.original_title}</span>
                    <h3 className={film.subtitulo}>Sinopse</h3>
                    <p className={film.text}>{filme.overview}</p>
                    <div className={film.links}>
                        <Link className="button" to="/">
                            <UilArrowLeft />
                        </Link>
                        <a target="blank" rel="external" className="button" href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
                        <button onClick={salvarFilme} className={`button ${film.fav}`}>
                            <UilStar />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}