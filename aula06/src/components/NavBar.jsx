import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Inicial</Link>
        <br/>
        <Link to="/dpo-lgpd">DPO LGPD</Link>
        <br/>
        <Link to="/contato">Contatos</Link>
        <br/>
        <Link to="/noticias">Notícias</Link>
    </nav>
  )
}

export default NavBar