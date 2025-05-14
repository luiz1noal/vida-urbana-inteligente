import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/adicionar-livros">Adicionar Livros</Link></li>
            </ul>
        </nav>
    );
};
