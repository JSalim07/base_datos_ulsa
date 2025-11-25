const express = require('express');
const app = express();
const port = 3000;

// Ruta 1
app.get('/', (req, res) => {
    res.send('Bienvenidos al API');
});

// Ruta 2
app.get('/mensaje1', (req, res) => {
    res.send('Awui va el mensaje 1. Hola desde Express!');
});

// Ruta 3
app.get('/saludar/:msg', (req, res) => {
    res.send(`Hola: ${req.params.msg}m`);
});

// Iniciar API
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
