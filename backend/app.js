// el archivo de ejecucion de nuestraaplicacion.
// configurar nuestro servidor y gestionar la lógica de negocio.

// 1. Importar las dependencias y modulos necesarias
import express from "express";
import dotenv from "dotenv";
import { conexionmongo } from "./src/config/db.js";
import { productRouter } from "./src/routes/products.routes.js";
import { userRouter } from "./src/routes/user.routers.js";
import cors from "cors";


//2. Configurar las dependencias que necesitamos
const app =express();
dotenv.config();
const port = process.env.PORT;

conexionmongo();//Esto es lo que hace la coneccion con db



//3. Funcionalidades que necesite agregar
app.get("/",(req,res)=>{
res.send("server works!")
});

app.use(cors());// Habilita CORS
app.use(express.json());//para usar formato json en peticiones y respuestas
app.use("/products", productRouter);
app.use ("/users", userRouter);


//4. Levantar o poner a funcionar el servidor//3000,6000
app.listen(port, ()=>{
console.log(`El servidor esta ejecutando en http://localhost:${port}`)
});

