//1. Importar dependencias y modulos necesarios
import { productsModel } from "../models/products.model";

//Definir las acciones que van a realizar - CRUD

//1.metodo para CREAR un producto -> POST
export const postProduct = (request, response) => {
    // aca va la lógica de la petición
    return response.json({ "mensaje": "Funciona peticion POST" })
}

//2. Metodo para MOSTRAR todos los productos -> GET
export const getAllProducts = (request, response) => {
    return response.json({ "mensaje": "Funciona peticion GET" });
}

//3. Metodo para ACTUALIZAR un producto -> PUT
export const putProductById = (request, response) => {
    return response.json({ "mensaje": "Fuciona peticion PUT" });
}

//4. Metodo para ELIMINAR un Producto -> DELETE
export const deleteProductById = (request, response) => {
    return response.json({ "mensaje": "Fuciona peticion DELETE" });
}