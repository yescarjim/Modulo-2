// 1. Importar dependencias necesarias
import mongoose from "mongoose";

//2.Construir plantilla del modelo
const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    categories: {
        type: String,
        enum: ["Retablos", "Marcos", "Photoset"]
    },
    isAvailable: {
        type: Boolean
    },
     date: {
        type: Date,
        default: Date.now
    }
});

export const productsModel = mongoose.model("products", productSchema);
