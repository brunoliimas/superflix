import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import fav from'./favoritos.module.css'



export default function Favoritos (){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@superflix");
        setFilmes(JSON.parse(minhaLista) || []);
    },[])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((filme) =>{
            return(filme.id !== id)
        })
        setFilmes(filtroFilmes)
        localStorage.setItem("@superflix", JSON.stringify(filtroFilmes))

        toast.success("Filme excluido com sucesso :)")
    }
    return(
        <div className={`container ${fav.favoritos}`}>
            <h1>Favoritos</h1>

            {filmes.length === 0 && <span className={fav.alerta}>Você não possui nenhum filme salvo :(</span>}

            <div className={fav.filmes}>
                <ul>
                    {filmes.map((filme)=>{
                        return(
                            <li className={fav.card} key={filme.id}>
                                <span>{filme.title}</span>
                                <div className={fav.links}>
                                    <Link to={`/filme/${filme.id}`}>Ver mais</Link>
                                    <button onClick={()=>{excluirFilme(filme.id)}} className={`button`}>Excluir</button>
                                </div> 
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}