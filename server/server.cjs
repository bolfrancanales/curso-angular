const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let productos = [
  {
    id: 1,
    nombre: 'Laptop',
    descripcion: 'Computadora para trabajo y estudio',
    votos: 0
  },
  {
    id: 2,
    nombre: 'Mouse',
    descripcion: 'Dispositivo para controlar el cursor',
    votos: 0
  },
  {
    id: 3,
    nombre: 'Teclado',
    descripcion: 'Dispositivo para ingresar texto',
    votos: 0
  }
];

// GET: devuelve todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// POST: recibe un producto JSON y lo agrega al arreglo
app.post('/productos', (req, res) => {
  const nuevoProducto = {
    id: Date.now(),
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    votos: 0
  };

  productos.push(nuevoProducto);

  res.status(201).json(nuevoProducto);
});

app.listen(PORT, () => {
  console.log(`API ejecutándose en http://localhost:${PORT}`);
});