const express = require('express');
const app = express();
const port = 3000;

// Ruta 1
app.get('/', (req, res) => {
    res.send('Equipo: Sebastian Avitia y Justin Contreras');
});

// Ruta 2
app.get('/equipo', (req, res) => {
    res.send('Equipo: Sebastian Avitia y Justin Contreras');
});

// Ruta 2
app.get('/ulsa', (req, res) => {
    res.send('Somos una institución que forma parte de una red global de inspiración cristiana lasallista; comprometida con la educación profesional y formación integral de las personas quienes, con su acción transformadora, trasciendan al coadyuvar en la construcción de una ciudadanía responsable y solidaria, en el cambio social y el cuidado de la Casa Común');
});

// Ruta 3
app.get('/saludar/:msg', (req, res) => {
    res.send(`Hola: ${req.params.msg}`);
});

// Iniciar API
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

