import { userModel } from "../models/users.models";

//1.metodo para CREAR un Usuario -> POST
export const postUser = (request, response) => {
    // aca va la lógica de la petición
    return response.json({ "mensaje": "Funciona peticion POST" })
}

//2. Metodo para MOSTRAR todos los usuarios -> GET
export const getAllUsers = (request, response) => {
    return response.json({ "mensaje": "Funciona peticion GET" });
}

//3. Metodo para ACTUALIZAR un usuario -> PUT
export const putUserById = (request, response) => {
    return response.json({ "mensaje": "Fuciona peticion PUT" });
}

//4. Metodo para ELIMINAR un usuario -> DELETE
export const deleteUserById = (request, response) => {
    return response.json({ "mensaje": "Fuciona peticion DELETE" });
}