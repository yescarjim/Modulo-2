import { userModel } from "../models/users.models.js";
import bcryptjs from "bcryptjs";


//1.metodo para CREAR un Usuario -> POST
export const postUser = async (request, response) => {
    try {
        //deestructuracion cuando se hace-procesar 
        //la informacion del usuario  antes de guardarla
        const { name, usarname, email, age, password, role } = request.body;
        //.hash encripta la contraseña
        const codedPassword = bcryptjs.hash(password, 10)

        await userModel.create({
            name,
            username,
            email,
            age,
            password: codedPassword,
            role

        });

        return response.status(201).json({
            "mensaje": "Usuario creado correctamente"
        });

        

    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error al crear un usuario",
            "error": error.message || error //alt+124o altgr + 1
        });
    }
}

//2. Metodo para MOSTRAR todos los usuarios -> GET
export const getAllUsers = async (request, response) => {
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