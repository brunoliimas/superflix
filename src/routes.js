import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/home';
import Filme from './pages/Filme/filme';
import Favoritos from './pages/Favoritos/favoritos';


import Header from './components/Header/header';
import Erro from './pages/Erro/erro';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/filme/:id' element={<Filme />} />
                    <Route path='/favoritos' element={<Favoritos />} />
                    <Route path='/*' element={<Erro />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}