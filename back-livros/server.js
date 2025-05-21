import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let livros = [];

app.get('/livros', (req, res) => {
  res.json(livros);
});

app.post('/livros', (req, res) => {
  const novoLivro = req.body;
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
