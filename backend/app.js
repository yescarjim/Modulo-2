// el archivo de ejecucion de nuestraaplicacion.
// configurar nuestro servidor y gestionar la lógica de negocio.

// 1. Importar las dependencias y modulos necesarias
import express from "express";
import dotenv from "dotenv";
import { conexionmongo } from "./src/config/db.js";
import { productRouter } from "./src/routes/products.routes.js";
import { userRouter } from "./src/routes/user.routers.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { loginRouter } from "./src/routes/login.routes.js";



//2. Configurar las dependencias que necesitamos
const app =express();
dotenv.config();
const port = process.env.PORT;
conexionmongo();//Esto es lo que hace la conexion con db

const _filename = fileURLToPath(import.meta.url); // _filename = backend/app.js  ruta archivo
const _dirname = path.dirname(_filename);//_dirname = backend           ruta carpeta



//3. Funcionalidades que necesite agregar
//app.get("/",(req,res)=>{
//res.send("server works!")
//});

app.use(cors());// Habilita CORS
app.use(express.json());//para usar formato json en peticiones y respuestas
app.use("/products", productRouter);
app.use ("/users", userRouter);
app.use("/uploads", express.static(path.join(_dirname, "src/uploads")));// Ruta  tiene que ser exactamente igual a el controlador
app.use("/login", loginRouter);

// Servir Frontend
app.use(express.static(path.join(_dirname, "dist", "Frontend", "browser")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(_dirname, "dist", "Frontend", "browser", "index.html"));// archivo puerta de entrada
});


//4. Levantar o poner a funcionar el servidor//3000,6000
app.listen(port, ()=>{
console.log(`El servidor esta ejecutando en http://localhost:${port}`)
});

