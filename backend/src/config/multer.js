//1. importaciones necesarias
import multer from "multer";
import path from "path"; // modulo de node
import fs from "fs";// modulo de node
import { fileURLToPath } from "url";// modulo de node


// Desarrollo de las Funcionalidades -> ES6
const _filename = fileURLToPath(import.meta.url); // _filename=backend/src/config/multer.js
//Es para saber cual es el nombre del archivo donde estoyse refire al archivo
const _dirname = path.dirname(_filename);//_dirname=backend/src/config
//es para saber cual es la organizacion o estructuracion de las carpetas y carpeta  donde esta este archivo


//1. Crear una carpeta donde se guarden los archivos subidos
const UPLOADS_FOLDER = path.join(_dirname, "../uploads");
// sino existe la carpeta UPLOADS creela
if (!fs.existsSync(UPLOADS_FOLDER)) {
    fs.mkdirSync(UPLOADS_FOLDER)
}


//2. Especificar como vamos a guardar los archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //donde vamos a guardar el archivo
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);// la extension .jpg   .png .pdf .svg
        const base = path.basename(file.originalname, ext).replace(/\s+/g, "_");// nombre base
        cb(null, `${base}-${Date.now()}${ext}`); // nombre del Archivo
    }
});


// 3. Definir que tipo de archivos  vamos a recibir - >
const fileFilter = (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp", "image/jpg"];

    if (allowed.includes(file.mimetype)) {
        cb(null, true) // Si el archivo es permitido lo guarde en la carpeta uploads
    } else {
        cb(new Error("Archivo no permitido"), false)// no puede guardar el archivo
    }
}


//4. Definir limites - tamaño archivo
// Ej: 5MB
const limits = {
    fileSize: 5 * 1024 * 1824 // 5MB
}

//5.Exportar esas caracteristicas
//El unico obligatorio es Storage
export const upload= multer({storage, fileFilter, limits});
