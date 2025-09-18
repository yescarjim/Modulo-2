//1. Importar
import { verifyToken } from "../config/jwt.js";
//. creamos funcion y ponemos nombre que querramos en este caso auth
export const auth = (requiredRol) => {
    return async (request, response, next) => {
        // Lógica de validación

        // 1. Verificar si si se envia un token en la cabecera de la autorizacion
        const token = request.headers["authorization"];
        //console.log("Cuál es el token recibido, en la cabecera de la peticion" + token);

        if (!token) {
            return response.status(401).json({
                "mensaje": "No se encontró token, permiso denegado"
            });
        }


        //2. Verificar que el token sea permitido (JWT)
        const allowedToken = token.split(" ")[1];
        //console.log("Token despues de separarlo del Bearer:" + allowedToken)

        try {
            const decoded = await verifyToken(allowedToken);
            console.log("Informacion decodificada del token:", decoded);

            //3. Verificar especificamente si el rol es de administrador
            if (requiredRol === "admin" && decoded.admin === false) {
                return response.status(401).json({
                    "mensaje": "Acceso no permitido, no eres administrador"
                });

            }

        } catch (error) {
            return response.status(401).json({
                mensaje: "Falló la autenticación: Token no permitido"
            });

        }

        // Indica que debe continuar con el siguiente proceso
        next();
    };
};