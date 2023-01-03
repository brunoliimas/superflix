import { Link } from 'react-router-dom'

import header from './header.module.css'

export default function Header() {
    return (
        <header>
            <div className='container'>
                <Link className={header.logo} to="/">Superflix</Link>
                <Link className='button' to="/favoritos">Meus Filmes</Link>
            </div>
        </header>
    )
}