const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PUERTO = 4000;
const conexion = mysql.createConnection({
    host:'localhost',
    database:'pruebas',
    user: 'root',
    password:''
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});

conexion.connect(error => {
    if(error) throw error;

    console.log('Conexion exitosa a la Base de Datos');
})

// GET ALL
app.get('/', (req,res) => {
    res.send('API');
})

// GET USERS
app.get('/usuarios', (req,res) => {
    conexion.query('SELECT * FROM usuarios;', (error, resultados) => {
        if(error) return console.log(error.message);

        if(resultados.length > 0){
            res.json(resultados);
        } else {
            res.send('No hay registros');
        }
    })
})