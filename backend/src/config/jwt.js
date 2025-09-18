//1. Importar dependencias y modulos necesarios
import dotenv from "dotenv";
import jsonwebtoken, { decode } from "jsonwebtoken";

//2. Configurar las variables de entorno
dotenv.config();
const key = process.env.SECRET_KEY;

//3. Configurar el uso de jsonwebtoken

//3.1 metodo para generar JWT
//payload -> Informacion del usuario
export const generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        //.sign genera el token
        jsonwebtoken.sign(payload, key, { expiresIn: "1h" }, (error, token) => {
            if (error) {
                reject(new Error("Hubo un error al generar JWT", error.message))
            }else{
                resolve(token);
            }
        });
    });
}


//3.2 metodo para verificar JWT
// token -> info encriptado
export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, key, (error, decoded) => {
            if (error) {
                reject(new Error("Hubo un error al verificar el JWT", error.message));
            } else {
                resolve(decoded);
            }
        })
    });

}

