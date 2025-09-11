//1. importaciones necesarias
import multer from "multer";
import path from "path"; // modulo de node
import fs from "fs";// modulo de node
import {fileURLToPath}  from "url";// modulo de node


// Desarrollo de las Funcionalidades
const _filename = fileURLToPath(import.meta.url); // _filename=backend/src/config/multer.js
//Es para saber cual es el nombre del archivo donde estoy
const _dirname = path.dirname(_filename);//_dirname=backend/src/config
//es para saber cual es la organizacion o estructuracion de las carpetas y donde esta este archivo


//1. Crear una carpeta donde se guarden los archivos subidos
 const UPLOADS_FOLDER = path.join(_dirname, "../uploads");
// sino existe la carpeta UPLOADS creela
 if(!fs.existsSync(UPLOADS_FOLDER)){
    fs.mkdirSync (UPLOADS_FOLDER)
 }


//2. Especificar como vamos a guardar los archivos
export const storage =multer.diskStorage({
    destination: (req, file, cb)=>{
        //donde vamos a guardar el archivo
        cb(null, UPLOADS_FOLDER);
    },
        filename:(req, file,cb)=>{
           const ext = path.extname(file.originalname);// la extension .jpg   .png .pdf .svg
    const base = path.basename(file.originalname, ext).replace(/\s+/g, "_");// nombre base
    cb(null, `${base}-${Date.now()}${ext}`); // nombre del Archivo
        }
});



// 3. Definir que tipo de archivos  vamos a recibir - >






//4. Definir limites - tamaño archivo






//5.Exportar esas caracteristicas