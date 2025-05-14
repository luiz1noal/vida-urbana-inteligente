import React from "react";
import { CardLivros } from "../Components/LivroCard";
import { Link } from "react-router-dom";
import './Home.css';

export const Home = () => {
    return (
        <div>
            <Link to="/adicionar-livros">
                <button>Adicionar Livro</button>
            </Link>
            <h1>Livros Comunitários</h1>
            <CardLivros />
        </div>
    );
};
