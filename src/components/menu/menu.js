import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item nav-item-bebidas">
                        <Link to="/lista" className="nav-link">Lista</Link>
                    </li>
                    <li className="nav-item nav-item-bebidas">
                        <Link to="/add" className="nav-link">Cadastrar</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu