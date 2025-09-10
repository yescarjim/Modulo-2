//1. Importar dependencias y modulos necesarios
import { productsModel } from "../models/products.model.js";

//Definir las acciones que van a realizar - CRUD

//1. Método para CREAR un producto -> POST
export const postProduct = async (request, response) => {
    try {
        await productsModel.create(request.body);

        return response.status(201).json({
            "mensaje": "Producto creado correctamente"
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error al crear producto",
            "error": error.message || error
        });
    }
    // aca va la lógica de la petición
    //  return response.json({ "mensaje": "Funciona peticion POST" })
}


//2. Método para MOSTRAR todos los productos -> GET
export const getAllProducts = async (request, response) => {
    try {
        const allProducts = await productsModel.find();
        return response.status(200).json({
            "mensaje": "Funciona pero no hay que mostrar",
            "data": allProducts
        })

    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrio un error al mostrar productos",
            "error": error.message || error
        })
    }

}



//3. Método para ACTUALIZAR un producto -> PUT
export const putProductById = async (request, response) => {
    try {
    const idForUpdate = request.params.id;
    const dataForUpdate = request.body;

    await productsModel.findByIdAndUpdate(idForUpdate,dataForUpadate);
    return response.status(200).json({
        "mensaje":"Producto actualizado axitosamente"
    });

    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrio un error al actualizar producto",
            "error": error.message || error
        });

    }
}

//4. Método para ELIMINAR un Producto -> DELETE
export const deleteProductById = async (request, response) => {
    try {
const idForDelete = request.params.id;
await productsModel.findByIdAndDelete(idForDelete);

return response.status(200).json({
    "mensaje": "Producto eliminado exitosamente"
});

    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrio un error al eliminar producto",
            "error": error.message || error
        })

    }
}