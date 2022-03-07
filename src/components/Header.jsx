//css imports
import '../sass/header.css'
//navbar
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
//incons impots
import { GrFacebook, GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr'

const Header = () => {

    return ( <header className="navbar d-flex justify-content-around">
        <BrowserRouter>
            <Link className='logo col-1 col-lg-0' to='/'>Galeria</Link>

            <nav className="menu d-flex col-0 col-lg-6 justify-content-around">
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/'>Fotos</Link>
                <Link className='link' to='/'>Serviços</Link>
                <Link className='link' to='/'>Sobre</Link>
                <Link className='link' to='/'>Contato</Link>
            </nav>

            <nav class="d-flex col-4 justify-content-around">
                <a href='/' className='socialMedia'>
                    <GrFacebook />
                </a>

                <a href='/' className='socialMedia'>
                    <GrTwitter />
                </a>

                <a href='/' className='socialMedia'>
                    <GrInstagram />
                </a>

                <a href='/' className='socialMedia'>
                    <GrYoutube />
                </a>
            </nav>
        </BrowserRouter>
    </header> );
}

export default Header;