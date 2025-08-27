// el archivo de ejecucion de nuestraaplicacion.
// configurar nuestro servidor y gestionar la lógicca de negocio.

// 1. Importar las dependencias necesarias
import express from "express";
import dotenv from "dotenv";
//2. Configurar las dependencias que necesitamos
const app =express();
dotenv.config();

const port = process.env.PORT;

//3. Funcionalidades que necesite agregar
app.get("/",(req,res)=>{
res.send("server works!")
});

//4. Levantar o poner a funcionar el servidor//3000,6000
app.listen(port, ()=>{
console.log(`El servidor esta ejecutando en http://localhost:${port}`)
});

