import React, { useState, useEffect } from "react";
import axios from "axios";
import './AdicionarLivros.css';

export const AdicionarLivros = () => {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/livros')
            .then(res => setLivros(res.data))
            .catch(err => console.error(err));
    }, []);

    const adicionarLivro = (e) => {
        e.preventDefault();

        const novoLivro = { titulo, autor };

        axios.post('http://localhost:5000/livros', novoLivro)
            .then(res => {
                setLivros([...livros, res.data]);
                setTitulo("");
                setAutor("");
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="adicionar-livros">
            <h2>Adicionar Livro Favorito</h2>
            <form onSubmit={adicionarLivro}>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Título do livro"
                    required
                />
                <input
                    type="text"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                    placeholder="Autor do livro"
                    required
                />
                <button type="submit">Adicionar</button>
            </form>

            <h3>📚 Livros Adicionados</h3>
            <ul className="lista-livros">
                {livros.map((livro, index) => (
                    <li key={index}>
                        <strong>{livro.titulo}</strong> — {livro.autor}
                    </li>
                ))}
            </ul>
        </div>
    );
};
