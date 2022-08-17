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