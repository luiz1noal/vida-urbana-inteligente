import React, { useState } from "react";
import axios from "axios";
import "./LivroCard.css";

export const CardLivros = () => {
    const [busca, setBusca] = useState('');
    const [livros, setLivros] = useState([]);

    const buscarLivros = (e) => {
        e.preventDefault();

        const query = busca.trim().replace(/\s+/g, '+');
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            .then(res => setLivros(res.data.items || []))
            .catch(err => console.error(err));
    };

    return (
        <div className="card-livros">
            <form className="form-busca" onSubmit={buscarLivros}>
                <input
                    type="text"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    placeholder="Digite o nome do livro"
                />
                <button type="submit">Buscar</button>
            </form>

            <div className="livros-container">
                {livros.map((livro) => {
                    const info = livro.volumeInfo;
                    return (
                        <div key={livro.id} className="livro">
                            <img
                                src={info.imageLinks?.thumbnail}
                                alt={info.title}
                            />
                            <h3>{info.title}</h3>
                            <p><em>{info.authors?.join(', ') || 'Autor desconhecido'}</em></p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
